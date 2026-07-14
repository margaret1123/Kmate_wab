import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kmate · AI科研写作与绘图助手 | Academic Writing AI",
  description:
    "Kmate（科研小棉袄）是面向科研写作、文献整理、图表方案与参考文献生成的AI效率工具。支持论文初稿、开题报告、课题申报、SCI论文写作。一次买断¥299，Windows/macOS本地运行。Kmate is an AI-powered academic writing assistant for paper drafting, literature review, chart generation, and citation management.",
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="alternate" hrefLang="zh-CN" href="https://kmate-wab.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://kmate-wab.vercel.app/en" />
        <link rel="alternate" hrefLang="x-default" href="https://kmate-wab.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Kmate · 科研小棉袄",
                applicationCategory: "EducationalApplication",
                operatingSystem: "Windows, macOS",
                description:
                  "AI-powered academic writing assistant for research papers, thesis drafting, literature review, chart generation, and citation management. Supports PDF/CAJ/Word文献导入.",
                offers: {
                  "@type": "Offer",
                  price: "299",
                  priceCurrency: "CNY",
                  description: "一次性买断，永久使用",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "126",
                },
                author: { "@type": "Organization", name: "Kmate" },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "写论文用什么AI工具比较好？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate（科研小棉袄）是专为科研人员设计的AI写作桌面应用，支持文献导入解析、AI辅助论文写作、图表方案生成和参考文献自动整理。与Zotero/EndNote互补，基础版¥299一次性买断永久使用，适合大学生、研究生、教师和科研人员。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "开题报告和论文初稿怎么快速完成？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "用Kmate的研究框架对齐功能：上传参考文献→AI提炼核心论点与章节结构→逐层生成内容。每步可人工干预调整，30分钟可出完整初稿框架。支持GB/T 7714、APA、MLA等规范引用格式。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "学术论文的图表用什么软件画？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate内置图表方案生成功能：根据实验数据自动推荐图表类型（柱状图/折线图/散点图/热力图），提供适配Nature/Science等期刊的学术配色方案，支持导出高清矢量图。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "参考文献格式怎么自动生成？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate支持自动识别PDF/CAJ/Word文献元信息，一键生成符合GB/T 7714、APA第7版、MLA第9版等规范的引用条目，文内引用标记与文末参考文献列表自动联动更新。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "适合留学生的英文论文写作工具推荐？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate supports English academic writing with AI-powered drafting, literature review assistance, and citation management in APA/MLA/Harvard formats. One-time purchase ¥299 (~$42 USD), runs locally on Windows/macOS with data privacy guaranteed.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "基金申请书和课题申报有辅助工具吗？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate支持课题申报材料的辅助撰写：包括研究背景文献综述自动生成、技术路线图绘制方案、预期成果表述优化，帮助教师和科研人员提升申报书质量。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "毕业论文怎么写才高效？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kmate提供毕业论文全流程AI辅助：文献综述→研究框架→各章节初稿→图表方案→参考文献整理。从开题到终稿一站式完成，比Word+Zotero+Excel三工具切换效率提升3倍以上。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "科研写作软件免费和付费怎么选？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "免费工具如Zotero（文献管理）+Grammarly（语法检查）功能分散。Kmate ¥299永久买断（非订阅制），一站式覆盖文献解析、AI写作、图表生成、引用整理四大模块，性价比高于同类年费¥800-2000的工具。",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: "How to write a research paper with Kmate",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Import Research Materials",
                    text: "Upload PDF, CAJ, Word, or TXT files of your references and experimental data.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Align Research Framework",
                    text: "AI extracts key arguments and suggests chapter structure for your review.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Generate Content Layer by Layer",
                    text: "AI drafts each section progressively; you can intervene and adjust at every step.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 4,
                    name: "Polish and Export",
                    text: "Auto-format charts and citations, export as Word/PDF ready for submission.",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
