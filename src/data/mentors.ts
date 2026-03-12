export type Mentor = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export const mentors: Mentor[] = [
  {
    name: "Nadia Prameswari",
    role: "Senior Product Designer",
    description: "Berpengalaman membangun sistem desain untuk startup edtech dan fintech regional.",
    image: "/images/mentor-nadia.svg",
  },
  {
    name: "Rizky Adiputra",
    role: "Frontend Engineering Lead",
    description: "Membimbing peserta memahami workflow engineering modern dan standar industri.",
    image: "/images/mentor-rizky.svg",
  },
  {
    name: "Talitha Ayu",
    role: "Learning Experience Specialist",
    description: "Fokus pada kurikulum, asesmen berbasis kompetensi, dan evaluasi pembelajaran.",
    image: "/images/mentor-talitha.svg",
  },
  {
    name: "Bima Kurniawan",
    role: "Data & Business Analyst",
    description: "Mengintegrasikan studi kasus bisnis nyata ke dalam program pelatihan teknis.",
    image: "/images/mentor-bima.svg",
  },
];
