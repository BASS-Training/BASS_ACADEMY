import en from "@/i18n/en";
import id from "@/i18n/id";

export const dictionaries = {
  en,
  id,
};

export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof id | typeof en;

export function isLocale(value: string | undefined): value is Locale {
  return value === "id" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
