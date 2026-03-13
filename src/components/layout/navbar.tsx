"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { locales, type Dictionary, type Locale } from "@/i18n";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (nextLocale: Locale) => {
    startTransition(() => {
      void fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: nextLocale }),
      }).then(() => router.refresh());
    });
  };

  const navigation = dictionary.navigation.items;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-[166px] w-[155px]">
            <Image
              src="/logo/logo1 1.png"
              alt="BASS Academy"
              fill
              sizes="155px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 text-[15px] font-medium transition-colors rounded-md
                  ${active
                    ? "text-[#D4A017]"
                    : "text-gray-600 hover:text-[#D4A017] hover:bg-yellow-50"
                  }
                `}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.label}
                {/* Active underline indicator */}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#D4A017]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Right side: locale + CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Locale switcher */}
          <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-0.5">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => switchLocale(item)}
                disabled={isPending}
                className={`
                  rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors
                  ${locale === item
                    ? "bg-[#FFC71D] text-[#1a0a00] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                  }
                `}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center rounded-full bg-[#FFC71D] px-5 py-2.5 text-sm font-semibold text-[#1a0a00] shadow-sm transition-colors hover:bg-[#D4A017] active:scale-95"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {dictionary.navigation.cta}
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2.5 text-gray-600 lg:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      rounded-lg px-4 py-3 text-[15px] font-medium transition-colors
                      ${active
                        ? "bg-yellow-50 text-[#D4A017] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
              {/* Locale mobile */}
              <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-0.5">
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => switchLocale(item)}
                    className={`
                      rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors
                      ${locale === item
                        ? "bg-[#FFC71D] text-[#1a0a00] shadow-sm"
                        : "text-gray-500"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <Link
                href="/kontak"
                onClick={() => setIsOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#FFC71D] px-5 py-2.5 text-sm font-semibold text-[#1a0a00] transition-colors hover:bg-[#D4A017]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {dictionary.navigation.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
