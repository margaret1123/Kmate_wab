"use client";

import { useEffect } from "react";
import type { Locale } from "./home-content";

const outputPositions = ["50% 0%", "50% 50%", "50% 100%"];

export function PromoImageHydrator({ locale }: { locale: Locale }) {
  useEffect(() => {
    const hero = document.querySelector<HTMLImageElement>(
      'img[alt="SciNest research workspace"]',
    );

    if (hero) {
      hero.src = locale === "zh" ? "/scinest/hero-zh.webp" : "/scinest/hero-en.webp";
      hero.width = 1400;
      hero.height = 876;
      hero.loading = "eager";
      hero.fetchPriority = "high";
    }

    const outputImages = Array.from(
      document.querySelectorAll<HTMLImageElement>('#outputs article > img'),
    );
    const outputSprite =
      locale === "zh" ? "/scinest/outputs-zh.webp" : "/scinest/outputs-en.webp";

    outputImages.forEach((image, index) => {
      image.src = outputSprite;
      image.width = 360;
      image.height = 225;
      image.loading = "lazy";
      image.decoding = "async";
      image.style.aspectRatio = "16 / 10";
      image.style.objectFit = "cover";
      image.style.objectPosition = outputPositions[index] ?? "50% 50%";
    });
  }, [locale]);

  return null;
}
