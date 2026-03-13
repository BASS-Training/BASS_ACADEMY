import Image from "next/image";

import { Card } from "@/components/ui/card";
import { mentors } from "@/data/mentors";
import type { Dictionary } from "@/i18n";

type MentorSectionProps = {
  dictionary: Dictionary;
};

export function MentorSection({ dictionary }: MentorSectionProps) {
  return (
    <section className="section-padding section-brand-bg">
      <div className="container-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {dictionary.mentors.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {dictionary.mentors.title}
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">{dictionary.mentors.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {mentors.map((mentor, i) => (
            <Card key={mentor.name} className="overflow-hidden p-0 w-full sm:w-64" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="relative aspect-[4/3.5] bg-surface">
                <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{mentor.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-primary">{mentor.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
