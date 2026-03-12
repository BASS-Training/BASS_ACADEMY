import type { Metadata } from "next";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Jadwal Pelatihan",
};

export default async function JadwalPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.schedule;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="section-padding">
        <div className="container-shell grid gap-6">
          {programs.map((program) => (
            <Card key={program.slug} className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {program.category}
                  </span>
                  <span className="rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-foreground">
                    {program.level}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{program.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {program.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-line/80 p-4">
                  <div className="flex items-center gap-3 text-primary">
                    <CalendarDays className="h-5 w-5" />
                    <span className="font-semibold">{page.labels.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{program.schedule}</p>
                </div>
                <div className="rounded-3xl border border-line/80 p-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Clock3 className="h-5 w-5" />
                    <span className="font-semibold">{page.labels.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{program.duration}</p>
                </div>
                <div className="rounded-3xl border border-line/80 p-4">
                  <div className="flex items-center gap-3 text-primary">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">{page.labels.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{program.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
