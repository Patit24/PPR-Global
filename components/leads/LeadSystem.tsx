"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ContactWidgets } from "./ContactWidgets";

const LeadPopup = dynamic(() => import("./LeadPopup").then((mod) => mod.LeadPopup), {
  ssr: false
});

export function LeadSystem() {
  const [loadPopup, setLoadPopup] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoadPopup(true), 7000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loadPopup ? <LeadPopup /> : null}
      <ContactWidgets />
    </>
  );
}
