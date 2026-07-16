"use client";

import { useEffect } from "react";
import type { Locale } from "./home-content";

export function PromoImageHydrator({ locale }: { locale: Locale }) {
  useEffect(() => {
    const hero = document.querySelector<HTMLImageElement>(
      'img[alt="SciNest research workspace"]',
    );

    if (!hero) return;

    hero.src = locale === "zh" ? "/scinest/hero-zh.webp" : "/scinest/hero-en.webp";
    hero.width = 1400;
    hero.height = 876;
    hero.loading = "eager";
    hero.fetchPriority = "high";
  }, [locale]);

  return null;
}
