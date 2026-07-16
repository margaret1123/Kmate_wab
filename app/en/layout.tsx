import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Continuous research creation workspace",
  description:
    "SciNest keeps papers, references, notes and project files in one continuous workflow for editable writing, scientific figures and presentations.",
  alternates: {
    canonical: "/en",
    languages: { "zh-CN": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/en",
    title: "SciNest · Continuous research creation workspace",
    description:
      "Turn scattered research materials into editable writing, scientific figures and presentations without rebuilding context between tools.",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
