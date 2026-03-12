export type Testimonial = {
  name: string;
  role: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aulia Rahman",
    role: "Mahasiswa Sistem Informasi",
    review:
      "Materi disusun rapi dan mentor benar-benar menjelaskan bagaimana standar kerja di industri. Portofolio saya jadi jauh lebih kuat.",
  },
  {
    name: "Salsa Putri",
    role: "Fresh Graduate",
    review:
      "BASS Academy membantu saya menutup gap antara teori kampus dan kebutuhan perusahaan. Simulasi proyeknya relevan dan menantang.",
  },
  {
    name: "Dimas Prasetyo",
    role: "Siswa SMK Rekayasa Perangkat Lunak",
    review:
      "Belajar jadi lebih terarah karena ada kurikulum, mentoring, dan penilaian yang jelas. Saya jadi lebih siap masuk dunia kerja.",
  },
  {
    name: "Hana Olivia",
    role: "HR Partnership Coordinator",
    review:
      "Kolaborasi dengan BASS Academy memudahkan kami menjaring kandidat dengan skill yang lebih siap kerja dan attitude yang baik.",
  },
];
