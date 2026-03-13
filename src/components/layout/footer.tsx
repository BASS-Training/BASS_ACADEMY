import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import type { Dictionary, Locale } from "@/i18n";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-14 text-gray-700 shadow-sm">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.65fr_0.85fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold">
              BA
            </div>
            <div>
              <p className="font-display text-lg font-semibold">BASS Academy</p>
              <p className="text-sm text-white/65">Education and Training Institution</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
            {dictionary.footer.description}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{dictionary.footer.quickLinksTitle}</h2>
          <div className="mt-4 grid gap-3 text-sm text-gray-500">
            {dictionary.navigation.items.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#D4A017]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{dictionary.footer.contactTitle}</h2>
          <div className="mt-4 grid gap-4 text-sm text-gray-500">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
              <span>hello@bassacademy.id</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
              <span>Jl. Pendidikan No. 88, Jakarta Selatan</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{dictionary.footer.socialTitle}</h2>
          <div className="mt-4 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 hover:border-[#D4A017] hover:text-[#D4A017]"
                aria-label="Social media link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-gray-100 pt-6 text-sm text-gray-400">
        © {year} BASS Academy. {dictionary.footer.copyright}
      </div>
    </footer>
  );
}
