"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return <>{children}</>;
}
