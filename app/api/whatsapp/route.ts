import { NextRequest, NextResponse } from "next/server";
import { whatsappLink } from "@/lib/lead/whatsapp";

export function GET(request: NextRequest) {
  const message =
    request.nextUrl.searchParams.get("message") ||
    "Hi PPR Global, I visited your portfolio and would like to discuss a project.";

  return NextResponse.redirect(whatsappLink(message));
}

