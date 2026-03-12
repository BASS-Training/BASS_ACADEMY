import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";

type CtaSectionProps = {
  dictionary: Dictionary;
};

export function CtaSection({ dictionary }: CtaSectionProps) {
  return (
    <section className="section-padding section-brand-bg">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-foreground px-6 py-10 text-white shadow-panel md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-yellow">
                {dictionary.cta.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold md:text-4xl">
                {dictionary.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">{dictionary.cta.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/kontak" variant="gold">
                {dictionary.cta.primaryCta}
              </Button>
              <Button href="/jadwal" variant="outlineLight">
                {dictionary.cta.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
