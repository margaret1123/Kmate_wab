export default function HomePage() {
  return (
    <div className="page">
      <div className="orb" />

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Kmate 首页">
            <span className="brand-mark">K</span>
            <span>Kmate · 科研小棉袄</span>
          </a>
          <nav className="nav-links" aria-label="页面导航">
            <a href="#features">核心功能</a>
            <a href="#workflow">使用流程</a>
            <a href="#pricing">付费方案</a>
            <a href="#download">下载体验</a>
            <a href="#faq">常见问题</a>
          </nav>
          <a className="btn btn-primary" href="#pricing">
            立即获取
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div>
            <span className="eyebrow">
              AI科研写作 · 文献解析 · 图表方案 · 规范引用
            </span>
            <h1>
              <span className="grad">科研小棉袄</span>
              <br />
              让科研写作少走弯路
            </h1>
            <p>
              把文献、写作、图表和引用整理放在同一个工作台。导入资料后，AI可以围绕你的研究主题提炼重点、拆解结构、生成图表方案，并整理规范参考文献。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#pricing">
                查看付费方案
              </a>
              <a className="btn btn-ghost" href="#features">
                先了解功能
              </a>
            </div>
            <div className="hero-note">
              适合论文初稿、开题报告、课题申报、科研图表方案、参考文献整理等场景。
            </div>
          </div>
          <div className="hero-card">
            <img
              className="mockup"
              src="/mockup.png"
              alt="Kmate 科研小棉袄工作界面"
            />
            <div className="floating-card">
              <strong>💡 AI 驱动</strong>
              <span>
                从文献到初稿、从数据到图表，智能辅助每一步科研产出
              </span>
            </div>
          </div>
        </section>

        {/* Trust indicators */}
        <section className="trust">
          <div className="trust-item">
            <b>📄 文献智能解析</b>
            <span>上传PDF/CAJ自动提取关键信息，提炼研究框架与核心论点</span>
          </div>
          <div className="trust-item">
            <b>✍️ AI 辅助写作</b>
            <span>从提纲到段落，AI理解你的研究主题后逐层辅助内容生成</span>
          </div>
          <div className="trust-item">
            <b>📊 图表方案生成</b>
            <span>根据实验数据与研究逻辑，自动推荐适配的图表呈现方式</span>
          </div>
          <div className="trust-item">
            <b>📑 规范引用整理</b>
            <span>自动识别参考文献格式，匹配国标/APA/MLA等规范输出</span>
          </div>
        </section>

        {/* Pain points */}
        <section className="pain" id="pain">
          <div className="section-head">
            <h2>写论文最怕的不是写不出来</h2>
            <p>而是写了很久，发现思路偏了、格式不对、引用缺失</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="icon">📝</div>
              <h3>不知道从何下手</h3>
              <p>
                面对空白文档，思路散乱。科研小棉袄帮你从文献出发，一步步拆解出可执行写作路径。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">🔄</div>
              <h3>反复修改格式</h3>
              <p>
                参考文献格式、图表编号、段落结构——花掉大半时间在调整而非创作。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">📊</div>
              <h3>图表表达不清</h3>
              <p>
                数据有了但不知道怎么画。AI会根据研究逻辑推荐合适图表类型与配色方案。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features" id="features">
          <div className="section-head">
            <h2>核心功能</h2>
            <p>不是简单套模板，而是围绕你的研究主题，一步步完成</p>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">资料库问答</span>
              <h3>导入文献，AI读懂你的研究方向</h3>
              <p>
                上传你的参考文献、开题报告或实验数据。AI会基于你的专属资料库回答问题，生成与你研究方向高度相关的内容，而非泛泛而谈。
              </p>
              <div className="ticks">
                <div className="tick">支持 PDF、CAJ、Word、TXT 等多种格式</div>
                <div className="tick">自动提取关键信息与核心论点</div>
                <div className="tick">基于文献回答问题，可溯源至原文段落</div>
              </div>
            </div>
            <div className="feature-visual">
              <div
                style={{
                  background: "linear-gradient(135deg,#e8f7f5,#fff)",
                  borderRadius: 30,
                  padding: 40,
                  minHeight: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.9)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span style={{ fontSize: 64 }}>📚</span>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">AI 文稿创作</span>
              <h3>从提纲到完整初稿，逐层生成</h3>
              <p>
                不是一键生成整篇文章。AI会先与你对齐研究框架，确认章节逻辑，再逐层展开内容。每一步你都可以介入调整，确保方向不偏。
              </p>
              <div className="ticks">
                <div className="tick">研究框架先行，确保逻辑严密</div>
                <div className="tick">逐层生成，每步可干预调整</div>
                <div className="tick">自动保持术语一致性与学术风格</div>
              </div>
            </div>
            <div className="feature-visual">
              <div
                style={{
                  background: "linear-gradient(135deg,#e8f7f5,#fff)",
                  borderRadius: 30,
                  padding: 40,
                  minHeight: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.9)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span style={{ fontSize: 64 }}>✍️</span>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">图表方案</span>
              <h3>从数据到可视化，智能推荐图表</h3>
              <p>
                告诉AI你的实验设计和数据特征，它会推荐最适合的图表类型、配色方案和呈现逻辑。不是套模板，是基于你的研究内容定制。
              </p>
              <div className="ticks">
                <div className="tick">根据数据类型智能推荐图表类型</div>
                <div className="tick">支持柱状图、折线图、散点图、热力图等</div>
                <div className="tick">推荐学术期刊适配配色方案</div>
              </div>
            </div>
            <div className="feature-visual">
              <div
                style={{
                  background: "linear-gradient(135deg,#e8f7f5,#fff)",
                  borderRadius: 30,
                  padding: 40,
                  minHeight: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.9)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span style={{ fontSize: 64 }}>📊</span>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">规范引用</span>
              <h3>参考文献自动整理，不再手打格式</h3>
              <p>
                上传文献后自动识别信息，一键生成符合GB/T 7714、APA、MLA等规范的引用条目。支持在文内自动插入引用标记。
              </p>
              <div className="ticks">
                <div className="tick">自动识别文献元信息（作者、标题、期刊等）</div>
                <div className="tick">支持多种引用规范格式</div>
                <div className="tick">文内引用标记与文末参考文献联动</div>
              </div>
            </div>
            <div className="feature-visual">
              <div
                style={{
                  background: "linear-gradient(135deg,#e8f7f5,#fff)",
                  borderRadius: 30,
                  padding: 40,
                  minHeight: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,.9)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <span style={{ fontSize: 64 }}>📑</span>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="workflow" id="workflow">
          <div className="section-head">
            <h2>四步上手科研写作</h2>
            <p>从零到初稿，每一步都有AI辅助</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>导入研究资料</h3>
              <p>上传文献、开题报告、实验数据等，AI构建专属研究知识库</p>
            </div>
            <div className="step">
              <h3>对齐研究框架</h3>
              <p>AI提炼核心论点与章节结构，与你确认研究方向和逻辑主线</p>
            </div>
            <div className="step">
              <h3>逐层生成内容</h3>
              <p>按章节逐步生成初稿，每步可人工介入调整，确保内容质量</p>
            </div>
            <div className="step">
              <h3>整理与导出</h3>
              <p>自动整理图表、引用格式，导出为Word/PDF，适配投稿要求</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="pricing" id="pricing">
          <div className="section-head">
            <h2>简单透明的定价</h2>
            <p>选择适合你的方案，支持随时升级</p>
          </div>
          <div className="price-wrap">
            <div className="price-card">
              <div className="price-name">基础版</div>
              <div className="price">
                ¥299<small>/永久</small>
              </div>
              <p className="price-desc">
                适合个人研究者的日常写作需求
              </p>
              <ul className="price-list">
                <li>文献资料库问答（10篇上限）</li>
                <li>AI辅助文稿创作</li>
                <li>基础图表方案推荐</li>
                <li>参考文献整理（GB/T 7714）</li>
                <li>桌面端APP使用权（1设备）</li>
              </ul>
              <a className="btn btn-ghost" href="#">
                立即购买
              </a>
            </div>
            <div className="price-card highlight">
              <div className="price-name">专业版 · 推荐</div>
              <div className="price">
                ¥599<small>/永久</small>
              </div>
              <p className="price-desc">
                适合高频写作者与课题组
              </p>
              <ul className="price-list">
                <li>文献资料库问答（50篇上限）</li>
                <li>AI辅助文稿创作 + 润色优化</li>
                <li>高级图表方案 + 配色推荐</li>
                <li>全格式引用整理（GB/APA/MLA等）</li>
                <li>桌面端APP使用权（3设备）</li>
                <li>PPT模板包下载</li>
              </ul>
              <a className="btn btn-primary" href="#">
                立即购买
              </a>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="download" id="download">
          <div className="download-box">
            <div>
              <h2>准备好让科研更高效了吗？</h2>
              <p>
                下载Kmate桌面端，开始体验AI辅助的科研写作工作流。支持Windows和macOS。
              </p>
            </div>
            <div className="download-actions">
              <a className="btn btn-primary" href="#">
                Windows 版下载
              </a>
              <a className="btn btn-ghost" href="#">
                macOS 版下载
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="section-head">
            <h2>常见问题</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Kmate支持哪些文献格式？</summary>
              <p>
                目前支持PDF、CAJ、Word（.doc/.docx）和TXT格式的文献导入。我们正在增加更多格式支持。
              </p>
            </details>
            <details>
              <summary>AI生成的内容可以商用或投稿吗？</summary>
              <p>
                可以。Kmate作为辅助工具，生成的内容由你审核和修改后拥有完全版权。建议根据目标期刊要求对AI辅助部分进行适当声明。
              </p>
            </details>
            <details>
              <summary>付费后可以退款吗？</summary>
              <p>
                购买后7天内、未超过10次使用的，支持全额退款。具体请查看我们的退款政策。
              </p>
            </details>
            <details>
              <summary>一台电脑上可以安装多设备吗？</summary>
              <p>
                基础版支持1台设备激活，专业版支持3台。如需更多设备授权，请联系我们获取团队方案。
              </p>
            </details>
            <details>
              <summary>数据隐私如何保障？</summary>
              <p>
                你的文献和文稿存储在本地，不会上传至云端。AI处理在本地完成，我们不会读取或存储你的研究内容。
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kmate · 科研小棉袄. 保留所有权利.</p>
      </footer>
    </div>
  );
}
