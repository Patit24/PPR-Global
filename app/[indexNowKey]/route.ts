import { NextRequest } from "next/server";

export function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ indexNowKey: string }> }
) {
  return params.then(({ indexNowKey }) => {
    const key = process.env.INDEXNOW_KEY;

    if (!key || indexNowKey !== `${key}.txt`) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(key, {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  });
}

