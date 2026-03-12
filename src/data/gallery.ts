export type GalleryItem = {
  title: string;
  category: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Bootcamp Frontend Cohort 12",
    category: "Classroom Session",
    description: "Dokumentasi sesi live coding, diskusi mentor, dan presentasi project peserta.",
  },
  {
    title: "Career Mentoring Day",
    category: "Mentoring",
    description: "Kegiatan konsultasi karier, review CV, dan simulasi interview bersama praktisi HR.",
  },
  {
    title: "Industry Partner Visit",
    category: "Partnership",
    description: "Kunjungan dan sharing session bersama mitra industri untuk sinkronisasi kebutuhan kompetensi.",
  },
  {
    title: "Certification Assessment",
    category: "Assessment",
    description: "Pelaksanaan evaluasi objektif dengan rubrik yang terstruktur dan outcome terukur.",
  },
  {
    title: "Design Sprint Workshop",
    category: "Workshop",
    description: "Peserta berkolaborasi dalam tim untuk memecahkan studi kasus produk digital.",
  },
  {
    title: "Graduation Showcase",
    category: "Showcase",
    description: "Demo day hasil project akhir yang dipresentasikan ke mentor dan partner perusahaan.",
  },
];
