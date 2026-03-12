import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import type { Dictionary } from "@/i18n";

type TestimonialSectionProps = {
  dictionary: Dictionary;
};

export function TestimonialSection({ dictionary }: TestimonialSectionProps) {
  return (
    <section className="section-padding section-brand-bg bg-surface/80">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {dictionary.testimonialsSection.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {dictionary.testimonialsSection.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <Card key={item.name} className="p-6">
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.review}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
