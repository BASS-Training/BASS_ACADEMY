import type { Dictionary } from "@/i18n";

type WhyBassSectionProps = {
  dictionary: Dictionary;
};

export function WhyBassSection({ dictionary }: WhyBassSectionProps) {
  const items = dictionary.whyBass.items;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-16">
        {/*
          Figma layout (1920px canvas):
          Left  column: 0–1062px  → video
          Right column: 1062–1794px → Group 16 (732px wide, 359px tall)
          Ratio ≈ 55% / 38% of canvas
        */}
        <div className="flex justify-center">

          {/* ── Group 16 (732×359px on Figma) ── */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/*
              Title block + yellow bar decorators
              Figma: title at top:1215 (container top), bars at top:1244 & top:1254
              → bars are 29px & 39px from container top → sits beside line-1 of title
              Left bar : left:0   width:138px
              Right bar: right:0  width:138px  (1612-1062=550 → ends at 688px ≈ right edge)
            */}
            <div className="relative">

              {/* Yellow bar decoration — LEFT side */}
              <div
                className="pointer-events-none absolute left-0"
                style={{ top: "29px" }}
              >
                {/* thin bar (5px) */}
                <div style={{ width: "clamp(80px, 10vw, 138px)", height: "5px", background: "#F7DC8B", marginBottom: "5px" }} />
                {/* thick bar (11px) */}
                <div style={{ width: "clamp(80px, 10vw, 138px)", height: "11px", background: "#F7DC8B" }} />
              </div>

              {/* Yellow bar decoration — RIGHT side */}
              <div
                className="pointer-events-none absolute right-0"
                style={{ top: "29px" }}
              >
                <div style={{ width: "clamp(80px, 10vw, 138px)", height: "5px", background: "#F7DC8B", marginBottom: "5px" }} />
                <div style={{ width: "clamp(80px, 10vw, 138px)", height: "11px", background: "#F7DC8B" }} />
              </div>

              {/* Title — text-align: center, 687px wide in Figma */}
              <h2
                className="text-center font-extrabold"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3vw, 45px)",
                  lineHeight: "78px",
                  background:
                    "linear-gradient(282.56deg, #D87878 -34.06%, #C1121F 60.28%, #7E0011 142.73%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(4px 5px 4px rgba(0,0,0,0.15))",
                }}
              >
                KENAPA HARUS<br />BASS ACADEMY?
              </h2>
            </div>

            {/*
              List items
              Figma: Group 9 at top:1394 → 1394-1215 = 179px below container top
              text left:1107 (45px indent from container) with red vector bullets
            */}
            <ul className="mt-10 space-y-1 pl-[52px]" style={{ position: "relative" }}>
              {items.map((item, i) => (
                <li
                  key={item.title}
                  className="relative flex items-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 100 + 200}
                  style={{ minHeight: "60px" }}
                >
                  {/* Red bullet vector */}
                  <span className="absolute -left-10 shrink-0" style={{ top: "50%", transform: "translateY(-50%)" }}>
                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 13.9933L26.6727 10.2742L27.1364 5.35117L22.2136 4.25418L19.6364 0L15 1.95318L10.3636 0L7.78636 4.25418L2.86364 5.33779L3.32727 10.2609L0 13.9933L3.32727 17.7124L2.86364 22.6488L7.78636 23.7458L10.3636 28L15 26.0334L19.6364 27.9866L22.2136 23.7324L27.1364 22.6354L26.6727 17.7124L30 13.9933ZM12.2727 20.6823L6.81818 15.3311L8.74091 13.4448L12.2727 16.8963L21.2591 8.08027L23.1818 9.97993L12.2727 20.6823Z" fill="#C1121F"/>
                    </svg>
                  </span>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(15px, 1.3vw, 24px)",
                      lineHeight: "60px",
                      color: "#000000",
                      textAlign: "justify",
                    }}
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
