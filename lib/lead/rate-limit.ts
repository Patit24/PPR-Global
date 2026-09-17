type Bucket = {
  count: number;
  resetAt: number;
};

const MAX_BUCKETS = 10000;
const buckets = new Map<string, Bucket>();

function cleanupExpiredBuckets(now: number) {
  buckets.forEach((bucket, key) => {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  });
}

export function checkRateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();

  // Periodically clean up when size grows large
  if (buckets.size > MAX_BUCKETS) {
    cleanupExpiredBuckets(now);
    // If still too large after cleanup, remove oldest entries
    if (buckets.size > MAX_BUCKETS) {
      const keysToDelete = Array.from(buckets.keys()).slice(0, 1000);
      for (const k of keysToDelete) {
        buckets.delete(k);
      }
    }
  }

  const current = buckets.get(key);

  if (!current || current.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count += 1;
  return true;
}

