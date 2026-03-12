import { CtaSection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { KeunggulanSection } from "@/components/sections/keunggulan";
import { MentorSection } from "@/components/sections/mentor";
import { TestimonialSection } from "@/components/sections/testimonial";
import { WhyBassSection } from "@/components/sections/why-bass";
import { getCurrentDictionary } from "@/i18n/server";

export default async function HomePage() {
  const dictionary = await getCurrentDictionary();

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WhyBassSection dictionary={dictionary} />
      <KeunggulanSection dictionary={dictionary} />
      <MentorSection dictionary={dictionary} />
      <TestimonialSection dictionary={dictionary} />
      <CtaSection dictionary={dictionary} />
    </>
  );
}
