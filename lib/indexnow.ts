import { business } from "@/lib/business";

export async function submitIndexNowUrls(urls: string[]) {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    return { ok: false, message: "INDEXNOW_KEY is not configured." };
  }

  const uniqueUrls = Array.from(new Set(urls.filter((url) => url.startsWith(business.url))));

  if (!uniqueUrls.length) {
    return { ok: false, message: "No canonical URLs to submit." };
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      host: "www.pprglobal.online",
      key,
      keyLocation: `${business.url}/${key}.txt`,
      urlList: uniqueUrls
    })
  });

  return {
    ok: response.ok,
    status: response.status,
    message: response.ok ? "Submitted to IndexNow." : await response.text()
  };
}

