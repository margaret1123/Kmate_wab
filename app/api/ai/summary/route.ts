import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      site: {
        name: "SciNest · 科研小棉袄",
        tagline: "Continuous research creation workspace",
        url: "https://scinest-ai.vercel.app",
        operator: "Jiaempower Pathways Limited",
        languages: ["zh-CN", "en"],
        lastModified: "2026-07-20",
      },
      summary:
        "SciNest is a research creation workspace that keeps papers, references, notes and project materials connected while users move through research understanding, outlining, long-form writing and revision, scientific figure creation, and editable presentation production.",
      workflow: [
        "Import and organize research materials",
        "Build project context and structure",
        "Draft and revise editable long-form writing",
        "Create and refine scientific figures",
        "Produce editable presentation content and slides",
      ],
      audience: [
        "Postgraduate students",
        "Researchers and academics",
        "Technical professionals",
        "Research teams producing writing, figures and presentations",
      ],
      pricing: {
        founding: { cny: 299, usd: 49 },
        standardReference: { cny: 399, usd: 69 },
        model: "one-time licence",
        updates: "12 months of feature updates; the purchased version remains usable afterward",
        modelApiCharges: "separate where applicable",
        trial: "7 days",
      },
      dataBoundary: {
        localProjectWorkspace: true,
        projectFiles: "remain local by default",
        aiTasks: "sent to the model provider selected and configured by the user",
      },
      limitations: [
        "Generated content requires user review and editing.",
        "SciNest does not guarantee publication, journal acceptance or academic outcomes.",
        "SciNest does not claim that every operation always remains on-device.",
      ],
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}
