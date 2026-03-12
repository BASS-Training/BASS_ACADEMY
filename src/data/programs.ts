export type Program = {
  slug: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  schedule: string;
  location: string;
  category: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development Bootcamp",
    description:
      "Program intensif untuk membangun fondasi HTML, CSS, JavaScript, React, dan best practice pengembangan antarmuka modern.",
    level: "Beginner to Intermediate",
    duration: "8 minggu · 2x per minggu",
    schedule: "12 April 2026 - 31 Mei 2026",
    location: "Hybrid Class, Jakarta & Online",
    category: "Bootcamp",
    highlights: ["Project-based learning", "Code review mingguan", "Portfolio capstone"],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX Product Design Essentials",
    description:
      "Pelatihan desain digital yang menekankan riset pengguna, wireframing, design system, dan handoff ke developer.",
    level: "All Levels",
    duration: "6 minggu · Weekend class",
    schedule: "19 April 2026 - 24 Mei 2026",
    location: "Online Live Session",
    category: "Training",
    highlights: ["Mentoring by practitioners", "Real case simulation", "Design portfolio output"],
  },
  {
    slug: "data-analysis-business",
    title: "Data Analysis for Business",
    description:
      "Kelas pemetaan data bisnis menggunakan spreadsheet, SQL dasar, dashboarding, dan visualisasi insight untuk kebutuhan industri.",
    level: "Intermediate",
    duration: "5 minggu · 2x per minggu",
    schedule: "26 April 2026 - 29 Mei 2026",
    location: "BASS Learning Center",
    category: "Upskilling",
    highlights: ["Dashboard workshop", "Business case dataset", "Assessment certificate"],
  },
];
