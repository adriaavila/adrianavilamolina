"use client";

import { useEffect } from "react";
import type { SiteLocale } from "@/lib/data/site-content";

type LanguageSyncProps = {
  locale: SiteLocale;
};

export function LanguageSync({ locale }: LanguageSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
