import { LangSwitch } from "./lang-switch";

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
            <a href="#compare">对比选择</a>
            <a href="#pricing">付费方案</a>
            <a href="#faq">常见问题</a>
          </nav>
          <LangSwitch current="zh" />
          <a className="btn btn-primary" href="/login">
            登录 / 注册
          </a>
        </div>
      </header>

      <main id="top">
        {/* === HERO === */}
        <section className="hero">
          <div>
            <span className="eyebrow">
              AI科研写作 · 国产桌面端 · ¥299一次性买断
            </span>
            <h1>
              <span className="grad">科研小棉袄</span>
              <br />
              从开题到终稿，一站式科研写作
            </h1>
            <p>
              <strong>面向大学生、研究生、教师和科研人员的AI写作桌面应用。</strong>
              导入文献后，AI围绕你的研究方向提炼重点、拆解结构、生成图表方案、整理参考文献。
              不是按月订阅，一次买断永久使用，数据本地运行不离开你的设备。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#pricing">
                ¥299 永久使用
              </a>
              <a className="btn btn-ghost" href="#features">
                先了解功能
              </a>
            </div>
            <div className="hero-note">
              覆盖：论文初稿 · 开题报告 · 课题申报 · SCI写作 · 参考文献整理 · 图表方案
            </div>
          </div>
          <div className="hero-card">
            <img
              className="mockup"
              src="/mockup.png"
              alt="Kmate 科研写作AI工具工作界面"
            />
            <div className="floating-card">
              <strong>🔬 科研专属 AI</strong>
              <span>
                不是通用 ChatGPT，是懂学术规范、文献格式和研究逻辑的科研写作助手
              </span>
            </div>
          </div>
        </section>

        {/* === TRUST === */}
        <section className="trust">
          <div className="trust-item">
            <b>📄 文献智能解析</b>
            <span>上传PDF/CAJ自动提取信息，构建专属研究知识库。支持中文期刊和英文SCI论文</span>
          </div>
          <div className="trust-item">
            <b>✍️ AI 学术写作</b>
            <span>从研究框架到章节内容逐层生成。不是一键出文，是科研逻辑驱动的结构化写作</span>
          </div>
          <div className="trust-item">
            <b>📊 图表方案生成</b>
            <span>根据实验数据推荐图表类型与学术配色。柱状图/折线图/散点图/热力图全覆盖</span>
          </div>
          <div className="trust-item">
            <b>📑 规范引用整理</b>
            <span>自动识别文献信息，一键生成GB/T 7714/APA 7th/MLA 9th/Harvard格式引用</span>
          </div>
        </section>

        {/* === TARGET USERS === */}
        <section className="pain" id="audience">
          <div className="section-head">
            <h2>谁在用科研小棉袄？</h2>
            <p>从本科论文到SCI投稿，全学段科研写作场景覆盖</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="icon">🎓</div>
              <h3>本科生</h3>
              <p>
                毕业论文、开题报告、课程论文——从选题框架到终稿排版，AI辅助每一步。不再对着空白文档发呆。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">🔬</div>
              <h3>研究生 / 博士</h3>
              <p>
                文献综述、SCI/SSCI论文写作、实验数据图表化——50篇文献知识库，英文润色优化，适配国际期刊要求。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">👨‍🏫</div>
              <h3>教师 / 科研人员</h3>
              <p>
                课题申报书、基金申请书、研究进展报告——自动生成文献综述与技术路线图方案，提升申报通过率。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">🌏</div>
              <h3>留学生</h3>
              <p>
                中文文献看不懂？英文论文写不顺？Kmate 支持中英双语文献解析和学术写作，APA/MLA/Harvard格式一键切换。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">📋</div>
              <h3>硕士论文冲刺</h3>
              <p>
                文献综述→实验设计→数据分析→图表绘制→参考文献，五个环节一站式搞定。比 Word+Zotero+Excel 三工具切换效率高 3 倍。
              </p>
            </div>
            <div className="pain-card">
              <div className="icon">🏆</div>
              <h3>课题组 / 实验室</h3>
              <p>
                团队共享文献库、统一写作模板、批量格式检查。专业版支持 3 设备激活，适合课题组协作场景。
              </p>
            </div>
          </div>
        </section>

        {/* === FEATURES === */}
        <section className="features" id="features">
          <div className="section-head">
            <h2>不只是AI写作——四大模块覆盖科研全流程</h2>
            <p>每个模块都可独立使用，也可以按写作流程串联</p>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">模块一 · 资料库问答</span>
              <h3>上传文献，AI读懂你的研究</h3>
              <p>
                不是通用大模型的泛泛而谈。导入你的参考文献和实验数据后，AI基于你的专属资料库回答问题。每个结论可溯源至原文段落。
              </p>
              <div className="ticks">
                <div className="tick">支持 PDF / CAJ / Word / TXT 文献导入</div>
                <div className="tick">中英文文献混合解析，双语问答</div>
                <div className="tick">自动提取研究方法、数据、结论等关键信息</div>
                <div className="tick">文献关系图谱可视化</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">📚</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">模块二 · AI文稿创作</span>
              <h3>研究框架先行，逐层生成内容</h3>
              <p>
                不是一键生成整篇文章。AI先与你对齐研究框架和章节逻辑，确认后再逐层展开。每一步你都可以介入调整，确保学术严谨性。
              </p>
              <div className="ticks">
                <div className="tick">自动生成研究框架与章节大纲</div>
                <div className="tick">逐节展开，每节可独立修改重写</div>
                <div className="tick">保持全文术语一致性与学术写作风格</div>
                <div className="tick">支持中文/英文写作，学术英语润色优化</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">✍️</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">模块三 · 图表方案</span>
              <h3>实验数据 → 学术图表，一键推荐</h3>
              <p>
                告诉AI你的实验设计、数据类型和研究目的，它自动推荐最适合的图表类型、数据组织方式和配色方案。不是 Excel 默认配色，是 Nature/Science 期刊级别的学术表达。
              </p>
              <div className="ticks">
                <div className="tick">柱状图 / 折线图 / 散点图 / 热力图 / 箱线图</div>
                <div className="tick">根据数据类型智能推荐图表类型</div>
                <div className="tick">Nature / Science / Cell 期刊适配配色方案</div>
                <div className="tick">导出高清矢量图，直接用于投稿</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="mockup-placeholder">📊</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-copy">
              <span className="feature-kicker">模块四 · 规范引用</span>
              <h3>参考文献自动整理，支持四种主流格式</h3>
              <p>
                导入文献后自动识别作者、标题、期刊、年份、DOI等信息。文内引用与文末参考文献列表联动更新，切换格式一键完成。
              </p>
              <div className="ticks">
                <div className="tick">GB/T 7714（中国国家标准）</div>
                <div className="tick">APA 第7版（心理学/教育学/社会科学）</div>
                <div className="tick">MLA 第9版（语言文学/人文学科）</div>
                <div className="tick">Harvard（广泛使用的著者-年份制）</div>
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
            <h2>科研写作工具对比：Kmate vs 传统方案</h2>
            <p>为什么越来越多的科研人从「多工具拼凑」转向一站式方案</p>
          </div>
          <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 22px 40px", overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>对比维度</th>
                  <th>Kmate</th>
                  <th>Word + Zotero + Excel</th>
                  <th>Grammarly / ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>费用</strong></td>
                  <td className="win">¥299 永久</td>
                  <td>免费（功能分散）</td>
                  <td>¥150-200/月</td>
                </tr>
                <tr>
                  <td><strong>文献解析</strong></td>
                  <td className="win">AI自动提取 + 知识库问答</td>
                  <td>手动整理</td>
                  <td>不支持</td>
                </tr>
                <tr>
                  <td><strong>学术写作</strong></td>
                  <td className="win">框架对齐 + 逐层生成</td>
                  <td>无AI辅助</td>
                  <td>通用AI，不懂学术规范</td>
                </tr>
                <tr>
                  <td><strong>图表方案</strong></td>
                  <td className="win">AI推荐 + 学术配色</td>
                  <td>手动制图</td>
                  <td>不支持</td>
                </tr>
                <tr>
                  <td><strong>引用格式</strong></td>
                  <td className="win">GB/APA/MLA/Harvard全支持</td>
                  <td>Zotero插件</td>
                  <td>不支持</td>
                </tr>
                <tr>
                  <td><strong>数据隐私</strong></td>
                  <td className="win">本地运行</td>
                  <td>本地</td>
                  <td>云端，数据风险</td>
                </tr>
                <tr>
                  <td><strong>适用人群</strong></td>
                  <td className="win">本科→博士→教师全覆盖</td>
                  <td>通用</td>
                  <td>通用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* === WORKFLOW === */}
        <section className="workflow" id="workflow">
          <div className="section-head">
            <h2>四步上手，30分钟出初稿框架</h2>
            <p>不是学习新工具，是让AI适应你的研究习惯</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>① 导入研究资料</h3>
              <p>上传参考文献（PDF/CAJ/Word）和实验数据，AI构建你的专属研究知识库</p>
            </div>
            <div className="step">
              <h3>② 对齐研究框架</h3>
              <p>AI提炼核心论点与章节逻辑，与你确认后再动笔，确保方向不偏</p>
            </div>
            <div className="step">
              <h3>③ 逐层生成内容</h3>
              <p>按章节逐步生成初稿。每步可人工修改、补充、重写，保持学术严谨</p>
            </div>
            <div className="step">
              <h3>④ 整理与导出</h3>
              <p>自动排版图表、格式化引用、检查术语一致性，导出Word/PDF直接投稿</p>
            </div>
          </div>
        </section>

        {/* === PRICING === */}
        <section className="pricing" id="pricing">
          <div className="section-head">
            <h2>简单定价 · 一次买断</h2>
            <p>不是按月订阅。付一次钱，用一辈子。软件是你的，数据也是你的。</p>
          </div>
          <div className="price-wrap">
            <div className="price-card">
              <div className="price-name">基础版</div>
              <div className="price">
                ¥299<small>/永久</small>
              </div>
              <p className="price-desc">个人研究者日常写作</p>
              <ul className="price-list">
                <li>文献资料库（10篇上限）</li>
                <li>AI辅助文稿创作</li>
                <li>基础图表方案推荐</li>
                <li>GB/T 7714 引用整理</li>
                <li>1台设备激活</li>
              </ul>
              <a className="btn btn-ghost" href="/login">
                立即获取
              </a>
            </div>
            <div className="price-card highlight">
              <div className="price-name">专业版 · 推荐</div>
              <div className="price">
                ¥599<small>/永久</small>
              </div>
              <p className="price-desc">高频写作者与课题组</p>
              <ul className="price-list">
                <li>文献资料库（50篇上限）</li>
                <li>AI写作 + 学术润色优化</li>
                <li>高级图表方案 + 学术配色</li>
                <li>GB/APA/MLA/Harvard全格式</li>
                <li>3台设备激活</li>
                <li>PPT学术模板包</li>
              </ul>
              <a className="btn btn-primary" href="/login">
                立即获取
              </a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#5d6b7c", marginTop: 24, fontSize: 14 }}>
            同类工具年费 ¥800-2000。Kmate 一次买断 ¥299 起。非订阅制，无隐藏费用。
          </p>
        </section>

        {/* === DOWNLOAD === */}
        <section className="download" id="download">
          <div className="download-box">
            <div>
              <h2>准备好让科研写作更高效了吗？</h2>
              <p>
                下载Kmate桌面端，Windows/macOS双平台支持。本地运行，数据不离开你的设备。
              </p>
            </div>
            <div className="download-actions">
              <a className="btn btn-primary" href="/login">
                注册下载（Windows）
              </a>
              <a className="btn btn-ghost" href="/login">
                注册下载（macOS）
              </a>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="faq" id="faq">
          <div className="section-head">
            <h2>科研人常问的8个问题</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Kmate 和 ChatGPT/Grammarly 有什么区别？</summary>
              <p>
                ChatGPT 是通用AI，不懂GB/T 7714格式，不会画学术图表。Grammarly 只能检查语法。Kmate 专为科研写作设计：文献知识库问答、研究框架对齐、图表方案生成、四格式引用管理——四个环节一站式完成。
              </p>
            </details>
            <details>
              <summary>用AI写论文能通过查重和学术审查吗？</summary>
              <p>
                Kmate 是辅助工具，不是代写工具。它帮你整理思路、生成框架、组织文献，但最终内容由你审核修改后拥有完全版权。建议根据目标期刊要求对AI辅助部分做适当声明。
              </p>
            </details>
            <details>
              <summary>¥299 是一次性的还是每年都要付？</summary>
              <p>
                一次性买断。购买后永久使用你购买版本的所有功能，不续费、不订阅、不自动扣款。后续大版本升级另有优惠。
              </p>
            </details>
            <details>
              <summary>我的论文数据会泄露吗？</summary>
              <p>
                不会。Kmate 是本地桌面应用，你的文献和文稿存储在你的电脑上。AI 处理在本地完成，数据不会上传到云端。这是相比在线工具（ChatGPT/Grammarly）最大的安全优势。
              </p>
            </details>
            <details>
              <summary>支持英文论文写作吗？</summary>
              <p>
                支持。Kmate 可处理中英文混合文献，AI写作和润色均支持英文。引用格式支持APA第7版、MLA第9版和Harvard制，覆盖大多数国际期刊投稿要求。
              </p>
            </details>
            <details>
              <summary>文献上传有数量限制吗？对文件大小有要求吗？</summary>
              <p>
                基础版支持10篇文献导入，专业版支持50篇。每篇支持最大50MB的PDF/CAJ/Word文件。对大多数论文写作场景完全够用。
              </p>
            </details>
            <details>
              <summary>可以同时在多台电脑上用吗？</summary>
              <p>
                基础版1台设备激活，专业版3台设备。换电脑可以自助解绑重新激活。如需团队/实验室多设备方案，请联系我们。
              </p>
            </details>
            <details>
              <summary>购买后支持退款吗？</summary>
              <p>
                购买后7天内、使用不超过10次的，支持全额退款。我们希望你对产品满意后再决定留下。
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kmate · 科研小棉袄. 保留所有权利. | <a href="/en">English</a></p>
      </footer>
    </div>
  );
}
