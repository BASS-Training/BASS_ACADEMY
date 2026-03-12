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
    <footer className="border-t border-line bg-foreground py-14 text-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.65fr_0.85fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold">
              BA
            </div>
            <div>
              <p className="font-display text-lg font-semibold">BASS Academy</p>
              <p className="text-sm text-white/65">Education and training institution</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            {dictionary.footer.description}
          </p>
        </div>

        <div>
          <h2 className="font-semibold">{dictionary.footer.quickLinksTitle}</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {dictionary.navigation.items.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold">{dictionary.footer.contactTitle}</h2>
          <div className="mt-4 grid gap-4 text-sm text-white/70">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
              <span>hello@bassacademy.id</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
              <span>Jl. Pendidikan No. 88, Jakarta Selatan</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">{dictionary.footer.socialTitle}</h2>
          <div className="mt-4 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-accent-yellow hover:text-accent-yellow"
                aria-label="Social media link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
        © {year} BASS Academy. {dictionary.footer.copyright}
      </div>
    </footer>
  );
}
