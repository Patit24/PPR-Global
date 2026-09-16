"use client";

import dynamic from "next/dynamic";
import { ContactWidgets } from "./ContactWidgets";

const LeadPopup = dynamic(() => import("./LeadPopup").then((mod) => mod.LeadPopup), {
  ssr: false
});

export function LeadSystem() {
  return (
    <>
      <LeadPopup />
      <ContactWidgets />
    </>
  );
}
