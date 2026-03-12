import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, GraduationCap, LaptopMinimal, Users } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Layanan Kami",
};

export default async function LayananPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.services;

  const serviceIcons = [GraduationCap, LaptopMinimal, Users, Building2];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        actions={
          <>
            <Button href="/jadwal">{page.primaryCta}</Button>
            <Button href="/kontak" variant="secondary">
              {page.secondaryCta}
            </Button>
          </>
        }
      />

      <section className="section-padding">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.serviceCards.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card key={item.title} className="p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {page.catalogLabel}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{page.catalogTitle}</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.slug} className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-foreground">
                    {program.level}
                  </span>
                  <span className="text-sm text-muted-foreground">{program.duration}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{program.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    {page.learnMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {page.process.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{page.process.title}</h2>
            <div className="mt-8 space-y-4">
              {page.process.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-3xl border border-line/80 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-foreground p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-yellow">
              {page.partnering.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{page.partnering.title}</h2>
            <p className="mt-4 text-white/80">{page.partnering.description}</p>
            <ul className="mt-8 space-y-4">
              {page.partnering.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow" />
                  <span className="text-white/85">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/kontak" variant="gold">
                {page.partnering.cta}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
