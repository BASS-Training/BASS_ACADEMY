import { NextResponse } from "next/server";

import { isLocale } from "@/i18n";

export async function POST(request: Request) {
  const payload = (await request.json()) as { locale?: string };
  const locale = isLocale(payload.locale) ? payload.locale : "id";

  const response = NextResponse.json({ ok: true });
  // Keep the locale cookie readable on the client so the navbar can switch language without a full redirect flow.
  response.cookies.set("bass-locale", locale, {
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
