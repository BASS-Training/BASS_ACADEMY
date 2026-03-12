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
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mentors.map((mentor, i) => (
            <Card key={mentor.name} className="overflow-hidden p-0" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="relative aspect-[4/4.5] bg-surface">
                <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{mentor.role}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{mentor.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
