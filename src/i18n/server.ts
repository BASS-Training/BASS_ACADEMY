import { cookies } from "next/headers";

import { getDictionary, isLocale } from "@/i18n";

export async function getCurrentDictionary() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("bass-locale")?.value;
  return getDictionary(isLocale(localeCookie) ? localeCookie : "id");
}
