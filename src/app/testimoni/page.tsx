import type { Metadata } from "next";
import { Quote } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Testimoni",
};

export default async function TestimoniPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.testimonials;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="section-padding">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <Quote className="h-8 w-8 text-primary" />
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.review}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
