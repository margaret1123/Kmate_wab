import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      service: {
        name: "SciNest",
        alternateName: "科研小棉袄",
        type: "SoftwareApplication",
        category: "ResearchProductivityApplication",
        url: "https://scinest-ai.vercel.app",
        operator: "Jiaempower Pathways Limited",
        platform: "Windows desktop",
        pricing: {
          model: "one-time licence",
          founding: { cny: 299, usd: 49 },
          standardReference: { cny: 399, usd: 69 },
          includedUpdates: "12 months",
          continuedUse: "The purchased version remains usable after the update period.",
          modelApiCharges: "Separate where applicable.",
        },
      },
      capabilities: [
        {
          id: "project-context",
          name: "Continuous Project Context",
          description: "Keeps papers, references, notes and project materials connected within one research project.",
        },
        {
          id: "long-form-writing",
          name: "Editable Long-form Writing",
          description: "Supports outlining, drafting and revision while keeping the resulting text editable.",
        },
        {
          id: "scientific-figures",
          name: "Scientific Figure Creation",
          description: "Creates figure plans and editable outputs that users can continue refining.",
        },
        {
          id: "editable-presentations",
          name: "Editable Presentations",
          description: "Produces presentation content and slides from the same project context for continued editing.",
        },
      ],
      boundaries: {
        projectFiles: "Remain local by default.",
        aiModelTasks: "Sent to the model provider selected and configured by the user.",
        guarantees: "No guarantee of publication, journal acceptance or academic outcomes.",
      },
    },
    { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }
  );
}
