"use client";

import { animate, stagger } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import type { Dictionary } from "@/i18n";

type HeroSectionProps = {
  dictionary: Dictionary;
};

export function HeroSection({ dictionary }: HeroSectionProps) {
  const hero = dictionary.hero;
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Left content: set semua children opacity 0 dulu, lalu animate stagger
    if (leftRef.current) {
      const children = Array.from(leftRef.current.children) as HTMLElement[];
      children.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
      });
      animate(children, {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(130, { start: 150 }),
        duration: 850,
        easing: "easeOutExpo",
      });
    }
    // Right image: set opacity 0 dulu, lalu fade + scale
    if (rightRef.current) {
      rightRef.current.style.opacity = "0";
      animate(rightRef.current, {
        opacity: [0, 1],
        scale: [0.92, 1],
        duration: 1000,
        delay: 350,
        easing: "easeOutExpo",
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "calc(100vh - 72px)" }}>
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/WEBSITE BASS (1) 1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-8 lg:px-[8.3%]">
        <div
          className="grid items-center gap-10 py-16"
          style={{ gridTemplateColumns: "1fr 0.88fr", minHeight: "calc(100vh - 72px)" }}
        >
          {/* ── Left content ── */}
          <div ref={leftRef}>
            {/* "Bangun Kompetensi Bersama" badge */}
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(18px, 1.6vw, 30px)",
                lineHeight: "91px",
                color: "#000000",
              }}
            >
              Bangun Kompetensi Bersama
            </p>

            {/* Main hero title */}
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(72px, 8.5vw, 160px)",
                lineHeight: "1.0",
                background:
                  "linear-gradient(282.56deg, #D87878 -34.06%, #C1121F 60.28%, #7E0011 142.73%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(4px 5px 4px rgba(0,0,0,0.15))",
                marginTop: "0.25rem",
              }}
            >
              BASS<br />ACADEMY!
            </h1>

            {/* Description */}
            <p
              className="mt-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.3vw, 24px)",
                lineHeight: "49px",
                textAlign: "justify",
                color: "#000000",
                maxWidth: "779px",
              }}
            >
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/kontak"
                className="flex items-center justify-center transition-opacity hover:opacity-90 active:scale-95"
                style={{
                  width: "224px",
                  height: "72px",
                  background: "#C1121F",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "9px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 1.1vw, 20px)",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                {hero.primaryCta}
              </Link>

              <Link
                href="/layanan"
                className="flex items-center justify-center transition-colors hover:bg-gray-50 active:scale-95"
                style={{
                  width: "224px",
                  height: "72px",
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "9px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 1.1vw, 20px)",
                  lineHeight: "30px",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div
            ref={rightRef}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative" style={{ width: "100%", maxWidth: "841px", aspectRatio: "1/1" }}>
              <Image
                src="/images/WEBSITE BASS 1.png"
                alt="BASS Academy"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
