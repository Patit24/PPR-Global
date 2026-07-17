"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { LeadSubmissionInput } from "@/lib/lead/schema";

type LazyLeadCaptureFormProps = {
  variant?: "popup" | "contact" | "compact";
  source?: string;
  projectViewed?: string;
  onSuccess?: (lead: LeadSubmissionInput) => void;
};

const LeadCaptureForm = dynamic(
  () => import("./LeadCaptureForm").then((mod) => mod.LeadCaptureForm),
  {
    ssr: false,
    loading: () => <FormSkeleton />
  }
);

function FormSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="grid gap-4"
    >
      <div className="h-12 rounded-md bg-white/8" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-12 rounded-md bg-white/8" />
        <div className="h-12 rounded-md bg-white/8" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-12 rounded-md bg-white/8" />
        <div className="h-12 rounded-md bg-white/8" />
      </div>
      <div className="h-28 rounded-md bg-white/8" />
      <div className="h-12 rounded-full bg-acid/85" />
    </div>
  );
}

export function LazyLeadCaptureForm(props: LazyLeadCaptureFormProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    observer.observe(node);
    const fallbackId = window.setTimeout(() => setShouldLoad(true), 12000);

    return () => {
      window.clearTimeout(fallbackId);
      observer.disconnect();
    };
  }, [shouldLoad]);

  return <div ref={ref}>{shouldLoad ? <LeadCaptureForm {...props} /> : <FormSkeleton />}</div>;
}
