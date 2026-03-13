"use client";

import { useState } from "react";

import type { Dictionary } from "@/i18n";

type KeunggulanSectionProps = {
  dictionary: Dictionary;
};

export function KeunggulanSection({ dictionary }: KeunggulanSectionProps) {
  const tabs = dictionary.advantages.tabs;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: "url('/images/WEBSITE BASS (2) 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative mx-auto max-w-[1920px] px-8 lg:px-16">
        {/* Section title */}
        {/* data-aos applied inline below */}
        <h2
          className="mx-auto text-center font-extrabold"
          data-aos="fade-up"
          data-aos-duration="700"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(28px, 3vw, 48px)",
            lineHeight: "78px",
            fontWeight: 800,
            maxWidth: "1193px",
            color: "#1a1a1a",
          }}
        >
          Keunggulan Program Pelatihan BASS ACADEMY
        </h2>

        {/* Tab switcher */}
        <div className="mt-8 flex items-center justify-center" data-aos="fade-up" data-aos-delay="150">
          <div
            className="relative inline-flex"
            style={{
              width: "min(648px, 90vw)",
              height: "66px",
              background: "linear-gradient(94.64deg, #EDEDED -31.72%, #FFFFFF 89.99%)",
              borderRadius: "54px",
              padding: "6px",
            }}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative flex-1 flex items-center justify-center rounded-[54px] px-6 transition-all"
                style={{
                  height: "100%",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(14px, 1.1vw, 20px)",
                  fontWeight: activeIndex === index ? 500 : 400,
                  color: "#000000",
                  fontStyle: activeIndex === index ? "italic" : "normal",
                  textDecoration: activeIndex === index ? "underline" : "none",
                }}
              >
                {/* Active yellow pill */}
                {activeIndex === index && (
                  <span
                    className="absolute inset-0 rounded-[54px]"
                    style={{
                      background: "linear-gradient(82.18deg, #F7DC8B -14.9%, #FFC71D 163.86%)",
                      zIndex: 0,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Red card */}
        <div
          className="relative mx-auto mt-10 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="700"
          style={{
            maxWidth: "1424px",
            borderRadius: "54px",
            background: "linear-gradient(98.67deg, #B00E1C 11.55%, #C72E37 48.76%, #CC454B 101.55%)",
            padding: "clamp(32px, 4vw, 60px) clamp(24px, 5vw, 80px)",
          }}
        >
          {/* Yellow ellipse decorators */}
          <div
            className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "50%",
              background: "#F7DC8B",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2"
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "50%",
              background: "#F7DC8B",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left: title + description */}
            <div>
              <h3
                className="font-extrabold text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(24px, 2.8vw, 45px)",
                  lineHeight: "78px",
                  fontWeight: 800,
                  textShadow: "4px 5px 4px rgba(0,0,0,0.15)",
                }}
              >
                {activeTab.summary || "Mentor Praktisi Profesional"}
              </h3>
              <p
                className="mt-4 text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 24px)",
                  lineHeight: "60px",
                  textAlign: "justify",
                  maxWidth: "687px",
                }}
              >
                {activeTab.description ||
                  "Belajar langsung dari mentor berpengalaman yang aktif di industri. Peserta mendapatkan insight, feedback, dan cara kerja profesional yang tidak ditemukan di buku atau kelas konvensional."}
              </p>
            </div>

            {/* Right: points table */}
            <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 backdrop-blur">
              <div className="grid grid-cols-[0.8fr_1.2fr] bg-black/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                <span>Aspek</span>
                <span>Penjelasan</span>
              </div>
              {activeTab.points.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[0.8fr_1.2fr] gap-4 px-5 py-4 text-sm ${
                    index !== activeTab.points.length - 1 ? "border-t border-white/10" : ""
                  }`}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "#F7DC8B", fontFamily: "Poppins, sans-serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="leading-7 text-white/90"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
