import { LangSwitch } from "../lang-switch";

export default function EnPage() {
  return (
    <div className="page">
      <div className="orb" />

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="/en" aria-label="Kmate Home">
            <span className="brand-mark">K</span>
            <span>Kmate</span>
          </a>
          <nav className="nav-links" aria-label="Navigation">
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#compare">Compare</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <LangSwitch current="en" />
          <a className="btn btn-primary" href="/login">
            Sign In
          </a>
        </div>
      </header>

      <main id="top">
        {/* === HERO === */}
        <section className="hero">
          <div>
            <span className="eyebrow">
              AI Academic Writing · Desktop App · $42 One-Time
            </span>
            <h1>
              <span className="grad">Kmate</span>
              <br />
              Your AI Academic Writing Partner
            </h1>
            <p>
              <strong>An AI-powered desktop app for students, researchers, and academics.</strong>{" "}
              Import references, let AI build your research framework, generate charts,
              format citations. One-time purchase, data stays on your device.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#pricing">
                ¥299 Buy Once
              </a>
              <a className="btn btn-ghost" href="#features">
                Explore Features
              </a>
            </div>
            <div className="hero-note">
              Thesis · Research Papers · Grant Proposals · SCI Writing · Citations · Charts
            </div>
          </div>
          <div className="hero-card">
            <img
              className="mockup"
              src="/mockup.png"
              alt="Kmate AI Academic Writing Tool Interface"
            />
            <div className="floating-card">
              <strong>🔬 Research-First AI</strong>
              <span>
                Not a generic chatbot — Kmate understands academic standards,
                citation formats, and research methodology.
              </span>
            </div>
          </div>
        </section>

        {/* === TRUST === */}
        <section className="trust">
          <div className="trust-item">
            <b>📄 Smart Literature Parser</b>
            <span>Upload PDF/CAJ/Word files. AI extracts key findings and builds your research knowledge base.</span>
          </div>
          <div className="trust-item">
            <b>✍️ AI Academic Writing</b>
            <span>Framework-first approach: outline → chapters → draft. You review and adjust at every step.</span>
          </div>
          <div className="trust-item">
            <b>📊 Chart Recommendations</b>
            <span>Describe your data and AI suggests optimal chart types with journal-ready color schemes.</span>
          </div>
          <div className="trust-item">
            <b>📑 Auto Citations</b>
            <span>Auto-detect metadata. One-click format in APA 7th, MLA 9th, Harvard, and GB/T 7714.</span>
          </div>
        </section>

        {/* === TARGET USERS === */}
        <section className="pain">
          <div className="section-head">
            <h2>Who Uses Kmate?</h2>
            <p>From undergrad essays to SCI papers — one tool for every academic stage</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="icon">🎓</div>
              <h3>Undergraduates</h3>
              <p>Thesis, term papers, capstone projects — AI helps you go from blank page to structured draft.</p>
            </div>
            <div className="pain-card">
              <div className="icon">🔬</div>
              <h3>Graduate Students / PhDs</h3>
              <p>Literature review, SCI/SSCI manuscripts, experimental data charts — 50-paper knowledge base, English polishing.</p>
            </div>
            <div className="pain-card">
              <div className="icon">👨‍🏫</div>
              <h3>Professors & Researchers</h3>
              <p>Grant proposals, research reports — auto-generated literature reviews and methodology diagrams.</p>
            </div>
            <div className="pain-card">
              <div className="icon">🌏</div>
              <h3>International Students</h3>
              <p>Bilingual literature parsing. Write in English with AI polishing. Switch between APA/MLA/Harvard instantly.</p>
            </div>
            <div className="pain-card">
              <div className="icon">📋</div>
              <h3>Thesis Sprinters</h3>
              <p>Literature → methodology → results → charts → citations — all in one workflow. 3x faster than juggling Word + Zotero + Excel.</p>
            </div>
            <div className="pain-card">
              <div className="icon">🏆</div>
              <h3>Research Labs</h3>
              <p>Shared reference library, unified writing templates, batch format checking. Pro version: 3-device activation.</p>
            </div>
          </div>
        </section>

        {/* === FEATURES === */}
        <section className="features" id="features">
          <div className="section-head">
            <h2>Four Modules Cover Your Entire Research Workflow</h2>
            <p>Use each independently or combine them for a complete writing pipeline</p>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">Module 1 · Knowledge Base Q&A</span>
              <h3>Upload Papers. AI Understands Your Research.</h3>
              <p>Not generic ChatGPT answers. Import your references and data — AI answers based on YOUR literature. Every claim links back to source paragraphs.</p>
              <div className="ticks">
                <div className="tick">Supports PDF / CAJ / Word / TXT import</div>
                <div className="tick">Bilingual Chinese-English parsing</div>
                <div className="tick">Auto-extracts methods, findings, and key data</div>
                <div className="tick">Reference relationship visualization</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">📚</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">Module 2 · AI Drafting</span>
              <h3>Framework First. Write Layer by Layer.</h3>
              <p>AI aligns the research framework with you before writing. Then generates content section by section — you intervene and adjust at every step.</p>
              <div className="ticks">
                <div className="tick">Auto-generates research framework & chapter outline</div>
                <div className="tick">Section-by-section drafting with manual override</div>
                <div className="tick">Maintains terminology consistency & academic tone</div>
                <div className="tick">English academic writing + polishing mode</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">✍️</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">Module 3 · Chart Solutions</span>
              <h3>From Raw Data to Publication-Ready Figures</h3>
              <p>Describe your experimental design and data. AI recommends optimal chart types, data layouts, and Nature/Science-grade color schemes. Not Excel defaults.</p>
              <div className="ticks">
                <div className="tick">Bar / Line / Scatter / Heatmap / Box plots</div>
                <div className="tick">Smart chart type recommendation by data shape</div>
                <div className="tick">Nature / Science / Cell journal color palettes</div>
                <div className="tick">Export high-res vector graphics for submission</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">📊</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">Module 4 · Citation Manager</span>
              <h3>Auto-Format References. Four Major Styles.</h3>
              <p>Import a paper and Kmate auto-detects authors, title, journal, year, DOI. In-text citations and bibliography sync automatically. Switch styles in one click.</p>
              <div className="ticks">
                <div className="tick">APA 7th Edition (Psychology, Education, Social Sciences)</div>
                <div className="tick">MLA 9th Edition (Languages, Literature, Humanities)</div>
                <div className="tick">Harvard (Author-Date, widely used)</div>
                <div className="tick">GB/T 7714 (Chinese National Standard)</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">📑</div>
            </div>
          </div>
        </section>

        {/* === COMPARISON TABLE === */}
        <section className="features" id="compare" style={{ background: "#fff" }}>
          <div className="section-head">
            <h2>Kmate vs Traditional Tool Stack</h2>
            <p>Why researchers are switching from multi-tool juggling to an all-in-one solution</p>
          </div>
          <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 22px 40px", overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Kmate</th>
                  <th>Word + Zotero + Excel</th>
                  <th>ChatGPT / Grammarly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td className="win">¥299 lifetime</td>
                  <td>Free (fragmented)</td>
                  <td>~$20-30/month</td>
                </tr>
                <tr>
                  <td><strong>Lit Parsing</strong></td>
                  <td className="win">AI extraction + Q&A</td>
                  <td>Manual</td>
                  <td>Not supported</td>
                </tr>
                <tr>
                  <td><strong>Academic Writing</strong></td>
                  <td className="win">Framework-aligned drafting</td>
                  <td>No AI assist</td>
                  <td>Generic, no academic norms</td>
                </tr>
                <tr>
                  <td><strong>Charts</strong></td>
                  <td className="win">AI-recommended + journal colors</td>
                  <td>Manual Excel</td>
                  <td>Not supported</td>
                </tr>
                <tr>
                  <td><strong>Citations</strong></td>
                  <td className="win">APA/MLA/Harvard/GB all-in</td>
                  <td>Zotero plugin</td>
                  <td>Not supported</td>
                </tr>
                <tr>
                  <td><strong>Privacy</strong></td>
                  <td className="win">Local-only</td>
                  <td>Local</td>
                  <td>Cloud — data risk</td>
                </tr>
                <tr>
                  <td><strong>Audience</strong></td>
                  <td className="win">Undergrad → PhD → Faculty</td>
                  <td>General</td>
                  <td>General</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* === WORKFLOW === */}
        <section className="workflow" id="workflow">
          <div className="section-head">
            <h2>Four Steps to a Complete Draft</h2>
            <p>Not learning a new tool — AI adapts to your research habits</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>① Import Sources</h3>
              <p>Upload references (PDF/CAJ/Word) and data. AI builds your personal research knowledge base.</p>
            </div>
            <div className="step">
              <h3>② Align Framework</h3>
              <p>AI extracts key arguments and proposes chapter logic. You approve before writing begins.</p>
            </div>
            <div className="step">
              <h3>③ Draft Layer by Layer</h3>
              <p>AI generates each section progressively. You can revise, expand, or rewrite at every step.</p>
            </div>
            <div className="step">
              <h3>④ Polish & Export</h3>
              <p>Auto-format charts and citations. Export clean Word/PDF ready for journal submission.</p>
            </div>
          </div>
        </section>

        {/* === PRICING === */}
        <section className="pricing" id="pricing">
          <div className="section-head">
            <h2>Simple Pricing · Buy Once, Yours Forever</h2>
            <p>No monthly subscriptions. Pay once. The software and your data belong to you.</p>
          </div>
          <div className="price-wrap">
            <div className="price-card">
              <div className="price-name">Basic</div>
              <div className="price">
                ¥299<small>/lifetime</small>
              </div>
              <p className="price-desc">For individual researchers</p>
              <ul className="price-list">
                <li>Knowledge base (10 papers)</li>
                <li>AI-assisted drafting</li>
                <li>Basic chart recommendations</li>
                <li>GB/T 7714 citations</li>
                <li>1 device activation</li>
              </ul>
              <a className="btn btn-ghost" href="/login">
                Get Started
              </a>
            </div>
            <div className="price-card highlight">
              <div className="price-name">Pro · Recommended</div>
              <div className="price">
                ¥599<small>/lifetime</small>
              </div>
              <p className="price-desc">For prolific writers & labs</p>
              <ul className="price-list">
                <li>Knowledge base (50 papers)</li>
                <li>AI drafting + academic polishing</li>
                <li>Advanced chart solutions</li>
                <li>APA/MLA/Harvard/GB all formats</li>
                <li>3 device activations</li>
                <li>PPT template pack</li>
              </ul>
              <a className="btn btn-primary" href="/login">
                Get Started
              </a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#5d6b7c", marginTop: 24, fontSize: 14 }}>
            Competitors charge ¥800-2000/year. Kmate starts at ¥299, one-time. No subscriptions. No hidden fees.
          </p>
        </section>

        {/* === DOWNLOAD === */}
        <section className="download">
          <div className="download-box">
            <div>
              <h2>Ready to Supercharge Your Research Writing?</h2>
              <p>
                Download Kmate for Windows or macOS. Runs locally — your data never leaves your device.
              </p>
            </div>
            <div className="download-actions">
              <a className="btn btn-primary" href="/login">
                Download for Windows
              </a>
              <a className="btn btn-ghost" href="/login">
                Download for macOS
              </a>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="faq" id="faq">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>How is Kmate different from ChatGPT or Grammarly?</summary>
              <p>ChatGPT is a general-purpose chatbot — it doesn't understand GB/T 7714 or journal chart standards. Grammarly only checks grammar. Kmate is purpose-built for academic writing: literature Q&A, framework-aligned drafting, chart recommendations, and four-format citation management — all in one workflow.</p>
            </details>
            <details>
              <summary>Will AI-generated content pass plagiarism checks?</summary>
              <p>Kmate is an assistant, not a ghostwriter. It helps you organize ideas, build frameworks, and manage references. Final content is reviewed and owned by you. We recommend disclosing AI assistance per your target journal's policy.</p>
            </details>
            <details>
              <summary>Is ¥299 one-time or recurring?</summary>
              <p>One-time purchase. You own the version you buy forever — no subscriptions, no auto-renewals, no hidden charges. Major version upgrades offered at a discount.</p>
            </details>
            <details>
              <summary>Will my research data be leaked?</summary>
              <p>No. Kmate is a local desktop app. Your papers and drafts are stored on YOUR computer. AI processing happens locally. This is the biggest privacy advantage over cloud tools like ChatGPT or Grammarly.</p>
            </details>
            <details>
              <summary>Does it support English academic writing?</summary>
              <p>Yes. Kmate handles bilingual Chinese-English literature. AI drafting and polishing support English. Citations cover APA 7th, MLA 9th, and Harvard — covering most international journal requirements.</p>
            </details>
            <details>
              <summary>Any limits on file uploads?</summary>
              <p>Basic: 10 papers. Pro: 50 papers. Max 50MB per file (PDF/CAJ/Word). More than enough for typical thesis and paper writing.</p>
            </details>
            <details>
              <summary>Can I use it on multiple computers?</summary>
              <p>Basic: 1 device. Pro: 3 devices. You can self-service deactivate and reactivate when switching computers. Lab/team multi-device plans available on request.</p>
            </details>
            <details>
              <summary>Refund policy?</summary>
              <p>Full refund within 7 days of purchase if used less than 10 times. We want you to be confident before committing.</p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kmate · Academic Writing AI. All rights reserved. | <a href="/">中文</a></p>
      </footer>
    </div>
  );
}
