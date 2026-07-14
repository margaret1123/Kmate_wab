import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Kmate · AI Academic Writing & Research Assistant",
  description:
    "Kmate is an AI-powered desktop application for academic writing, literature review, chart generation, and citation management. One-time purchase ¥299 (~$42 USD). Runs locally on Windows & macOS.",
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="zh-CN" href="https://kmate-wab.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://kmate-wab.vercel.app/en" />
        <link rel="alternate" hrefLang="x-default" href="https://kmate-wab.vercel.app/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
