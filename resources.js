// Indigenous AI Commons — Resource Data
// To add a resource, copy one of the entries below and fill in your details.
// Fields:
//   id: unique lowercase string with hyphens
//   title: display name
//   url: full URL including https://
//   type: one of — paper, project, tool, community, framework, guide
//   category: one of — indigenous-built-ai, community-solutions, data-as-culture,
//              academic-research, global-resources, before-you-continue
//   description: 1–2 sentences, plain language
//   region: geographic context (optional but helpful)

const RESOURCES = [

  // ─── INDIGENOUS-BUILT AI ───────────────────────────────────────────────────

  {
    id: "temarama-ai",
    title: "Temarama AI",
    url: "https://temaramaai.com/",
    type: "project",
    category: "indigenous-built-ai",
    description: "An indigenous-led AI project centering Māori values, language, and sovereignty — built with data governance frameworks that keep community knowledge under community control.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "te-hiku-media",
    title: "Te Hiku Media",
    url: "https://tehiku.nz/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Māori-led broadcaster that built te reo Māori speech recognition AI with 92% accuracy. Governed by the Kaitiakitanga License — data is cared for, not owned. Any benefit flows back to the community.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "animikii",
    title: "Animikii Indigenous Technology",
    url: "https://animikii.com/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Indigenous-owned technology company building digital solutions for and with indigenous communities, grounded in indigenous values and self-determination.",
    region: "Canada"
  },
  {
    id: "nativebio",
    title: "NativeBio Data",
    url: "https://www.nativebio.org/",
    type: "project",
    category: "indigenous-built-ai",
    description: "The first indigenous-led genomic biorepository on sovereign Native American land (Cheyenne River Sioux Reservation) — centering tribal sovereignty and indigenous data governance in health and science research.",
    region: "United States"
  },
  {
    id: "microsoft-byol",
    title: "Microsoft BYOL — Bring Your Own Language Framework",
    url: "https://github.com/microsoft/byol",
    type: "tool",
    category: "indigenous-built-ai",
    description: "Open-source framework for adapting LLMs to low-resource languages including Inuktitut and Māori. MIT licensed — communities can run it on their own infrastructure. The code repository is currently a placeholder; no release date has been announced. Read Before You Continue before engaging with Microsoft partnership programs.",
    region: "Global"
  },
  {
    id: "semwise",
    title: "Semwise",
    url: "https://semwise.org/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Indigenous-focused technology organization developing tools and frameworks for community-controlled AI and data sovereignty.",
    region: "Global"
  },

  // ─── COMMUNITY SOLUTIONS ──────────────────────────────────────────────────

  {
    id: "fntc-ai",
    title: "First Nations Technology Council — AI Adoption Initiative",
    url: "https://www.technologycouncil.ca/research/digital-transformation-ai/",
    type: "community",
    category: "community-solutions",
    description: "Community-driven research and free AI resources for First Nations in BC — built from what communities actually said they need. Developing an open-source AI toolkit informed by indigenous knowledge systems.",
    region: "Canada"
  },
  {
    id: "cherokee-nation-ai",
    title: "Cherokee Nation AI Task Force",
    url: "https://indigenousinitiatives.ctlt.ubc.ca/2025/11/19/ai-reflections-indigenous-data-sovereignty-and-artificial-intelligence/",
    type: "community",
    category: "community-solutions",
    description: "The Cherokee Nation convened a task force on AI, data sovereignty, and cybersecurity grounded in Cherokee values. Chief Information Officer Paula Starr: 'AI must serve the collective good and uphold Cherokee values. If a tool compromises that, it doesn't belong in our Nation's systems.'",
    region: "United States"
  },
  {
    id: "wiring-the-rez",
    title: "Wiring the Rez — Tribal Nations and Digital Sovereignty",
    url: "https://law.asu.edu/newsroom/wiring-rez-tribal-nations-claim-their-digital-futures",
    type: "community",
    category: "community-solutions",
    description: "Annual conference where tribal leaders, legal experts, and community members develop policy and practice on digital sovereignty. 2026 theme: infrastructure is sovereignty in action — including AI infrastructure.",
    region: "United States"
  },
  {
    id: "tribal-digital-sovereignty-guidebook",
    title: "Tribal Digital Sovereignty Guidebook",
    url: "https://apps.law.asu.edu/FB/Tribal-Digital-Sovereignty-Guidebook-November-2025/",
    type: "guide",
    category: "community-solutions",
    description: "Practical guide for tribal nations on broadband, spectrum sovereignty, data governance, and AI — framing digital infrastructure as an instrument of self-determination, not dependency. From ASU's American Indian Policy Institute.",
    region: "United States"
  },
  {
    id: "niiwin-databack",
    title: "Niiwin — DataBack Fellowship",
    url: "https://niiwin.app/blog/the-databack-fellowship-for-organizations-ready-to-do-data-right",
    type: "community",
    category: "community-solutions",
    description: "Fellowship for organizations ready to return data to indigenous communities — a model of what accountability and data stewardship actually look like in practice.",
    region: "Canada"
  },
  {
    id: "conservation-metrics",
    title: "Conservation Metrics",
    url: "https://conservationmetrics.com/",
    type: "tool",
    category: "community-solutions",
    description: "Technology tools supporting indigenous and local communities in monitoring and stewarding their lands and waters — with community-controlled data and decision-making.",
    region: "Global"
  },

  // ─── DATA AS CULTURE ──────────────────────────────────────────────────────

  {
    id: "ict-data-as-land",
    title: "Treating Data Like Land: Data Sovereignty in the AI Age",
    url: "https://ictnews.org/news/treating-data-like-land-data-sovereignty-in-the-ai-age/",
    type: "paper",
    category: "data-as-culture",
    description: "Indigenous news analysis grounding data sovereignty in the relationship between land and identity. Data is not a commodity or a byproduct — it is a cultural resource with its own relationships and responsibilities.",
    region: "United States"
  },
  {
    id: "idia-decolonised-research",
    title: "IDIA — Decolonised Research Framework",
    url: "https://www.idia.nz/toolkit/decolonised-research-framework",
    type: "framework",
    category: "data-as-culture",
    description: "Framework from Indigenous Design and Innovation Aotearoa covering the full research lifecycle — from project inception through data storage — with Māori concepts like tapu and noa shaping how knowledge is organized and shared.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "idia-culture-centred-design",
    title: "IDIA — Culture Centred Design",
    url: "https://www.idia.nz/toolkit/culture-centred-design",
    type: "framework",
    category: "data-as-culture",
    description: "A design methodology that names human-centred design as colonizing and builds a genuine alternative. Not about making design accessible to indigenous peoples — about indigenous peoples building their own futures.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "niiwin-understanding-data",
    title: "Niiwin — Understanding Indigenous Data",
    url: "https://niiwin.app/blog/understanding-indigenous-data-what-are-data",
    type: "guide",
    category: "data-as-culture",
    description: "Accessible explanation of what indigenous data actually is — not just numbers or records, but relationships, living knowledge, and collective identity.",
    region: "Canada"
  },
  {
    id: "ardc-indigenous-data",
    title: "ARDC — Indigenous Data Resources",
    url: "https://ardc.edu.au/resource/indigenous-data/",
    type: "guide",
    category: "data-as-culture",
    description: "Australian Research Data Commons resources on indigenous data sovereignty — governance frameworks and community rights over research data.",
    region: "Australia"
  },
  {
    id: "idnau",
    title: "Indigenous Data Network Australia",
    url: "https://idnau.org/resources",
    type: "community",
    category: "data-as-culture",
    description: "Australian network building indigenous data sovereignty capacity — connecting researchers, communities, and policymakers around the principle of community-controlled data governance.",
    region: "Australia"
  },

  // ─── ACADEMIC RESEARCH ────────────────────────────────────────────────────

  {
    id: "indigenous-protocol-ai-2020",
    title: "Indigenous Protocol and Artificial Intelligence — Position Paper",
    url: "https://spectrum.library.concordia.ca/id/eprint/986506/7/Indigenous_Protocol_and_AI_2020.pdf",
    type: "paper",
    category: "academic-research",
    description: "Foundational 2020 position paper from the Indigenous Protocol and AI Working Group — the first sustained indigenous-led engagement with AI as a site of governance, cultural responsibility, and epistemic sovereignty.",
    region: "Global"
  },
  {
    id: "maori-llm-report",
    title: "Te Taka — Māori LLM Report",
    url: "https://www.waikato.ac.nz/assets/Uploads/Research/Research-institutes-centres-and-groups/Entities/Te-Mata-Punenga-o-Te-Kotahi-Te-Kotahi-Research-Institute-TKRI/Maori-LLM-report-final-TeTaka.pdf",
    type: "paper",
    category: "academic-research",
    description: "University of Waikato research on what building a Māori LLM would actually require — from a Māori institution's perspective, centering language sovereignty and community consent throughout.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "byol-paper",
    title: "BYOL: Bring Your Own Language Into LLMs",
    url: "https://arxiv.org/abs/2601.10804",
    type: "paper",
    category: "academic-research",
    description: "Microsoft AI for Good Lab paper on adapting LLMs to low-resource languages including Inuktitut, Māori, and Chichewa. Read alongside Māori and indigenous-led perspectives on what 'low resource' means and who defines it.",
    region: "Global"
  },
  {
    id: "sshrc-abundant-intelligences",
    title: "SSHRC — Abundant Intelligences: Inclusive AI",
    url: "https://sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/stories-histoires/2023/inclusive_artificial_intelligence-intelligence_artificielle_inclusive-eng.aspx",
    type: "paper",
    category: "academic-research",
    description: "$22M indigenous-led research project at Concordia expanding AI's definition of intelligence to include indigenous knowledge systems. Jason Edward Lewis: 'We don't have an AI ethics problem, we have an AI epistemology problem.'",
    region: "Canada"
  },
  {
    id: "iapp-indigenous-privacy",
    title: "Data Repurposing, Algorithmic Bias and Indigenous Privacy in the Age of AI",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "academic-research",
    description: "Analysis of how First Nations data is collected for one purpose and repurposed for another without consent — including cases where the Crown has profited from selling indigenous data. Argues for collective information regimes under indigenous governance.",
    region: "Canada"
  },
  {
    id: "sagepub-paper",
    title: "Indigenous Data Sovereignty: A Catalyst for Ethical AI in Business",
    url: "https://journals.sagepub.com/doi/10.1177/20539517251349170",
    type: "paper",
    category: "academic-research",
    description: "Peer-reviewed analysis of indigenous data sovereignty as a framework for resisting digital colonialism — examining how extractive AI practices reproduce the same logic as colonial resource extraction.",
    region: "Global"
  },
  {
    id: "the-conversation-ai",
    title: "AI Affects Everyone, Including Indigenous People — It's Time We Have a Say",
    url: "https://theconversation.com/ai-affects-everyone-including-indigenous-people-its-time-we-have-a-say-in-how-its-built-239605",
    type: "paper",
    category: "academic-research",
    description: "Accessible academic argument for meaningful indigenous participation in AI development — not consultation after decisions are made, but decision-making authority from the beginning.",
    region: "Global"
  },
  {
    id: "techreg-paper",
    title: "TechReg — Indigenous Data and Technology Regulation",
    url: "https://techreg.org/article/view/19593",
    type: "paper",
    category: "academic-research",
    description: "Academic analysis of indigenous data sovereignty within technology regulation frameworks — examining the gaps between existing law and the rights communities actually hold.",
    region: "Global"
  },

  // ─── GLOBAL RESOURCES ─────────────────────────────────────────────────────

  {
    id: "ohchr-sovereignty-ai",
    title: "OHCHR — Indigenous Sovereignty in the AI Era",
    url: "https://www.ohchr.org/en/stories/2025/08/indigenous-sovereignty-ai-era",
    type: "guide",
    category: "global-resources",
    description: "UN Human Rights coverage of indigenous perspectives from the 2025 Expert Mechanism session. Rusty Pickens (Chickasaw Nation): 'Data is one more of those extracted resources. For Indigenous Peoples, that's our culture, our language, our artwork — it's deeply personal.'",
    region: "Global"
  },
  {
    id: "un-desa-indigenous-ai",
    title: "UN DESA — Ensuring Indigenous Peoples' Rights in the Age of AI",
    url: "https://www.un.org/en/desa/ensuring-indigenous-peoples%E2%80%99-rights-age-ai",
    type: "guide",
    category: "global-resources",
    description: "United Nations Department of Economic and Social Affairs guidance on indigenous peoples' rights in AI development, grounded in UNDRIP and the principle of free, prior, and informed consent.",
    region: "Global"
  },
  {
    id: "unesco-indigenous-ai",
    title: "UNESCO — Indigenous Data Sovereignty and AI Developments",
    url: "https://www.unesco.org/ethics-ai/en/articles/new-report-and-guidelines-indigenous-data-sovereignty-artificial-intelligence-developments",
    type: "guide",
    category: "global-resources",
    description: "UNESCO report and guidelines for culturally sensitive AI development with indigenous communities in Latin America and the Caribbean — centering self-determination and consent throughout.",
    region: "Latin America & Caribbean"
  },
  {
    id: "cgdev-ai-languages",
    title: "CGDev — A Roadmap: AI Speaks the World's Languages",
    url: "https://www.cgdev.org/blog/roadmap-ai-speaks-worlds-languages",
    type: "guide",
    category: "global-resources",
    description: "Policy analysis of what genuine linguistic inclusion in AI would require — including the structural and governance changes beyond technical solutions.",
    region: "Global"
  },
  {
    id: "brookings-digital-divide",
    title: "Brookings — Avoiding the Next Digital Divide: Tribal Digital Sovereignty and AI",
    url: "https://www.brookings.edu/articles/avoiding-the-next-digital-divide-defining-digital-sovereignty-for-tribal-nations-in-the-ai-age/",
    type: "paper",
    category: "global-resources",
    description: "Policy analysis of how AI infrastructure investment risks replicating past patterns of exclusion for tribal nations — and what equitable participation in the AI era actually requires.",
    region: "United States"
  },
  {
    id: "radical-ai-indigenous",
    title: "Radical AI — Indigenous AI",
    url: "https://www.radicalai.org/indigenous-ai",
    type: "guide",
    category: "global-resources",
    description: "Curated collection of resources connecting AI discourse with indigenous rights, sovereignty, and social justice frameworks from a critical perspective.",
    region: "Global"
  },
  {
    id: "mila-quebec",
    title: "Mila — Quebec AI Institute",
    url: "https://mila.quebec/en",
    type: "project",
    category: "global-resources",
    description: "Partner in the Abundant Intelligences research project, bringing indigenous knowledge systems into engagement with AI research at one of the world's leading AI institutes.",
    region: "Canada"
  },
  {
    id: "policyoptions-ai",
    title: "Policy Options — AI and Indigenous Data",
    url: "https://policyoptions.irpp.org/2025/05/ai-indigenous-data/",
    type: "paper",
    category: "global-resources",
    description: "Analysis of the policy landscape around AI and indigenous data in Canada — what protections currently exist, what gaps remain, and what communities should understand before engaging with government AI programs.",
    region: "Canada"
  },

  // ─── BEFORE YOU CONTINUE ──────────────────────────────────────────────────

  {
    id: "kaitiakitanga-license",
    title: "Te Hiku Media — Kaitiakitanga License",
    url: "https://tehiku.nz/",
    type: "framework",
    category: "before-you-continue",
    description: "A data license built on the Māori principle of guardianship: data is cared for, not owned. Any benefit derived flows back to the source community. A model for what genuine consent and community benefit look like in AI partnerships.",
    region: "Aotearoa New Zealand"
  },
  {
    id: "ada-ai-guidance",
    title: "ADA.gov — AI Guidance for Disability Rights",
    url: "https://www.ada.gov/resources/ai-guidance/",
    type: "guide",
    category: "before-you-continue",
    description: "Federal guidance on how AI systems must comply with the Americans with Disabilities Act. Relevant for any community deploying AI in services — and a reminder that legal protections exist even when they are not enforced.",
    region: "United States"
  },
  {
    id: "gitguardian-chatgpt",
    title: "GitGuardian — What Happens to Your Data in ChatGPT",
    url: "https://blog.gitguardian.com/chatgpt-security-concern/",
    type: "guide",
    category: "before-you-continue",
    description: "Practical breakdown of ChatGPT's data practices — what gets stored, how inputs can be used for training, and what that means before you share anything sensitive about your community.",
    region: "Global"
  },
  {
    id: "gitguardian-copilot",
    title: "GitGuardian — GitHub Copilot Security and Privacy",
    url: "https://blog.gitguardian.com/github-copilot-security-and-privacy/",
    type: "guide",
    category: "before-you-continue",
    description: "Security analysis of GitHub Copilot's data practices — what code and data it accesses, what leaves your environment, and what questions to ask before using it on community projects.",
    region: "Global"
  },
  {
    id: "iapp-data-repurposing",
    title: "IAPP — Data Repurposing and Indigenous Privacy",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "before-you-continue",
    description: "What happens when data collected for one purpose is used for another? For First Nations, this is not hypothetical — the Crown has repurposed and sold indigenous data without consent. Know the pattern before agreeing to any data collection.",
    region: "Canada"
  }

];
