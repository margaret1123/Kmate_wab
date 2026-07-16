import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kmate-wab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SciNest · 科研小棉袄｜从科研资料到可编辑文稿、科研图和PPT",
    template: "%s | SciNest",
  },
  description:
    "SciNest 是本地运行的 AI 科研创作工作台，让论文、Reference、笔记和项目资料在同一个项目中连续变成可编辑文稿、科研图和 PPT。",
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SciNest",
    title: "SciNest · 从科研资料到可编辑文稿、科研图和PPT",
    description: "一个项目上下文，一条连续工作流，生成后仍可继续编辑。",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  robots: { index: true, follow: true },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SciNest · 科研小棉袄",
    url: siteUrl,
    inLanguage: ["zh-CN", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jiaempower Pathways Limited",
    url: siteUrl,
    brand: { "@type": "Brand", name: "SciNest" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SciNest",
    alternateName: "科研小棉袄",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Windows",
    description:
      "A local research creation workspace that turns research materials into editable writing, scientific figures and presentations using the user's selected AI model provider.",
    offers: [
      { "@type": "Offer", price: "299", priceCurrency: "CNY", category: "Founding licence" },
      { "@type": "Offer", price: "49", priceCurrency: "USD", category: "Founding licence" },
    ],
    author: { "@type": "Organization", name: "Jiaempower Pathways Limited" },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
