import { NextRequest, NextResponse } from "next/server";
import { adminLeadUpdateSchema } from "@/lib/lead/schema";
import { sanitizeLeadValues } from "@/lib/lead/sanitize";
import { createAuthenticatedSupabaseClient } from "@/lib/lead/supabase";

export const runtime = "nodejs";

function getAccessToken(request: NextRequest) {
  const header = request.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = getAccessToken(request);

  if (!token) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = adminLeadUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Invalid lead update." }, { status: 400 });
  }

  const { id } = await params;

  try {
    const supabase = createAuthenticatedSupabaseClient(token);
    const { data, error } = await supabase
      .from("leads")
      .update({
        ...sanitizeLeadValues(parsed.data),
        updated_at: new Date().toISOString()
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true, lead: data });
  } catch (error) {
    console.error("Admin lead update failed", error);
    return NextResponse.json(
      { ok: false, message: "Could not update lead." },
      { status: 500 }
    );
  }
}

