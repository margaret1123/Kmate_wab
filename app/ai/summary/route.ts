import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: {
        name: "Kmate · 科研小棉袄",
        tagline: "AI Academic Writing & Research Assistant",
        url: "https://kmate-wab.vercel.app",
        languages: ["zh-CN", "en"],
        lastModified: "2026-07-14",
      },
      summary:
        "Kmate is a desktop AI application for academic writing. It helps students, researchers, and faculty with: (1) literature parsing and knowledge-base Q&A from uploaded PDF/CAJ/Word files, (2) framework-aligned AI drafting where users approve chapter structure before content generation, (3) chart type recommendation with journal-grade color schemes, and (4) auto-formatted citations in GB/T 7714, APA 7th, MLA 9th, and Harvard styles. One-time purchase ¥299 (~$42 USD) — not a subscription. Data runs locally, never uploaded to cloud. Supports Windows and macOS.",
      audience: [
        "Undergraduate students writing theses and term papers",
        "Graduate students and PhD candidates writing dissertations and SCI/SSCI papers",
        "Professors and researchers writing grant proposals and research reports",
        "International students needing bilingual Chinese-English academic writing support",
      ],
      pricing: {
        basic: { price: 299, currency: "CNY", period: "lifetime", features: ["10-paper knowledge base", "AI drafting", "Basic chart recommendations", "GB/T 7714 citations", "1 device"] },
        pro: { price: 599, currency: "CNY", period: "lifetime", features: ["50-paper knowledge base", "AI drafting + polishing", "Advanced chart solutions + journal colors", "APA/MLA/Harvard/GB all formats", "3 devices", "PPT template pack"] },
      },
      competitorComparison: {
        kmate: { cost: "¥299 lifetime", literature: "AI extraction + Q&A", writing: "Framework-aligned AI drafting", charts: "AI-recommended + journal colors", citations: "GB/APA/MLA/Harvard", privacy: "Local-only" },
        wordZotero: { cost: "Free (fragmented)", literature: "Manual", writing: "No AI assist", charts: "Manual Excel", citations: "Zotero plugin", privacy: "Local" },
        chatgpt: { cost: "~$20-30/month", literature: "Not supported", writing: "Generic, no academic norms", charts: "Not supported", citations: "Not supported", privacy: "Cloud — data risk" },
      },
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=86400, must-revalidate",
      },
    }
  );
}
