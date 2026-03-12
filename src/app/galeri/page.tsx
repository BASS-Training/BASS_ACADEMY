import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { galleryItems } from "@/data/gallery";
import { getCurrentDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Galeri",
};

export default async function GaleriPage() {
  const dictionary = await getCurrentDictionary();
  const page = dictionary.pages.gallery;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="section-padding">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary via-primary-dark to-foreground p-6 text-white">
                <div className="flex h-full items-end rounded-[1.25rem] border border-white/15 bg-white/10 p-5">
                  <div>
                    <p className="text-sm text-white/75">{item.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
