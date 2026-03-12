import type { Metadata } from "next";
import { Award, BookOpen, BriefcaseBusiness, Target } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Tentang BASS",
};

export default async function TentangBassPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.about;

  const values = [
    { title: page.values.items[0].title, description: page.values.items[0].description, icon: Target },
    { title: page.values.items[1].title, description: page.values.items[1].description, icon: BookOpen },
    { title: page.values.items[2].title, description: page.values.items[2].description, icon: Award },
    { title: page.values.items[3].title, description: page.values.items[3].description, icon: BriefcaseBusiness },
  ];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="section-padding">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold">{page.story.title}</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>{page.story.paragraphs[0]}</p>
              <p>{page.story.paragraphs[1]}</p>
            </div>
          </Card>
          <Card className="bg-primary p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">{page.vision.label}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{page.vision.title}</h2>
            <p className="mt-4 text-white/80">{page.vision.description}</p>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {page.values.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{page.values.title}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
