import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AosProvider } from "@/components/providers/aos-provider";
import { getDictionary, isLocale, type Locale } from "@/i18n";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bass-academy.vercel.app"),
  title: {
    default: "BASS Academy",
    template: "%s | BASS Academy",
  },
  description:
    "BASS Academy adalah lembaga pelatihan dan pengembangan kompetensi untuk siswa, mahasiswa, fresh graduate, dan mitra industri.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale is resolved on the server so every page renders with the correct copy on first load.
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("bass-locale")?.value;
  const locale: Locale = isLocale(localeCookie) ? localeCookie : "id";
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={poppins.variable}>
      <body className="bg-background text-foreground antialiased">
        <div className="relative min-h-screen overflow-x-clip">
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(193,18,31,0.16),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(255,199,29,0.28),_transparent_34%)]" /> */}
          <Navbar locale={locale} dictionary={dictionary} />
          <AosProvider>
            <main>{children}</main>
          </AosProvider>
          <Footer locale={locale} dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
