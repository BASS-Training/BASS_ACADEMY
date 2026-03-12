import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/800-italic.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AosProvider } from "@/components/providers/aos-provider";
import { getDictionary, isLocale, type Locale } from "@/i18n";
import "./globals.css";

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
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("bass-locale")?.value;
  const locale: Locale = isLocale(localeCookie) ? localeCookie : "id";
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <div className="relative min-h-screen overflow-x-clip">
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
