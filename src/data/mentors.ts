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
];
