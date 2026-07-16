import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.rewrite(new URL("/home-static.html", request.url));
  response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return response;
}

export const config = {
  matcher: ["/"]
};
