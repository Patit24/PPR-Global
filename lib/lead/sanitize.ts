export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
}

export function sanitizeLeadValues<T extends Record<string, unknown>>(values: T) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      typeof value === "string" ? sanitizeText(value) : value
    ])
  ) as T;
}

export function detectDevice(userAgent: string) {
  if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
    return "mobile";
  }

  return "desktop";
}

export function getBrowser(userAgent: string) {
  if (/edg/i.test(userAgent)) return "Edge";
  if (/chrome|crios/i.test(userAgent)) return "Chrome";
  if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) return "Safari";
  if (/firefox|fxios/i.test(userAgent)) return "Firefox";
  return userAgent.slice(0, 150) || "Unknown";
}

