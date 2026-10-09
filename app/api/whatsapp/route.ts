import { NextRequest, NextResponse } from "next/server";
import { whatsappLink } from "@/lib/lead/whatsapp";

export function GET(request: NextRequest) {
  const message =
    request.nextUrl.searchParams.get("message") ||
    "Hi PPR Global, I visited your portfolio and would like to discuss a project.";
  const source = request.nextUrl.searchParams.get("source") || "direct_link";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for") ||
    "unknown";

  // Server-side click logging
  console.info(`[WhatsApp Click] timestamp=${new Date().toISOString()} ip=${ip} source=${source} userAgent=${userAgent} message="${message.slice(0, 80)}"`);

  return NextResponse.redirect(whatsappLink(message));
}

