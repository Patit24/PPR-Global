import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/lead/rate-limit";
import { leadSubmissionSchema } from "@/lib/lead/schema";
import { detectDevice, getBrowser, sanitizeLeadValues } from "@/lib/lead/sanitize";
import { sendLeadEmails } from "@/lib/lead/email";
import { createServiceSupabaseClient } from "@/lib/lead/supabase";
import { verifyTurnstile } from "@/lib/lead/turnstile";

export const runtime = "nodejs";

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

async function forwardToGoogleSheets(payload: Record<string, unknown>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store"
  });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSubmissionSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  const userAgent = request.headers.get("user-agent") || "";
  const turnstileValid = await verifyTurnstile(parsed.data.turnstileToken, ip);

  if (!turnstileValid) {
    return NextResponse.json(
      { ok: false, message: "Spam protection failed. Please try again." },
      { status: 400 }
    );
  }

  const lead = sanitizeLeadValues({
    ...parsed.data,
    device_type: parsed.data.device_type || detectDevice(userAgent),
    browser: parsed.data.browser || getBrowser(userAgent)
  });

  const insertPayload = {
    name: lead.name,
    email: lead.email || null,
    phone: lead.phone || null,
    service: lead.service,
    budget: lead.budget || "Not decided",
    message: lead.message,
    consent: lead.consent ?? true,
    page_url: lead.page_url || null,
    page_title: lead.page_title || null,
    project_viewed: lead.project_viewed || null,
    referrer: lead.referrer || null,
    utm_source: lead.utm_source || null,
    utm_medium: lead.utm_medium || null,
    utm_campaign: lead.utm_campaign || null,
    device_type: lead.device_type || null,
    browser: lead.browser || null,
    lead_status: "new"
  };

  let leadId = `lead_${Date.now()}`;

  // Always attempt email and webhook notifications
  const notificationPromises = [
    sendLeadEmails(lead).catch((err) => console.error("Failed to send lead email:", err)),
    forwardToGoogleSheets(insertPayload).catch((err) => console.error("Failed to forward to sheets:", err))
  ];

  // Try Supabase insert gracefully without blocking if unconfigured
  try {
    const supabase = createServiceSupabaseClient();
    const { data, error } = await supabase
      .from("leads")
      .insert(insertPayload)
      .select("id")
      .single();

    if (!error && data?.id) {
      leadId = data.id;
    } else if (error) {
      console.warn("Supabase lead insertion warning:", error.message);
    }
  } catch (supabaseError) {
    console.warn("Supabase client init/insert skipped:", supabaseError);
  }

  await Promise.allSettled(notificationPromises);

  const whatsAppMessage = `Hi PPR Global, I submitted a consultation request on your website. Name: ${lead.name}, Phone: ${lead.phone || "N/A"}, Service: ${lead.service}, Preferred Slot: ${lead.preferred_slot || "ASAP"}.`;
  const whatsappUrl = `https://wa.me/919609079663?text=${encodeURIComponent(whatsAppMessage)}`;

  return NextResponse.json({
    ok: true,
    leadId,
    whatsappUrl,
    message: "Thanks! We received your request and will contact you shortly."
  });
}

