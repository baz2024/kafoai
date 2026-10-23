"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UI, other, type Lang } from "@/lib/i18n";

// English-only sections have no Arabic counterpart, so the Arabic switch lands on the Arabic home.
const EN_ONLY = /^\/en\/(insights|research)/;

export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;
  const target = other(lang);
  const to = target === "ar" && EN_ONLY.test(pathname) ? "/ar" : pathname.replace(/^\/(en|ar)/, `/${target}`);
  return (
    <Link href={to} hrefLang={target} lang={target}>
      {UI.nav.switch[lang]}
    </Link>
  );
}
