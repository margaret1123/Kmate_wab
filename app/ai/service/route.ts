import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      service: {
        name: "Kmate · 科研小棉袄",
        type: "SoftwareApplication",
        category: "EducationalApplication",
        description: "AI-powered desktop academic writing assistant",
        url: "https://kmate-wab.vercel.app",
        platforms: ["Windows", "macOS"],
        pricing: { model: "one-time", currency: "CNY", tiers: [{ name: "Basic", price: 299 }, { name: "Pro", price: 599 }] },
      },
      capabilities: [
        { id: "literature-parser", name: "Literature Parser", description: "AI extraction of key findings from uploaded PDF/CAJ/Word files. Builds personal research knowledge base.", formats: ["PDF", "CAJ", "Word", "TXT"] },
        { id: "ai-drafting", name: "AI Academic Drafting", description: "Framework-aligned writing: outline approval → section-by-section generation → manual override at every step.", languages: ["zh-CN", "en"] },
        { id: "chart-solutions", name: "Chart Solutions", description: "Smart chart type recommendation based on experimental data. Journal-grade color schemes.", chartTypes: ["bar", "line", "scatter", "heatmap", "box-plot"] },
        { id: "citation-manager", name: "Citation Manager", description: "Auto-detect reference metadata. Format citations in four major styles.", styles: ["GB/T 7714", "APA 7th", "MLA 9th", "Harvard"] },
      ],
      contact: { login: "https://kmate-wab.vercel.app/login" },
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=86400, must-revalidate",
      },
    }
  );
}
