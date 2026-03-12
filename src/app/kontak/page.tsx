import type { Metadata } from "next";
import { Mail, MapPinned, PhoneCall } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Kontak",
};

export default async function KontakPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.contact;

  const contacts = [
    { title: page.cards[0].title, value: page.cards[0].value, icon: PhoneCall },
    { title: page.cards[1].title, value: page.cards[1].value, icon: Mail },
    { title: page.cards[2].title, value: page.cards[2].value, icon: MapPinned },
  ];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        actions={<Button href="mailto:hello@bassacademy.id">{page.cta}</Button>}
      />

      <section className="section-padding">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-6">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.value}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold">{page.form.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{page.form.description}</p>
            {/* Static form shell for company profile templates; wire this to your preferred form backend in production. */}
            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">{page.form.fields.name}</span>
                <input className="rounded-2xl border border-line bg-white px-4 py-3 outline-none ring-0" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">{page.form.fields.email}</span>
                <input className="rounded-2xl border border-line bg-white px-4 py-3 outline-none ring-0" />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                <span className="font-medium">{page.form.fields.program}</span>
                <input className="rounded-2xl border border-line bg-white px-4 py-3 outline-none ring-0" />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                <span className="font-medium">{page.form.fields.message}</span>
                <textarea
                  rows={5}
                  className="rounded-2xl border border-line bg-white px-4 py-3 outline-none ring-0"
                />
              </label>
              <div className="sm:col-span-2">
                <Button href="mailto:hello@bassacademy.id">{page.form.submit}</Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
