import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { service: { name: "Kmate", type: "SoftwareApplication", category: "EducationalApplication", url: "https://kmate-wab.vercel.app", platforms: ["Windows", "macOS"], pricing: { model: "one-time", currency: "CNY", tiers: [{ name: "Basic", price: 299 }, { name: "Pro", price: 599 }] } },
      capabilities: [
        { id: "literature-parser", name: "Literature Parser", formats: ["PDF", "CAJ", "Word", "TXT"] },
        { id: "ai-drafting", name: "AI Academic Drafting", languages: ["zh-CN", "en"] },
        { id: "chart-solutions", name: "Chart Solutions", chartTypes: ["bar", "line", "scatter", "heatmap", "box-plot"] },
        { id: "citation-manager", name: "Citation Manager", styles: ["GB/T 7714", "APA 7th", "MLA 9th", "Harvard"] },
      ],
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}
