import { NextRequest, NextResponse } from "next/server";
import { createAuthenticatedSupabaseClient } from "@/lib/lead/supabase";

export const runtime = "nodejs";

function getAccessToken(request: NextRequest) {
  const header = request.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

export async function GET(request: NextRequest) {
  const token = getAccessToken(request);

  if (!token) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search")?.trim();
  const status = searchParams.get("status")?.trim();
  const service = searchParams.get("service")?.trim();
  const budget = searchParams.get("budget")?.trim();
  const from = searchParams.get("from")?.trim();
  const to = searchParams.get("to")?.trim();

  try {
    const supabase = createAuthenticatedSupabaseClient(token);
    let query = supabase.from("leads").select("*").order("created_at", { ascending: false });

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);
    }
    if (status && status !== "all") {
      query = query.eq("lead_status", status);
    }
    if (service && service !== "all") {
      query = query.eq("service", service);
    }
    if (budget && budget !== "all") {
      query = query.eq("budget", budget);
    }
    if (from) {
      query = query.gte("created_at", from);
    }
    if (to) {
      query = query.lte("created_at", `${to}T23:59:59.999Z`);
    }

    const { data, error } = await query.limit(500);

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true, leads: data ?? [] });
  } catch (error) {
    console.error("Admin lead fetch failed", error);
    return NextResponse.json(
      { ok: false, message: "Could not load leads." },
      { status: 500 }
    );
  }
}

