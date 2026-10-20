// 个人简历网站内容 · Benbi Benbi（笨比本比）
// 字段说明见 references/content-model.md；每条内容都有来源（M=材料，I=采访）。
window.SITE = {
  meta: {
    languages: ["de", "en", "zh"],
    review: ["de"],
    target: {
      role: { de: "Agentic AI Engineer", en: "Agentic AI Engineer", zh: "智能体 AI 工程师" },
      type: "Vollzeit",
      city: { de: "München", en: "Munich", zh: "慕尼黑" }
    },
    style: "terminal-dark",
    layout: "editorial",
    cv: { fit: 1 },
    updated: "2026-10-20"
  },

  basics: {
    name: "Benbi Benbi（笨比本比）",
    label: {
      de: "Founding AI Engineer · Agentic AI · Industrieautomatisierung",
      en: "Founding AI Engineer · Agentic AI · Industrial Automation",
      zh: "创始 AI 工程师 · 智能体 AI · 工业自动化"
    },
    headline: {
      de: "Ich baue KI-Agenten, denen man bei der Arbeit vertrauen kann – von der Forschung bis zum Produkt.",
      en: "I build AI agents people can rely on at work – from research to production.",
      zh: "从研究到产品，打造工作中值得信赖的 AI 智能体。"
    },
    image: "assets/img/avatar.png",
    cv: { de: "assets/docs/cv-de.pdf", en: "assets/docs/cv-en.pdf", zh: "assets/docs/cv-zh.pdf" },
    email: { value: "benbi.benbi@example.com" },
    location: { city: { de: "München", en: "Munich", zh: "慕尼黑" }, countryCode: "DE" },
    profiles: [
      { network: "LinkedIn", url: "https://www.linkedin.com/in/benbi-benbi-example" }
    ],
    availability: {
      type: "Vollzeit",
      note: {
        de: "Sofort verfügbar · München bevorzugt, andere Städte möglich",
        en: "Available immediately · Munich preferred, other cities possible",
        zh: "随时可开始 · 慕尼黑优先，其他城市也可考虑"
      }
    }
  },

  work: [
    {
      id: "beispiel-ai",
      short: "Beispiel AI",
      name: "Beispiel AI GmbH",
      position: {
        de: "Founding AI Engineer",
        en: "Founding AI Engineer",
        zh: "创始 AI 工程师"
      },
      type: "Vollzeit",
      location: { de: "München", en: "Munich", zh: "慕尼黑" },
      startDate: "2025-04",
      summary: {
        de: "Agentische KI-Produktlinie in einem Seed-Start-up von 0 auf 1 aufgebaut.",
        en: "Built the agentic AI product line from 0 to 1 in a seed-stage startup.",
        zh: "在一家种子期创业公司从 0 到 1 搭建智能体 AI 产品线。"
      },
      highlights: [
        {
          de: "Multi-Agent-Orchestrierung, RAG über Kundendokumente und Tool-Anbindung an CRM-Systeme",
          en: "Multi-agent orchestration, RAG over customer documents, and CRM tool integrations",
          zh: "多智能体编排、客户文档 RAG、CRM 工具接入"
        },
        {
          de: "Evaluierung und Regressionstests: jede Änderung läuft gegen 50 Testfälle",
          en: "Evaluation and regression testing: every change runs against 50 test cases",
          zh: "评估与回归测试：每次改动跑 50 个测试用例"
        },
        {
          de: "Infrastruktur: Azure, Bicep, Docker, CI/CD · Python und TypeScript",
          en: "Infrastructure: Azure, Bicep, Docker, CI/CD · Python and TypeScript",
          zh: "基础设施：Azure、Bicep、Docker、CI/CD · Python 与 TypeScript"
        }
      ],
      skills: ["python", "typescript", "agents", "rag", "eval", "azure", "docker", "ci-cd"],
      stories: ["agent-platform", "hackathon-sales-copilot"],
      sources: ["M01", "M02", "M03", "M04"]
    },
    {
      id: "th-beispielburg",
      short: "TH Beispielburg",
      name: "TH Beispielburg",
      position: {
        de: "Wissenschaftliche Mitarbeiterin",
        en: "Research Associate",
        zh: "科研助理"
      },
      type: "Vollzeit",
      location: { de: "Beispielburg", en: "Beispielburg", zh: "Beispielburg" },
      startDate: "2023-01",
      endDate: "2025-03",
      summary: {
        de: "Forschung zu Multi-Agenten-Systemen und Entscheidungen unter Unsicherheit in der Fertigung.",
        en: "Research on multi-agent systems and decision-making under uncertainty in manufacturing.",
        zh: "研究制造中的多智能体系统与不确定性决策。"
      },
      highlights: [
        {
          de: "Grafische Modellierungssprache (DSL) für Datenpipelines entworfen – veröffentlicht als GraphPipe",
          en: "Designed a graphical modelling language (DSL) for data pipelines – published as GraphPipe",
          zh: "设计数据管道图形化建模语言（DSL），以 GraphPipe 发表"
        },
        {
          de: "5 begutachtete Publikationen, u. a. ICEM 2024 (Bari) und ICEA 2023 (Singapur)",
          en: "5 peer-reviewed publications, incl. ICEM 2024 (Bari) and ICEA 2023 (Singapore)",
          zh: "5 篇同行评审论文，包括 ICEM 2024（巴里）和 ICEA 2023（新加坡）"
        },
        {
          de: "Übung zur Pflichtvorlesung „Grundlagen der Digitalisierung“ für 200+ Studierende (deutsch & englisch)",
          en: "Taught the exercise session of a required course for 200+ students (German & English)",
          zh: "必修课《数字化基础》习题课，200+ 学生（德语与英语）"
        },
        {
          de: "Betreuung von 3 Abschlussarbeiten · Mitarbeit im FBT-Fachausschuss 3.35",
          en: "Supervised 3 theses · member of FBT technical committee 3.35",
          zh: "指导 3 篇学位论文 · FBT 3.35 专家委员会成员"
        }
      ],
      skills: ["python", "agents", "ml", "dsl", "time-series", "teaching"],
      stories: ["graphpipe-dsl", "teaching-200"],
      evidence: ["doc-zeugnis-th"],
      sources: ["M01", "M05", "M07b"]
    },
    {
      id: "knusper",
      short: "Knusper Snacks",
      name: "Knusper Snacks GmbH",
      position: {
        de: "Werkstudentin Qualitätsmanagement",
        en: "Working Student, Quality Management",
        zh: "质量管理实习生（Werkstudent）"
      },
      type: { de: "Werkstudentin", en: "Working student", zh: "实习生" },
      location: { de: "Beispieldorf", en: "Beispieldorf", zh: "Beispieldorf" },
      startDate: "2022-05",
      endDate: "2022-09",
      summary: {
        de: "Qualitätsprozesse digitalisiert: von Papier-Checklisten zu einer App.",
        en: "Digitised quality processes: from paper checklists to an app.",
        zh: "把质量流程数字化：从纸质检查表到一款 App。"
      },
      highlights: [
        {
          de: "12 Papier-Checklisten durch Power-Apps-Formulare ersetzt",
          en: "Replaced 12 paper checklists with Power Apps forms",
          zh: "用 Power Apps 替代了 12 张纸质检查表"
        },
        {
          de: "Freigabe- und Eskalationsprozesse mit Power Automate automatisiert",
          en: "Automated approval and escalation workflows with Power Automate",
          zh: "用 Power Automate 自动化审批与升级流程"
        },
        {
          de: "Rund 30 Schichtleitungen und Mitarbeitende geschult",
          en: "Trained around 30 shift leaders and staff",
          zh: "培训约 30 名班组长和员工"
        }
      ],
      skills: ["power-platform", "sharepoint", "low-code"],
      stories: ["knusper-qms"],
      evidence: ["doc-zeugnis-knusper"],
      sources: ["M01", "M07d"]
    }
  ],

  education: [
    {
      id: "tum-master",
      short: { de: "M.Sc. Musterstadt", en: "M.Sc. Musterstadt", zh: "Musterstadt 硕士" },
      institution: { de: "Technische Universität Musterstadt", en: "Technical University of Musterstadt", zh: "模范市工业大学" },
      studyType: { de: "Master of Science", en: "Master of Science", zh: "理学硕士" },
      area: { de: "Wirtschaftsingenieurwesen – Maschinenbau", en: "Industrial Engineering – Mechanical Engineering", zh: "工业工程（机械方向）" },
      startDate: "2020-10",
      endDate: "2022-09",
      score: { value: { de: "1,8", en: "1.8", zh: "1.8" }, scale: "DE" },
      focus: [
        { de: "Maschinelles Lernen", en: "Machine Learning", zh: "机器学习" },
        { de: "Datenanalyse", en: "Data Analytics", zh: "数据分析" },
        { de: "Automatisierung der Fertigung", en: "Manufacturing Automation", zh: "制造自动化" },
        { de: "Unsicherheitsquantifizierung", en: "Uncertainty Quantification", zh: "不确定性量化" }
      ],
      courses: [
        { name: { de: "Data Analytics für bessere Entscheidungen", en: "Data Analytics for Better Decisions", zh: "数据分析辅助决策" }, grade: { de: "sehr gut", en: "very good", zh: "优秀" }, ects: 6 },
        { name: { de: "Machine Learning Anwendungen", en: "Machine Learning Applications", zh: "机器学习应用" }, grade: { de: "gut", en: "good", zh: "良好" }, ects: 6 },
        { name: { de: "Simulation of Supply Chains", en: "Simulation of Supply Chains", zh: "供应链仿真" }, grade: { de: "gut", en: "good", zh: "良好" }, ects: 6 },
        { name: { de: "Simulation in Produktion und Logistik", en: "Simulation in Production and Logistics", zh: "生产与物流仿真" }, grade: { de: "sehr gut", en: "very good", zh: "优秀" }, ects: 6 },
        { name: { de: "Methoden des Reliability Engineering", en: "Reliability Engineering Methods", zh: "可靠性工程方法" }, grade: { de: "sehr gut", en: "very good", zh: "优秀" }, ects: 4 },
        { name: { de: "Automatisierung der Fertigung", en: "Manufacturing Automation", zh: "制造自动化" }, grade: { de: "gut", en: "good", zh: "良好" }, ects: 4 }
      ],
      thesis: {
        title: "Uncertainty Estimation for Multi-Label Neural Networks in Additive Manufacturing",
        grade: { de: "gut", en: "good", zh: "良好" },
        story: "master-thesis-uncertainty"
      },
      skills: ["python", "ml", "uncertainty"],
      stories: ["master-thesis-uncertainty"],
      evidence: ["doc-masterzeugnis", "doc-masterurkunde"],
      sources: ["M01", "M06", "M07e", "M07f"]
    },
    {
      id: "ceut-bachelor",
      short: { de: "B.Eng. Chengdu", en: "B.Eng. Chengdu", zh: "成都本科" },
      institution: { de: "Chengdu Example University of Technology", en: "Chengdu Example University of Technology", zh: "成都示例理工大学" },
      studyType: { de: "Bachelor of Engineering", en: "Bachelor of Engineering", zh: "工学学士" },
      area: { de: "Industrial Engineering", en: "Industrial Engineering", zh: "工业工程" },
      startDate: "2014-09",
      endDate: "2018-06",
      honors: [
        { de: "Ausgezeichnete Bachelorarbeit", en: "Award-winning bachelor thesis", zh: "优秀毕业论文" },
        { de: "Stipendium 2. Klasse", en: "Merit scholarship", zh: "二等奖学金" },
        { de: "Stellvertretende Leiterin im Studierendenrat", en: "Deputy head of the student council", zh: "学生会副主席" }
      ],
      skills: [],
      sources: ["M01"]
    }
  ],

  projects: [],

  journey: [
    { name: "CEUT Chengdu", place: { de: "Chengdu", en: "Chengdu", zh: "Chengdu" }, years: "2014–2018", label: { de: "B.Eng.", en: "B.Eng.", zh: "本科" } },
    { name: "TU Musterstadt", place: { de: "Musterstadt", en: "Musterstadt", zh: "Musterstadt" }, years: "2020–2022", label: { de: "M.Sc.", en: "M.Sc.", zh: "硕士" } },
    { name: "TH Beispielburg", place: { de: "Beispielburg", en: "Beispielburg", zh: "Beispielburg" }, years: "2023–2025", label: { de: "Forschung", en: "Research", zh: "科研" } },
    { name: "Beispiel AI", place: { de: "München", en: "Munich", zh: "慕尼黑" }, years: "2025–", label: { de: "AI Engineer", en: "AI Engineer", zh: "AI 工程师" } }
  ],

  milestones: [
    { date: "2018-06", title: { de: "B.Eng. abgeschlossen", en: "Finished B.Eng.", zh: "本科毕业" } },
    { date: "2020-10", title: { de: "M.Sc. an der TU Musterstadt begonnen", en: "Started M.Sc. at TU Musterstadt", zh: "开始在 TU Musterstadt 读硕士" } },
    { date: "2022-09", title: { de: "Master abgeschlossen (Note 1,8)", en: "Finished master's (grade 1.8)", zh: "硕士毕业（成绩 1.8）" }, story: "master-thesis-uncertainty" },
    { date: "2023-01", title: { de: "Wissenschaftliche Mitarbeiterin an der TH Beispielburg", en: "Research associate at TH Beispielburg", zh: "加入 TH Beispielburg 做科研助理" } },
    { date: "2024-08", title: { de: "Konferenzpublikation: ICEM 2024, Bari", en: "Conference paper: ICEM 2024, Bari", zh: "会议论文：ICEM 2024 · 巴里" } },
    { date: "2025-04", title: { de: "Founding AI Engineer bei Beispiel AI", en: "Founding AI Engineer at Beispiel AI", zh: "加入 Beispiel AI 任创始 AI 工程师" }, story: "agent-platform" },
    { date: "2025-09", title: { de: "1. Platz beim Cloud Agent Hackathon München", en: "1st place at Cloud Agent Hackathon Munich", zh: "慕尼黑 Cloud Agent 黑客松第一名" }, story: "hackathon-sales-copilot" },
    { date: "2026", title: { de: "Best Paper Award der Beispiel-Automatisierung 73", en: "Best Paper Award, Beispiel-Automatisierung 73", zh: "最佳论文奖，Beispiel-Automatisierung 73 卷" }, story: "graphpipe-dsl" }
  ],

  stories: [
    {
      id: "agent-platform",
      parent: "beispiel-ai",
      kind: "work",
      featured: true,
      title: {
        de: "Eine Agenten-Plattform von 0 auf 1 – jede Änderung gegen 50 Testfälle",
        en: "An agent platform from 0 to 1 – every change tested against 50 cases",
        zh: "从 0 到 1 搭智能体平台——每次改动跑 50 个测试用例"
      },
      standfirst: {
        de: "In einem Seed-Start-up die agentische KI-Produktlinie aufgebaut: Orchestrierung, RAG und eine Evaluierung, der man vertrauen kann.",
        en: "Built the agentic AI product line in a seed startup: orchestration, RAG, and an evaluation harness you can trust.",
        zh: "在种子期创业公司搭建智能体 AI 产品线：编排、RAG，以及一套值得信赖的评估体系。"
      },
      role: { de: "Founding AI Engineer", en: "Founding AI Engineer", zh: "创始 AI 工程师" },
      period: { start: "2025-04" },
      problem: {
        de: "Ein Seed-Start-up wollte eine Produktlinie rund um KI-Agenten aufbauen – ohne bestehende Plattform und ohne etablierte Evaluierungsprozesse.",
        en: "A seed startup wanted to build a product line around AI agents – with no existing platform and no established evaluation process.",
        zh: "种子期创业公司要从零建立智能体产品线——没有现成平台，也没有成熟的评估流程。"
      },
      actions: [
        {
          de: "Multi-Agent-Orchestrierung entworfen und umgesetzt (Orchestrator + spezialisierte Agenten)",
          en: "Designed and built multi-agent orchestration (orchestrator + specialised agents)",
          zh: "设计并实现多智能体编排（编排器 + 专业智能体）"
        },
        {
          de: "RAG über Kundendokumente aufgebaut und Tools an CRM-Systeme angebunden",
          en: "Built RAG over customer documents and connected tools to CRM systems",
          zh: "搭建客户文档 RAG，接入 CRM 系统工具"
        },
        {
          de: "Evaluierung und Regressionstests eingeführt: jede Änderung läuft gegen 50 Testfälle",
          en: "Introduced evaluation and regression testing: every change runs against 50 test cases",
          zh: "引入评估与回归测试：每次改动都跑 50 个测试用例"
        },
        {
          de: "Infrastruktur mit Azure, Bicep, Docker und CI/CD aufgesetzt",
          en: "Set up infrastructure with Azure, Bicep, Docker and CI/CD",
          zh: "用 Azure、Bicep、Docker 和 CI/CD 搭建基础设施"
        }
      ],
      outcome: {
        de: "Die Produktlinie ist von 0 auf 1 gegangen und wird von Kunden täglich genutzt.",
        en: "The product line went from 0 to 1 and is used by customers every day.",
        zh: "产品线从 0 到 1 走通，客户每天都在使用。"
      },
      metrics: [
        { value: "50", label: { de: "Testfälle pro Änderung", en: "test cases per change", zh: "每次改动的测试用例" }, sources: ["M01", "M04", "M12"] },
        { value: "0 → 1", label: { de: "Produktlinie", en: "product line", zh: "产品线" }, sources: ["M01"] }
      ],
      media: [
        {
          src: "assets/img/agent-architecture.png",
          type: "image",
          alt: { de: "Skizze der Multi-Agent-Architektur (Illustration)", en: "Multi-agent architecture sketch (illustration)", zh: "多智能体架构示意图（插图）" },
          caption: { de: "Skizze: Orchestrator, spezialisierte Agenten und Evaluierung", en: "Sketch: orchestrator, specialised agents and evaluation", zh: "示意图：编排器、专业智能体与评估" }
        },
        {
          src: "assets/img/first-day-beispiel-ai.png",
          type: "image",
          alt: { de: "Illustration: erster Tag bei Beispiel AI", en: "Illustration: first day at Beispiel AI", zh: "插图：在 Beispiel AI 的第一天" },
          caption: { de: "Illustration (Muster-Szene)", en: "Illustration (sample scene)", zh: "插图（示例场景）" }
        }
      ],
      skills: ["python", "typescript", "agents", "rag", "eval", "azure", "docker", "ci-cd"],
      quotes: ["quote-mustermann"],
      sources: ["M01", "M03", "M04", "M12"]
    },
    {
      id: "master-thesis-uncertainty",
      parent: "tum-master",
      kind: "thesis",
      featured: true,
      title: {
        de: "Kalibrierungsfehler von 0,142 auf 0,041 gesenkt – Unsicherheit von KI-Modellen messbar machen",
        en: "Cutting calibration error from 0.142 to 0.041 – making AI model uncertainty measurable",
        zh: "把校准误差从 0.142 降到 0.041——让模型的不确定性可测量"
      },
      standfirst: {
        de: "Masterarbeit: Unsicherheitsschätzung für Multi-Label-Klassifikation in der additiven Fertigung.",
        en: "Master's thesis: uncertainty estimation for multi-label classification in additive manufacturing.",
        zh: "硕士论文：增材制造中多标签分类的不确定性估计。"
      },
      role: { de: "Masterarbeit", en: "Master's thesis", zh: "硕士论文" },
      period: { date: "2022-09" },
      problem: {
        de: "Neuronale Netze sind oft übermäßig selbstsicher – ihren Vorhersagen ist in der Produktion schwer zu vertrauen. Für Multi-Label-Klassifikation, wie sie in der industriellen Qualitätsprüfung üblich ist, gab es kaum Forschung zur Unsicherheitsschätzung.",
        en: "Neural networks tend to be overconfident, which makes their predictions hard to trust in production. Uncertainty estimation for multi-label classification – common in industrial quality inspection – had rarely been studied.",
        zh: "神经网络往往过度自信，其预测在生产中难以被信任。而工业质检中常见的多标签分类，其不确定性估计却几乎没有研究。"
      },
      actions: [
        {
          de: "Bestehende Verfahren zur Unsicherheitsschätzung klassifiziert und drei repräsentative ausgewählt",
          en: "Classified existing uncertainty estimation methods and selected three representative ones",
          zh: "梳理并分类现有不确定性估计方法，选出三种代表方法"
        },
        {
          de: "Temperature Scaling, Monte-Carlo-Dropout und last-layer Bayesian auf einem Multi-Label-Netz implementiert",
          en: "Implemented temperature scaling, Monte Carlo dropout and a last-layer Bayesian approach on a multi-label network",
          zh: "在基线多标签网络上实现 temperature scaling、Monte-Carlo Dropout 和 last-layer Bayesian"
        },
        {
          de: "Fallstudie mit 18.000 3D-gedruckten Bauteilen und sechs Defektlabels durchgeführt",
          en: "Ran a case study with 18,000 3D-printed parts and six defect labels",
          zh: "完成 18,000 个 3D 打印件、6 类缺陷标签的案例研究"
        },
        {
          de: "Verfahren aus acht Perspektiven verglichen (von Kalibrierungsqualität bis Implementierungsaufwand)",
          en: "Compared the methods from eight perspectives, from calibration quality to implementation effort",
          zh: "从 8 个视角比较各方法（从校准质量到实现成本）"
        }
      ],
      outcome: {
        de: "Die last-layer-Bayes-Methode senkte den Expected Calibration Error von 0,142 auf 0,041 – bei weniger als 5 % zusätzlicher Rechenzeit. Die Arbeit bietet Praktikern einen Leitfaden zur Methodenauswahl. (Note: gut)",
        en: "The last-layer Bayesian approach reduced the expected calibration error from 0.142 to 0.041 while adding less than 5 % inference time – and gives practitioners a guide for choosing a method. (Grade: good)",
        zh: "last-layer Bayesian 方法把期望校准误差从 0.142 降到 0.041，推理时间只增加不到 5%；论文还给出面向实践的方法选型指南。（成绩：良好）"
      },
      metrics: [
        { value: { de: "0,142 → 0,041", en: "0.142 → 0.041", zh: "0.142 → 0.041" }, label: { de: "Expected Calibration Error", en: "expected calibration error", zh: "期望校准误差" }, sources: ["M06"] },
        { value: "18.000", label: { de: "3D-gedruckte Bauteile", en: "3D-printed parts", zh: "个 3D 打印件" }, sources: ["M06"] },
        { value: "<5 %", label: { de: "zusätzliche Rechenzeit", en: "added inference time", zh: "额外推理时间" }, sources: ["M06"] }
      ],
      skills: ["python", "ml", "uncertainty"],
      evidence: ["doc-masterzeugnis"],
      sources: ["M06", "M07f"]
    },
    {
      id: "hackathon-sales-copilot",
      parent: "beispiel-ai",
      kind: "competition",
      featured: true,
      title: {
        de: "Cloud Agent Hackathon München: Platz 1 mit dem Team „Agentic Sales Copilot“",
        en: "Cloud Agent Hackathon Munich: 1st place with the team “Agentic Sales Copilot”",
        zh: "慕尼黑 Cloud Agent 黑客松：团队“Agentic Sales Copilot”拿下第一名"
      },
      standfirst: {
        de: "Ein Agent, der Vertriebsteams im Tagesgeschäft unterstützt – in kurzer Zeit von der Idee zum lauffähigen Copilot.",
        en: "An agent that supports sales teams in daily work – from idea to working copilot in no time.",
        zh: "一个服务销售团队的智能体——从想法到可用的 Copilot，一气呵成。"
      },
      role: { de: "Teammitglied · Agent-Entwicklung", en: "Team member · agent development", zh: "团队成员 · 智能体开发" },
      period: { date: "2025-09" },
      problem: {
        de: "Beim Cloud Agent Hackathon München (Example Cloud Services, September 2025) galt es, in kurzer Zeit einen nützlichen KI-Agenten zu bauen.",
        en: "At the Cloud Agent Hackathon Munich (Example Cloud Services, September 2025), the challenge was to build a useful AI agent quickly.",
        zh: "2025 年 9 月 Example Cloud Services 举办的慕尼黑 Cloud Agent 黑客松，要求快速做出一个有用的 AI 智能体。"
      },
      actions: [
        {
          de: "Mit dem Team den „Agentic Sales Copilot“ entwickelt – einen Agenten für den Vertriebsalltag",
          en: "Built the “Agentic Sales Copilot” with the team – an agent for daily sales work",
          zh: "与团队开发“Agentic Sales Copilot”——一个面向日常销售的智能体"
        }
      ],
      outcome: {
        de: "1. Platz von allen teilnehmenden Teams (Urkunde vom 13.09.2025).",
        en: "1st place among all participating teams (certificate dated 13 Sep 2025).",
        zh: "在所有参赛团队中获第一名（证书日期 2025-09-13）。"
      },
      metrics: [
        { value: "1. Platz", label: { de: "Cloud Agent Hackathon München 2025", en: "Cloud Agent Hackathon Munich 2025", zh: "慕尼黑 Cloud Agent 黑客松 2025" }, sources: ["M07a"] }
      ],
      media: [
        {
          src: "assets/img/hackathon-munich-2025.png",
          type: "image",
          alt: { de: "Illustration der Preisverleihung, 1. Platz", en: "Illustration of the award ceremony, 1st place", zh: "颁奖场景插图，第一名" },
          caption: { de: "Illustration (Muster-Szene)", en: "Illustration (sample scene)", zh: "插图（示例场景）" }
        }
      ],
      skills: ["agents", "rag"],
      evidence: ["doc-hackathon-certificate"],
      sources: ["M01", "M07a", "M10"]
    },
    {
      id: "graphpipe-dsl",
      parent: "th-beispielburg",
      kind: "research",
      featured: false,
      title: {
        de: "GraphPipe: eine grafische Sprache für Datenpipelines – vom Entwurf zum Best Paper",
        en: "GraphPipe: a graphical language for data pipelines – from design to Best Paper",
        zh: "GraphPipe：给数据管道画图的语言——从设计到最佳论文"
      },
      standfirst: {
        de: "Eine domänenspezifische Sprache, die Datenpipelines in Produktionsanlagen modellierbar macht.",
        en: "A domain-specific language that makes data pipelines in production systems modelable.",
        zh: "一门让生产系统数据管道可建模的领域特定语言。"
      },
      role: { de: "Entwurf · Manuskript · technische Umsetzung", en: "Design · manuscript · core implementation", zh: "设计 · 手稿 · 核心技术实现" },
      period: { start: "2023-01", end: "2025-04" },
      problem: {
        de: "Datenpipelines in Produktionsanlagen waren nur schwer zu beschreiben und zu warten – es fehlte eine grafische, für Ingenieure verständliche Notation.",
        en: "Data pipelines in production systems were hard to describe and maintain – there was no graphical notation engineers could easily understand.",
        zh: "生产系统的数据管道难以描述和维护——缺少工程师一眼能懂的图形化表示。"
      },
      actions: [
        {
          de: "Grafische Modellierungssprache für Datenpipelines entworfen (DSL)",
          en: "Designed a graphical modelling language (DSL) for data pipelines",
          zh: "设计数据管道图形化建模语言（DSL）"
        },
        {
          de: "Manuskript und wesentliche technische Umsetzung der Veröffentlichung verantwortet",
          en: "Led the manuscript and the core technical implementation of the publication",
          zh: "负责论文手稿与核心技术实现"
        },
        {
          de: "Im Forschungsprojekt „FlexTwin“ mit Industriepartnern eingesetzt und weiterentwickelt",
          en: "Applied and developed it in the research project “FlexTwin” with industry partners",
          zh: "在“FlexTwin”研究项目中与工业伙伴一起应用和迭代"
        }
      ],
      outcome: {
        de: "Als „GraphPipe“ in Beispiel-Automatisierung 73(4) veröffentlicht und mit dem Best Paper Award ausgezeichnet.",
        en: "Published as “GraphPipe” in Beispiel-Automatisierung 73(4) and awarded the Best Paper Award.",
        zh: "以“GraphPipe”发表于 Beispiel-Automatisierung 73(4)，并获得最佳论文奖。"
      },
      metrics: [
        { value: "Best Paper Award", label: { de: "Beispiel-Automatisierung 73 (2025)", en: "Beispiel-Automatisierung 73 (2025)", zh: "Beispiel-Automatisierung 73 卷（2025）" }, sources: ["M01", "M03"] }
      ],
      skills: ["dsl", "python"],
      evidence: ["doc-zeugnis-th"],
      sources: ["M01", "M03", "M05", "M07b"]
    },
    {
      id: "teaching-200",
      parent: "th-beispielburg",
      kind: "work",
      featured: false,
      title: {
        de: "200+ Studierende, eine Übung: Endliche Automaten verständlich machen",
        en: "200+ students, one exercise session: making finite automata understandable",
        zh: "200+ 学生的习题课：把有限自动机讲明白"
      },
      standfirst: {
        de: "Die Übung zur Pflichtvorlesung „Grundlagen der Digitalisierung“ – auf Deutsch und Englisch.",
        en: "The exercise session of the required course “Fundamentals of Digitalisation” – in German and English.",
        zh: "必修课《数字化基础》的习题课——德语和英语双语授课。"
      },
      role: { de: "Übungsleiterin", en: "Exercise session instructor", zh: "习题课讲师" },
      period: { start: "2023-01", end: "2025-03" },
      problem: {
        de: "Die Pflichtvorlesung „Grundlagen der Digitalisierung“ hat über 200 Studierende, viele ohne Programmiererfahrung. Die Übung musste Konzepte wie endliche Automaten verständlich vermitteln.",
        en: "The required course “Fundamentals of Digitalisation” has over 200 students, many without programming experience. The exercise session had to make concepts like finite automata understandable.",
        zh: "必修课《数字化基础》有 200 多名学生，其中很多没有编程经验。习题课要把有限自动机这类概念讲得易懂。"
      },
      actions: [
        {
          de: "Übung zur Pflichtvorlesung auf Deutsch und Englisch durchgeführt",
          en: "Taught the exercise session of the required course in German and English",
          zh: "用德语和英语主持必修课习题课"
        },
        {
          de: "Komplexe Inhalte geduldig und verständlich erklärt (laut Lehrstuhl-Evaluation)",
          en: "Explained difficult concepts with patience and clarity (per the chair's evaluation)",
          zh: "耐心、清晰地讲解复杂概念（据讲席评价）"
        }
      ],
      outcome: {
        de: "Die Übungen wurden von den Studierenden sehr positiv bewertet.",
        en: "Student evaluations of the exercise sessions were consistently excellent.",
        zh: "学生评价一直非常出色。"
      },
      metrics: [
        { value: "200+", label: { de: "Studierende", en: "students", zh: "名学生" }, sources: ["M01", "M07b"] }
      ],
      media: [
        {
          src: "assets/img/teaching-lecture-hall.png",
          type: "image",
          alt: { de: "Illustration: Übung im Hörsaal, endliche Automaten", en: "Illustration: exercise session in a lecture hall, finite automata", zh: "插图：阶梯教室里的习题课，有限自动机" },
          caption: { de: "Illustration · Thema: Endliche Automaten", en: "Illustration · Topic: finite automata", zh: "插图 · 主题：有限自动机" }
        }
      ],
      skills: ["teaching"],
      quotes: ["quote-zeugnis-th-teaching"],
      sources: ["M01", "M05", "M07b", "M11"]
    },
    {
      id: "knusper-qms",
      parent: "knusper",
      kind: "work",
      featured: false,
      title: {
        de: "12 Papier-Checklisten wurden zu einer App",
        en: "12 paper checklists became one app",
        zh: "12 张纸质检查表变成了一款 App"
      },
      standfirst: {
        de: "Qualitätsmanagement in der Produktion: von analogen Listen zu digitalen Prüfungen.",
        en: "Quality management in production: from analogue checklists to digital inspections.",
        zh: "生产质量管理：从纸质清单到数字化检验。"
      },
      role: { de: "Werkstudentin Qualitätsmanagement", en: "Working Student, Quality Management", zh: "质量管理实习生" },
      period: { start: "2022-05", end: "2022-09" },
      problem: {
        de: "Hygiene- und Prüfchecklisten lagen auf Papier vor – Auswertung, Freigaben und Nachweise waren langsam und fehleranfällig.",
        en: "Hygiene and inspection checklists were on paper – reviews, approvals and records were slow and error-prone.",
        zh: "卫生与检验检查表都是纸质——审核、审批和留痕又慢又容易出错。"
      },
      actions: [
        {
          de: "Bestehende Papier-Checklisten analysiert und mit Power Apps 12 elektronische Formulare entwickelt",
          en: "Analysed the paper checklists and built 12 electronic forms with Power Apps",
          zh: "分析纸质检查表，用 Power Apps 开发 12 张电子表单"
        },
        {
          de: "Freigabe- und Eskalationsprozesse mit Power Automate automatisiert",
          en: "Automated approval and escalation processes with Power Automate",
          zh: "用 Power Automate 自动化审批与升级流程"
        },
        {
          de: "SharePoint-Struktur für Prüfdokumente aufgebaut und rund 30 Schichtleitungen geschult",
          en: "Set up a SharePoint structure for inspection documents and trained around 30 shift leaders",
          zh: "搭建 SharePoint 检验文档结构，培训约 30 名班组长"
        }
      ],
      outcome: {
        de: "Die Lösungen sind bis heute im Einsatz (laut Arbeitszeugnis der Knusper Snacks GmbH).",
        en: "The solutions are still in use today (per the reference from Knusper Snacks GmbH).",
        zh: "这些解决方案至今仍在投入使用（据 Knusper Snacks GmbH 工作证明）。"
      },
      metrics: [
        { value: "12", label: { de: "Checklisten ersetzt", en: "checklists replaced", zh: "张检查表被替代" }, sources: ["M07d"] },
        { value: "~30", label: { de: "geschulte Mitarbeitende", en: "staff trained", zh: "名员工接受培训" }, sources: ["M07d"] }
      ],
      media: [
        {
          src: "assets/img/qms-app-knusper.png",
          type: "image",
          alt: { de: "Hygiene-Checkliste in der App (Beispieldaten)", en: "Hygiene checklist in the app (sample data)", zh: "App 中的卫生检查表（示例数据）" },
          caption: { de: "App-Ansicht, Beispieldaten", en: "App view, sample data", zh: "App 界面，示例数据" }
        }
      ],
      skills: ["power-platform", "sharepoint", "low-code"],
      quotes: ["quote-knusper"],
      evidence: ["doc-zeugnis-knusper"],
      sources: ["M01", "M07d", "M15"]
    }
  ],

  skills: [
    { id: "python", name: "Python", category: "engineering", core: true, summary: { de: "Von der Masterarbeit bis zur Agenten-Plattform: Python ist die durchgehende Arbeitssprache.", en: "From the master's thesis to the agent platform: Python is my working language throughout.", zh: "从硕士论文到智能体平台：Python 贯穿始终。" } },
    { id: "typescript", name: "TypeScript", category: "engineering" },
    { id: "agents", name: { de: "LLM-Agenten", en: "LLM agents", zh: "LLM 智能体" }, category: "ai", core: true, summary: { de: "Multi-Agent-Orchestrierung in Forschung (TH Beispielburg) und Produkt (Beispiel AI).", en: "Multi-agent orchestration in research (TH Beispielburg) and product (Beispiel AI).", zh: "研究（TH Beispielburg）与产品（Beispiel AI）中做多智能体编排。" } },
    { id: "rag", name: "RAG", category: "ai", summary: { de: "RAG über Kundendokumente bei Beispiel AI.", en: "RAG over customer documents at Beispiel AI.", zh: "在 Beispiel AI 做客户文档 RAG。" } },
    { id: "eval", name: { de: "Evaluierung", en: "Evaluation", zh: "评估" }, category: "ai", core: true, summary: { de: "50-Testfall-Regressionstests für Agenten; Unsicherheitsquantifizierung in der Masterarbeit.", en: "50-case regression testing for agents; uncertainty quantification in my master's thesis.", zh: "智能体 50 用例回归测试；硕士论文中的不确定性量化。" } },
    { id: "ml", name: { de: "Maschinelles Lernen", en: "Machine Learning", zh: "机器学习" }, category: "ai" },
    { id: "uncertainty", name: { de: "Unsicherheitsquantifizierung", en: "Uncertainty quantification", zh: "不确定性量化" }, category: "research" },
    { id: "dsl", name: { de: "Domänenspezifische Sprachen", en: "Domain-specific languages", zh: "领域特定语言（DSL）" }, category: "research" },
    { id: "time-series", name: { de: "Zeitreihenanalyse", en: "Time series analysis", zh: "时间序列分析" }, category: "data" },
    { id: "azure", name: "Azure", category: "engineering" },
    { id: "docker", name: "Docker", category: "engineering" },
    { id: "ci-cd", name: "CI/CD", category: "engineering" },
    { id: "power-platform", name: "Power Platform", category: "tools" },
    { id: "sharepoint", name: "SharePoint", category: "tools" },
    { id: "low-code", name: { de: "Low-Code", en: "Low-code", zh: "低代码" }, category: "tools" },
    { id: "teaching", name: { de: "Lehre", en: "Teaching", zh: "教学" }, category: "other" }
  ],

  languages: [
    { language: { de: "Chinesisch", en: "Chinese", zh: "中文" }, cefr: "native", use: { de: "Muttersprache", en: "Native language", zh: "母语" } },
    { language: { de: "Deutsch", en: "German", zh: "德语" }, cefr: "C1", use: { de: "Arbeitssprache · verhandlungssicher (Selbsteinschätzung)", en: "Working language · fluent (self-assessed)", zh: "工作语言 · 流利（自评）" } },
    { language: { de: "Englisch", en: "English", zh: "英语" }, cefr: "C1", use: { de: "Arbeitssprache · verhandlungssicher (Selbsteinschätzung)", en: "Working language · fluent (self-assessed)", zh: "工作语言 · 流利（自评）" } }
  ],

  certificates: [],

  awards: [
    {
      id: "hackathon-1st",
      title: { de: "1. Platz, Cloud Agent Hackathon München", en: "1st place, Cloud Agent Hackathon Munich", zh: "慕尼黑 Cloud Agent 黑客松第一名" },
      awarder: "Example Cloud Services",
      date: "2025-09",
      summary: { de: "Team „Agentic Sales Copilot“ · 13.09.2025", en: "Team “Agentic Sales Copilot” · 13 Sep 2025", zh: "团队“Agentic Sales Copilot” · 2025-09-13" },
      story: "hackathon-sales-copilot",
      document: "doc-hackathon-certificate",
      sources: ["M07a"]
    },
    {
      id: "best-paper",
      title: { de: "Best Paper Award", en: "Best Paper Award", zh: "最佳论文奖" },
      awarder: "Beispiel-Automatisierung 73 (2025)",
      date: "2026",
      summary: { de: "Für den GraphPipe-Beitrag", en: "For the GraphPipe paper", zh: "授予 GraphPipe 论文" },
      story: "graphpipe-dsl",
      sources: ["M01", "M03"]
    },
    {
      id: "fbt-member",
      title: { de: "Mitglied im Fachausschuss 3.35 „Agenten in der Automatisierung“", en: "Member of technical committee 3.35 “Agents in Automation”", zh: "FBT 3.35“自动化中的智能体”专家委员会委员" },
      awarder: "Fachverband Beispieltechnik (FBT)",
      date: "2025-01",
      summary: { de: "Berufung für 2025–2027", en: "Appointed for 2025–2027", zh: "任期 2025–2027" },
      document: "doc-fbt-berufung",
      sources: ["M01", "M07c"]
    }
  ],

  publications: [
    {
      name: "GraphPipe – a graphical notation for modelling data pipeline deployment in production systems",
      publisher: { de: "Beispiel-Automatisierung 73(4)", en: "Beispiel-Automatisierung 73(4)", zh: "Beispiel-Automatisierung 73(4)" },
      releaseDate: "2025-04",
      authors: "Benbi Benbi, …",
      award: { de: "Best Paper Award", en: "Best Paper Award", zh: "最佳论文奖" },
      story: "graphpipe-dsl",
      sources: ["M03"]
    },
    {
      name: "Segmenting repetitive process time series with few labels",
      publisher: { de: "ICEM 2024, Bari", en: "ICEM 2024, Bari", zh: "ICEM 2024，巴里" },
      releaseDate: "2024-08",
      authors: "Benbi Benbi, …",
      sources: ["M03"]
    },
    {
      name: "Evolvable digital twins for flexible production systems",
      publisher: { de: "Journal of Example Operations Research", en: "Journal of Example Operations Research", zh: "Journal of Example Operations Research" },
      releaseDate: "2024-07",
      authors: "Benbi Benbi, …",
      sources: ["M03"]
    },
    {
      name: "ModelPlus – component properties in early design of automated production systems",
      publisher: { de: "Beispiel-Automatisierung", en: "Beispiel-Automatisierung", zh: "Beispiel-Automatisierung" },
      releaseDate: "2024-01",
      authors: "Benbi Benbi, …",
      sources: ["M03"]
    },
    {
      name: "Multi-requirement decision-making under uncertainty for intelligent manufacturing systems",
      publisher: { de: "ICEA 2023, Singapur", en: "ICEA 2023, Singapore", zh: "ICEA 2023，新加坡" },
      releaseDate: "2023-10",
      authors: "Benbi Benbi, …",
      sources: ["M03"]
    }
  ],

  quotes: [
    {
      id: "quote-mustermann",
      text: {
        de: "„Sie bleibt nicht bei einer überzeugenden Idee stehen; sie baut sie, testet sie und macht sie für andere nutzbar.“",
        en: "“She does not stop at a convincing idea; she builds it, tests it and makes it usable for others.”",
        zh: "“她不停留在令人信服的想法上：她会把它做出来、测出来，并让其他人也能用。”"
      },
      original: "en",
      author: "Prof. Dr.-Ing. Erika Mustermann",
      authorTitle: { de: "Lehrstuhlinhaberin, TH Beispielburg", en: "Chair, TH Beispielburg", zh: "TH Beispielburg 讲席教授" },
      document: "doc-recommendation",
      consent: "yes",
      sources: ["M05"]
    },
    {
      id: "quote-zeugnis-th",
      text: {
        de: "„Frau Benbi hat die ihr übertragenen Aufgaben stets zu unserer vollsten Zufriedenheit erledigt.“",
        en: "“Ms Benbi always completed her assigned tasks to our full satisfaction.”",
        zh: "“Benbi 女士始终以令我们完全满意的方式完成交给她的任务。”"
      },
      original: "de",
      author: "TH Beispielburg",
      authorTitle: { de: "Arbeitszeugnis", en: "Employer reference", zh: "工作证明" },
      document: "doc-zeugnis-th",
      consent: "not-needed",
      sources: ["M07b"]
    },
    {
      id: "quote-zeugnis-th-teaching",
      text: {
        de: "„Ihre Übungen wurden von den Studierenden sehr positiv bewertet; komplexe Inhalte vermittelte sie verständlich und geduldig.“",
        en: "“Her exercise sessions were rated very positively by the students; she explained complex content with clarity and patience.”",
        zh: "“她的习题课深受学生好评；讲解复杂内容清楚而有耐心。”"
      },
      original: "de",
      author: "TH Beispielburg",
      authorTitle: { de: "Arbeitszeugnis", en: "Employer reference", zh: "工作证明" },
      document: "doc-zeugnis-th",
      consent: "not-needed",
      sources: ["M07b"]
    },
    {
      id: "quote-knusper",
      text: {
        de: "„… setzte schon nach wenigen Wochen eigenständig Lösungen um, die bis heute im Einsatz sind.“",
        en: "“… already implemented solutions independently after a few weeks, which are still in use today.”",
        zh: "“……几周后就能独立交付解决方案，这些方案至今仍在投入使用。”"
      },
      original: "de",
      author: "Knusper Snacks GmbH",
      authorTitle: { de: "Arbeitszeugnis", en: "Employer reference", zh: "工作证明" },
      document: "doc-zeugnis-knusper",
      consent: "not-needed",
      sources: ["M07d"]
    }
  ],

  documents: [
    {
      id: "doc-zeugnis-th",
      material: "M07b",
      title: { de: "Arbeitszeugnis TH Beispielburg", en: "Employer reference, TH Beispielburg", zh: "TH Beispielburg 工作证明" },
      kind: "reference",
      date: "2025-03-31",
      visibility: "summary",
      summary: {
        de: "Qualifiziertes Arbeitszeugnis mit sehr guter Beurteilung; auszugsweise auf der Website zitiert.",
        en: "Qualified employer reference with a very good assessment; quoted in excerpts on this site.",
        zh: "带优等评价的工作证明；本网站仅引用片段。"
      },
      sources: ["M07b"]
    },
    {
      id: "doc-zeugnis-knusper",
      material: "M07d",
      title: { de: "Arbeitszeugnis Knusper Snacks GmbH", en: "Employer reference, Knusper Snacks GmbH", zh: "Knusper Snacks GmbH 实习证明" },
      kind: "reference",
      date: "2022-09-30",
      visibility: "summary",
      summary: {
        de: "Qualifiziertes Arbeitszeugnis; auszugsweise auf der Website zitiert.",
        en: "Qualified employer reference; quoted in excerpts on this site.",
        zh: "合格实习证明；本网站仅引用片段。"
      },
      sources: ["M07d"]
    },
    {
      id: "doc-recommendation",
      material: "M05",
      title: { de: "Empfehlungsschreiben Prof. Dr.-Ing. E. Mustermann", en: "Letter of recommendation, Prof. Dr.-Ing. E. Mustermann", zh: "Prof. Dr.-Ing. E. Mustermann 推荐信" },
      kind: "recommendation",
      date: "2025-04-15",
      visibility: "summary",
      summary: {
        de: "Empfehlung der Lehrstuhlinhaberin, mit Zustimmung der Autorin zitiert.",
        en: "Recommendation from the chair, quoted with the author's consent.",
        zh: "讲席教授推荐信，经作者同意后引用。"
      },
      sources: ["M05"]
    },
    {
      id: "doc-hackathon-certificate",
      material: "M07a",
      title: { de: "Urkunde: Cloud Agent Hackathon München, 1. Platz", en: "Certificate: Cloud Agent Hackathon Munich, 1st place", zh: "证书：慕尼黑 Cloud Agent 黑客松第一名" },
      kind: "certificate",
      date: "2025-09-13",
      visibility: "preview",
      preview: "assets/img/docs/hackathon-certificate-preview.png",
      thumbnail: "assets/img/docs/hackathon-certificate-thumb.png",
      sources: ["M07a"]
    },
    {
      id: "doc-fbt-berufung",
      material: "M07c",
      title: { de: "Urkunde zur Berufung: FBT-Fachausschuss 3.35", en: "Appointment certificate: FBT technical committee 3.35", zh: "任命证书：FBT 3.35 专家委员会" },
      kind: "award",
      date: "2025-01-01",
      visibility: "preview",
      preview: "assets/img/docs/fbt-berufung-preview.png",
      thumbnail: "assets/img/docs/fbt-berufung-thumb.png",
      sources: ["M07c"]
    },
    {
      id: "doc-masterurkunde",
      material: "M07e",
      title: { de: "Masterurkunde, TU Musterstadt", en: "Master's degree certificate, TU Musterstadt", zh: "硕士学位证书，TU Musterstadt" },
      kind: "degree",
      date: "2022-09-13",
      visibility: "on-request",
      summary: { de: "Auf Anfrage erhältlich.", en: "Available on request.", zh: "可按需提供。" },
      sources: ["M07e"]
    },
    {
      id: "doc-masterzeugnis",
      material: "M07f",
      title: { de: "Masterzeugnis (Notenspiegel), TU Musterstadt", en: "Master's transcript, TU Musterstadt", zh: "硕士成绩单，TU Musterstadt" },
      kind: "transcript",
      date: "2022-09-13",
      visibility: "on-request",
      summary: {
        de: "Gesamturteil „gut (1,84)“; auf Anfrage erhältlich.",
        en: "Overall grade “good (1.84)”; available on request.",
        zh: "总评“良好（1.84）”；可按需提供。"
      },
      sources: ["M07f"]
    }
  ],

  about: {
    text: {
      de: "Ich bin über die industrielle Automatisierung zur KI gekommen: Nach dem Wirtschaftsingenieur-Studium habe ich an der TH Beispielburg zwei Jahre lang erforscht, wie Software-Agenten Entscheidungen in der Fertigung unter Unsicherheit treffen. Heute baue ich bei Beispiel AI agentische KI-Produkte, die Kunden täglich nutzen.",
      en: "I came to AI through industrial automation: after my industrial engineering degree, I spent two years at TH Beispielburg researching how software agents make decisions under uncertainty in manufacturing. Today I build agentic AI products at Beispiel AI that customers use every day.",
      zh: "我是从工业自动化走进 AI 的：工业工程毕业后，我在 TH Beispielburg 研究了两年软件智能体如何在制造中做不确定性决策；现在在 Beispiel AI 打造客户每天都在使用的智能体 AI 产品。"
    },
    interests: [
      { de: "Klavier (Stufe 10)", en: "Piano (grade 10)", zh: "钢琴（业余十级）" },
      { de: "Basketball", en: "Basketball", zh: "篮球" },
      { de: "Barkeeping", en: "Barkeeping", zh: "养蜂（Barkeeping）" }
    ],
    sources: ["M01", "M04"]
  },

  contact: {
    cta: {
      de: "Ich freue mich auf Ihre Nachricht.",
      en: "I look forward to hearing from you.",
      zh: "期待你的来信。"
    },
    showEmail: true
  },

  ui: {}
};
