import styles from "./scinest-home.module.css";
import { pricing, type Locale } from "./home-content";

const content = {
  zh: {
    lang: "zh-CN",
    subBrand: "科研小棉袄",
    nav: ["连续工作流", "可编辑成果", "为什么不同", "价格", "常见问题"],
    login: "登录",
    start: "开始体验",
    eyebrow: "AI 科研创作工作台 · 本地项目 · 自选模型",
    title: <>从散乱科研资料到 <em>文稿、科研图和 PPT</em>，一条流程顺下来</>,
    intro: "把论文、Reference、笔记和项目文件放进同一个研究项目。SciNest 持续理解上下文，从梳理思路、搭建结构，到写作、绘图和制作 PPT，不必反复上传、解释和搬运内容。",
    primary: "用一个项目体验完整流程",
    secondary: "查看连续工作流",
    note: "生成只是第一版：文字、图形和幻灯片都可以继续修改与导出。",
    stats: [["1 个项目", "承载资料、思路与全部成果"], ["3 类成果", "文稿、科研图、可编辑 PPT"], ["持续上下文", "无需每一步重新解释"], ["自由选择", "连接支持的 AI 模型"]],
    painKicker: "不是缺少工具，而是每一步都在重新开始",
    painTitle: "科研任务最耗损的，是跨工具之后的上下文重建",
    painBody: "普通 AI、Word、绘图工具和 PPT 工具各自都能做一部分。真正浪费时间的是反复上传、复制、解释背景，再把同一套思路重新组织一次。",
    oldTitle: "碎片化工具链",
    old: ["逐篇上传与阅读", "手动整理笔记", "重新解释研究背景", "复制到 Word 修改", "换工具重述绘图需求", "再从零组织 PPT"],
    newTitle: "SciNest 连续项目",
    newer: ["资料集中进入项目", "在同一上下文里提问", "结构直接进入长文写作", "内容继续转成科研图", "文稿和图复用到 PPT", "局部修改，不必推倒重来"],
    flowKicker: "一条不断线的流程",
    flowTitle: "前一步的结果，直接成为下一步的起点",
    flowBody: "同一批材料在项目中持续被理解、组织和复用。你把精力放在判断和修改上，而不是不断重建上下文。",
    flow: [["01", "收进一个项目", "论文、文献、笔记、Word、PPT 与已有图片统一进入项目。"], ["02", "对话并形成思路", "跨资料提炼观点、比较方法，形成研究方向和表达框架。"], ["03", "展开成可编辑文稿", "从章节目标和要点开始分段生成，支持局部重写与重排。"], ["04", "把内容变成科研图", "沿用项目内容生成图形，再调整元素、图层、文字与关系。"], ["05", "复用成果制作 PPT", "根据受众和场景组织叙事，复用文稿与图并继续编辑。"]],
    outputKicker: "不是聊天答案，而是可以继续工作的成果",
    outputTitle: "先快速得到完整第一版，再按自己的想法精修",
    outputBody: "赶时间时，整套流程要顺；需要提高质量时，文字、图和页面又必须能被精确控制。",
    outputs: [
      ["01 · 文稿", "让散乱资料变成有结构的长文", "先规划章节目标和关键要点，再逐段写作。项目资料、引用和前后文持续关联。", ["章节级结构与目标", "局部改写、扩写和重排", "编辑器内继续修改与导出"]],
      ["02 · 科研图", "生成后仍能精确移动、分层和修改", "科研图不应该是一张不可控的最终图片。元素、文字、图层、关系和布局都应继续调整。", ["图层与元素控制", "局部 AI 改图", "可调整布局和视觉表达"]],
      ["03 · PPT", "文章和图已经在项目里，演示不再从零开始", "从现有资料、文稿和科研图中组织汇报逻辑，生成后仍可继续修改页面内容和布局。", ["按目的、受众和页数规划", "复用项目内容", "页面内容与布局可编辑"]]
    ],
    bentoKicker: "连续，但不失去控制",
    bentoTitle: "一个项目上下文，三种成果，全程可编辑",
    bentoBody: "资料关系、问答判断和已有成果都留在同一个项目里。生成只是把第一版放到你面前，最终决定仍由你完成。",
    contextTitle: "项目上下文持续保留",
    contextBody: "资料、问答、章节结构、文稿、科研图、PPT 和引用围绕同一个项目组织。",
    editTitle: "结果可以继续精修",
    editBody: "段落、图层、元素和页面布局都可以继续调整，不被一次生成锁死。",
    modelTitle: "本地项目，自选模型",
    modelBody: "项目文件和成果默认保存在本地；模型请求发送给你选择的服务商。",
    priceKicker: "首发版本",
    priceTitle: "一个完整个人版，不用在功能表里做选择题",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "首发一次性购买",
    priceFeatures: ["完整文稿、科研图与 PPT 工作流", "1 名用户，最多 2 台个人设备", "包含 12 个月功能更新", "到期后仍可使用已购买版本", "使用自己的模型 API，调用费另付"],
    priceCta: "注册并开始 7 天试用",
    faqTitle: "开始前需要知道的事",
    faq: [["SciNest 与直接使用通用 AI 有什么区别？", "通用 AI 擅长单次问答。SciNest 把资料、结构、写作、科研图、PPT 和引用放进同一个项目，使每一步继承前一步。"], ["购买价格包含 AI 模型费用吗？", "不包含。SciNest 收取软件授权费用；模型调用费由所选服务商按实际使用量收取。"], ["资料会不会上传到 SciNest 服务器？", "项目文件和成果默认保存在本地。使用 AI 模型时，任务所需内容会发送给所选模型服务商。"], ["一次购买包括多久更新？", "首发个人版包含 12 个月功能更新。到期后可以继续使用已购买版本。"]],
    finalTitle: "别再把同一个研究项目拆散在十几个窗口里",
    finalBody: "把材料放进一个项目，先做出完整第一版，再继续把它改成真正属于你的成果。",
    finalCta: "开始体验 SciNest"
  },
  en: {
    lang: "en",
    subBrand: "Research creation workspace",
    nav: ["Workflow", "Editable outputs", "Why SciNest", "Pricing", "FAQ"],
    login: "Sign in",
    start: "Start exploring",
    eyebrow: "AI research creation workspace · Local projects · Your choice of model",
    title: <>From scattered research materials to <em>writing, figures and presentations</em> in one continuous workflow</>,
    intro: "Bring papers, references, notes and project files into one research workspace. SciNest keeps the context as you move from understanding and outlining to writing, figure design and slides.",
    primary: "Experience the complete workflow",
    secondary: "Explore the workflow",
    note: "Generation is the first draft, not the finish line. Writing, figures and slides remain editable.",
    stats: [["1 project", "Materials, reasoning and outputs stay connected"], ["3 output types", "Writing, scientific figures and editable slides"], ["Continuous context", "No re-explaining the project at every step"], ["Your choice", "Connect a supported AI model"]],
    painKicker: "The problem is not a lack of tools",
    painTitle: "The real cost is rebuilding context after every tool switch",
    painBody: "A general AI, a word processor, a figure tool and a slide generator can each complete one part. The drain comes from uploading, copying, explaining and reorganising the same research again.",
    oldTitle: "Fragmented toolchain",
    old: ["Upload papers one by one", "Collect notes manually", "Explain the research again", "Move drafts into a word processor", "Restate the figure brief", "Rebuild the presentation story"],
    newTitle: "A continuous SciNest project",
    newer: ["Bring materials into one project", "Ask and organise in context", "Carry structure into long-form writing", "Turn ideas into editable figures", "Reuse writing and figures in slides", "Refine without starting over"],
    flowKicker: "One uninterrupted workflow",
    flowTitle: "Each result becomes the starting point for the next step",
    flowBody: "The same materials remain available as the project develops. You spend time judging and refining rather than rebuilding context.",
    flow: [["01", "Collect the project", "Import papers, references, notes, documents, presentations and existing images."], ["02", "Understand and shape the idea", "Compare sources and turn the material into a usable research direction."], ["03", "Develop editable writing", "Draft from section goals and key points, then revise individual parts."], ["04", "Express the research visually", "Generate a figure from project context, then refine layers, labels and relationships."], ["05", "Build the presentation", "Reuse writing and figures, organise the story and keep editing the deck."]],
    outputKicker: "Not a chat response—work you can continue",
    outputTitle: "Get a complete first version quickly, then refine it on your terms",
    outputBody: "When time is short, the process needs to flow. When quality matters, you still need precise control over the writing, visuals and slides.",
    outputs: [
      ["01 · Writing", "Turn scattered sources into structured long-form work", "Plan section goals and key points before drafting. Sources, citations and earlier sections remain connected.", ["Section-level structure and goals", "Local rewriting, expansion and reordering", "Continue editing and export"]],
      ["02 · Figures", "Generate, then move, layer and refine precisely", "A scientific figure should not be a locked image. Continue changing elements, labels, relationships and layout.", ["Layer and element control", "Targeted AI refinement", "Editable visual structure"]],
      ["03 · Presentations", "Your writing and figures are already in the project", "Build a presentation around its audience and purpose, reusing work already completed.", ["Audience-aware structure", "Reuse project content", "Editable content and layout"]]
    ],
    bentoKicker: "Continuity without losing control",
    bentoTitle: "One project context, three output types, fully editable",
    bentoBody: "Source relationships, conversations and existing outputs stay in the project. Generation puts the first version on screen; you retain control of the final work.",
    contextTitle: "Project context stays available",
    contextBody: "Sources, conversations, outlines, writing, figures, slides and citations are organised around one project.",
    editTitle: "Outputs remain editable",
    editBody: "Revise paragraphs, layers, elements and slide layouts without being locked into one generated result.",
    modelTitle: "Local projects, your model",
    modelBody: "Project files and outputs are stored locally by default; model requests go to the provider you select.",
    priceKicker: "Founding release",
    priceTitle: "One complete personal edition—not a feature comparison exercise",
    plan: "SciNest Personal · Founding Edition",
    priceUnit: "one-time founding price",
    priceFeatures: ["Complete writing, figure and presentation workflow", "1 user and up to 2 personal devices", "12 months of feature updates", "Keep using the purchased version afterwards", "Bring your own model API; model charges are separate"],
    priceCta: "Register for the 7-day trial",
    faqTitle: "What to know before starting",
    faq: [["How is SciNest different from a general AI tool?", "General AI tools are strong at individual conversations. SciNest keeps sources, structure, writing, figures, slides and citations in one project."], ["Does the price include model usage?", "No. The SciNest price covers the software licence. Your model provider charges for actual usage."], ["Are materials uploaded to SciNest?", "Files and outputs are stored locally by default. Model tasks send necessary content to the provider you select."], ["How long are updates included?", "The founding personal edition includes 12 months of feature updates. The purchased version remains usable afterwards."]],
    finalTitle: "Do not let one research project fragment across a dozen windows",
    finalBody: "Bring the materials into one project, create the first complete version, then keep refining it into work that is genuinely yours.",
    finalCta: "Start exploring SciNest"
  }
} as const;

export function SciNestHome({ locale }: { locale: Locale }) {
  const c = content[locale];
  const other = locale === "zh" ? "/en" : "/";
  const price = pricing[locale];
  const image = (name: string) => `/scinest/${name}-${locale}.webp`;
  return <div className={styles.page} lang={c.lang}>
    <header className={styles.header}><div className={styles.navbar}>
      <a className={styles.brand} href="#top"><span>S</span><strong>SciNest<small>{c.subBrand}</small></strong></a>
      <nav>{c.nav.map((item, i) => <a key={item} href={`#${["workflow","outputs","why","pricing","faq"][i]}`}>{item}</a>)}</nav>
      <div className={styles.actions}><a href={other}>{locale === "zh" ? "EN" : "中文"}</a><a href="/login">{c.login}</a><a className={styles.smallPrimary} href="/login?intent=trial">{c.start}</a></div>
    </div></header>
    <main>
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{c.eyebrow}</p><h1>{c.title}</h1><p className={styles.lead}>{c.intro}</p><div className={styles.ctas}><a className={styles.primary} href="/login?intent=trial">{c.primary} ↗</a><a className={styles.secondary} href="#workflow">{c.secondary}</a></div><p className={styles.note}>✓ {c.note}</p></div>
        <div className={styles.heroVisual}><img src={image("hero")} alt="SciNest continuous research workspace" width="1280" height="800" /><span className={styles.floatTop}>01 · {c.flow[0][1]}</span><span className={styles.floatBottom}>05 · {c.flow[4][1]}</span></div>
      </section>
      <section className={styles.stats}>{c.stats.map(([v,l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</section>
      <section className={`${styles.section} ${styles.darkCompare}`} id="why"><div className={styles.sectionHead}><p>{c.painKicker}</p><h2>{c.painTitle}</h2><span>{c.painBody}</span></div><div className={styles.compare}><article className={styles.old}><h3>{c.oldTitle}</h3><ol>{c.old.map((x,i)=><li key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</li>)}</ol></article><div className={styles.bridge}>→</div><article className={styles.new}><h3>{c.newTitle}</h3><ol>{c.newer.map((x,i)=><li key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</li>)}</ol></article></div></section>
      <section className={`${styles.section} ${styles.workflow}`} id="workflow"><div className={styles.sectionHead}><p>{c.flowKicker}</p><h2>{c.flowTitle}</h2><span>{c.flowBody}</span></div><div className={styles.flow}>{c.flow.map(([n,t,b])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></section>
      <section className={`${styles.section} ${styles.outputs}`} id="outputs"><div className={styles.sectionHead}><p>{c.outputKicker}</p><h2>{c.outputTitle}</h2><span>{c.outputBody}</span></div>
        <article className={styles.outputRow}><div><small>{c.outputs[0][0]}</small><h3>{c.outputs[0][1]}</h3><p>{c.outputs[0][2]}</p><ul>{c.outputs[0][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("writing-ui")} alt="SciNest writing workspace" width="1280" height="800" loading="lazy" /></figure></article>
        <article className={styles.figureFeature}><div><small>{c.outputs[1][0]}</small><h3>{c.outputs[1][1]}</h3><p>{c.outputs[1][2]}</p><ul>{c.outputs[1][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div><figure><img src={image("figures-ui")} alt="SciNest scientific figure editor" width="1280" height="640" loading="lazy" /></figure></article>
        <article className={`${styles.outputRow} ${styles.reverse}`}><figure><img src={image("ppt-ui")} alt="SciNest presentation workflow" width="1280" height="800" loading="lazy" /></figure><div><small>{c.outputs[2][0]}</small><h3>{c.outputs[2][1]}</h3><p>{c.outputs[2][2]}</p><ul>{c.outputs[2][3].map(x=><li key={x}>✓ {x}</li>)}</ul></div></article>
      </section>
      <section className={`${styles.section} ${styles.bento}`}><div className={styles.bentoIntro}><p className={styles.kicker}>{c.bentoKicker}</p><h2>{c.bentoTitle}</h2><p>{c.bentoBody}</p></div><article className={styles.bentoMain}><span>01</span><h3>{c.contextTitle}</h3><p>{c.contextBody}</p></article><article><span>02</span><h3>{c.editTitle}</h3><p>{c.editBody}</p></article><article><span>03</span><h3>{c.modelTitle}</h3><p>{c.modelBody}</p></article></section>
      <section className={styles.section} id="pricing"><div className={styles.sectionHead}><p>{c.priceKicker}</p><h2>{c.priceTitle}</h2></div><article className={styles.price}><div><span>{c.plan}</span><small><s>{price.standard}</s> {locale === "zh" ? "标准价" : "standard"}</small></div><h3>{price.founding}<small>{c.priceUnit}</small></h3><ul>{c.priceFeatures.map(x=><li key={x}>✓ {x}</li>)}</ul><a className={styles.primary} href="/login?intent=trial">{c.priceCta} ↗</a></article></section>
      <section className={`${styles.section} ${styles.faqSection}`} id="faq"><div className={styles.sectionHead}><h2>{c.faqTitle}</h2></div><div className={styles.faq}>{c.faq.map(([q,a])=><details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><a className={styles.lightButton} href="/login?intent=trial">{c.finalCta} ↗</a></section>
    </main>
    <footer><div><strong>SciNest · {locale === "zh" ? "科研小棉袄" : "Research creation workspace"}</strong><span>{locale === "zh" ? "由 Jiaempower Pathways Limited 运营" : "Operated by Jiaempower Pathways Limited"}</span></div><nav><a href="#">{locale === "zh" ? "隐私政策" : "Privacy"}</a><a href="#">{locale === "zh" ? "服务条款" : "Terms"}</a><a href="#">{locale === "zh" ? "退款政策" : "Refund policy"}</a></nav><small>© {new Date().getFullYear()} Jiaempower Pathways Limited</small></footer>
  </div>;
}
