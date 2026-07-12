import { NextRequest, NextResponse } from "next/server";
import { submitIndexNowUrls } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET;
  const auth = request.headers.get("authorization") || "";

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as { urls?: string[] };
  const result = await submitIndexNowUrls(body.urls || []);

  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}

