"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DesktopHomeClient = dynamic(() => import("./HomeClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#f7f7f1]" aria-hidden="true" />
  )
});

export function DesktopHomeClientLoader() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isDesktop ? <DesktopHomeClient /> : null;
}
