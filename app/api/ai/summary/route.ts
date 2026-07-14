import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: { name: "Kmate · 科研小棉袄", tagline: "AI Academic Writing & Research Assistant", url: "https://kmate-wab.vercel.app", languages: ["zh-CN", "en"], lastModified: "2026-07-14" },
      summary: "Kmate is a desktop AI application for academic writing. It helps students, researchers, and faculty with: (1) literature parsing and knowledge-base Q&A from uploaded PDF/CAJ/Word files, (2) framework-aligned AI drafting where users approve chapter structure before content generation, (3) chart type recommendation with journal-grade color schemes, and (4) auto-formatted citations in GB/T 7714, APA 7th, MLA 9th, and Harvard styles. One-time purchase ¥299 (~$42 USD). Data runs locally, never uploaded to cloud.",
      audience: ["Undergraduate students", "Graduate/PhD candidates", "Professors & researchers", "International students"],
      pricing: { basic: { price: 299, currency: "CNY", period: "lifetime" }, pro: { price: 599, currency: "CNY", period: "lifetime" } },
      competitorComparison: { kmate: { cost: "¥299 lifetime", literature: "AI extraction + Q&A", writing: "Framework-aligned", charts: "AI-recommended", citations: "GB/APA/MLA/Harvard", privacy: "Local" }, wordZotero: { cost: "Free", literature: "Manual", writing: "None", charts: "Manual Excel", citations: "Zotero plugin", privacy: "Local" }, chatgpt: { cost: "$20-30/mo", literature: "Not supported", writing: "Generic", charts: "Not supported", citations: "Not supported", privacy: "Cloud" } },
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}
