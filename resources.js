// Indigenous AI Commons — Resource Data

const RESOURCES = [

  // INDIGENOUS-BUILT AI

  {
    id: "temarama-ai",
    title: "Temarama AI",
    url: "https://temaramaai.com/",
    type: "project",
    category: "indigenous-built-ai",
    description: "An Indigenous-led AI project centering Māori values, language, and sovereignty, built with data governance frameworks that keep community knowledge under community control.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "te-hiku-media",
    title: "Te Hiku Media",
    url: "https://tehiku.nz/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Māori-led broadcaster that built te reo Māori speech recognition AI with 92% accuracy. Governed by the Kaitiakitanga License: data is cared for, not owned. Any benefit flows back to the community.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "animikii",
    title: "Animikii Indigenous Technology",
    url: "https://animikii.com/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Indigenous-owned technology company building digital solutions for and with Indigenous communities, grounded in Indigenous values and self-determination.",
    region: "Canada",
    published: true
  },
  {
    id: "nativebio",
    title: "NativeBio Data",
    url: "https://www.nativebio.org/",
    type: "project",
    category: "indigenous-built-ai",
    description: "The first Indigenous-led genomic biorepository on sovereign Native American land (Cheyenne River Sioux Reservation), centering tribal sovereignty and Indigenous data governance in health and science research.",
    region: "United States",
    published: true
  },
  {
    id: "semwise",
    title: "Semwise",
    url: "https://semwise.org/",
    type: "project",
    category: "indigenous-built-ai",
    description: "Indigenous-focused technology organization developing tools and frameworks for community-controlled AI and data sovereignty.",
    region: "Global",
    published: true
  },

  // COMMUNITY SOLUTIONS

  {
    id: "fntc-ai",
    title: "First Nations Technology Council — AI Adoption Initiative",
    url: "https://www.technologycouncil.ca/research/digital-transformation-ai/",
    type: "community",
    category: "community-solutions",
    description: "Community-driven research and free AI resources for First Nations in BC, built from what communities said they need. Developing an open-source AI toolkit informed by Indigenous knowledge systems.",
    region: "Canada",
    published: true
  },
  {
    id: "cherokee-nation-ai",
    title: "Cherokee Nation AI Task Force",
    url: "https://www.cherokee.org/all-services/tribal-technology/",
    type: "community",
    category: "community-solutions",
    description: "The Cherokee Nation established an AI task force and governance committees to evaluate AI against Cherokee values before adoption. Companies must complete an AI questionnaire before working with the Nation. Data literacy programs extend these protections community-wide.",
    region: "United States",
    published: true
  },
  {
    id: "wiring-the-rez",
    title: "Wiring the Rez — Tribal Nations and Digital Sovereignty",
    url: "https://law.asu.edu/newsroom/wiring-rez-tribal-nations-claim-their-digital-futures",
    type: "community",
    category: "community-solutions",
    description: "Annual conference where tribal leaders, legal experts, and community members develop policy and practice on digital sovereignty. 2026 theme: infrastructure is sovereignty in action, including AI infrastructure.",
    region: "United States",
    published: true
  },
  {
    id: "tribal-digital-sovereignty-guidebook",
    title: "Tribal Digital Sovereignty Guidebook",
    url: "https://apps.law.asu.edu/FB/Tribal-Digital-Sovereignty-Guidebook-November-2025/",
    type: "guide",
    category: "community-solutions",
    description: "Practical guide for tribal nations on broadband, spectrum sovereignty, data governance, and AI, framing digital infrastructure as an instrument of self-determination. From ASU's American Indian Policy Institute.",
    region: "United States",
    published: true
  },
  {
    id: "niiwin-databack",
    title: "Niiwin — DataBack Fellowship",
    url: "https://niiwin.app/blog/the-databack-fellowship-for-organizations-ready-to-do-data-right",
    type: "community",
    category: "community-solutions",
    description: "Fellowship for organizations ready to return data to Indigenous communities. A model of what accountability and data stewardship actually look like in practice.",
    region: "Canada",
    published: true
  },
  {
    id: "aipi-tribal-sovereignty",
    title: "ASU AIPI — Proactive Solutions for Tribal Digital Sovereignty",
    url: "https://aipi.asu.edu/blog/2026/02/proactive-solutions-implementing-tribal-digital-sovereignty",
    type: "guide",
    category: "community-solutions",
    description: "From Arizona State University's American Indian Policy Institute, a 2026 analysis of implementation strategies tribal nations are using to assert digital sovereignty, covering governance structures, data policies, and AI decision frameworks.",
    region: "United States",
    published: true
  },
  {
    id: "conservation-metrics",
    title: "Conservation Metrics",
    url: "https://conservationmetrics.com/",
    type: "tool",
    category: "community-solutions",
    description: "Technology tools supporting Indigenous and local communities in monitoring and stewarding their lands and waters, with community-controlled data and decision-making.",
    region: "Global",
    published: true
  },

  // DATA AS CULTURE

  {
    id: "ict-data-as-land",
    title: "Treating Data Like Land: Data Sovereignty in the AI Age",
    url: "https://ictnews.org/news/treating-data-like-land-data-sovereignty-in-the-ai-age/",
    type: "paper",
    category: "data-as-culture",
    description: "Indigenous news analysis grounding data sovereignty in the relationship between land and identity. Data is a cultural resource with its own relationships and responsibilities.",
    region: "United States",
    published: true
  },
  {
    id: "local-contexts",
    title: "Local Contexts",
    url: "https://localcontexts.org/",
    type: "framework",
    category: "data-as-culture",
    description: "A global framework of Traditional Knowledge (TK) and Biocultural (BC) Labels and Notices that lets Indigenous communities define cultural protocols for their data, collections, and knowledge. Used in archives, museums, and research platforms worldwide.",
    region: "Global",
    published: true
  },
  {
    id: "idia-decolonised-research",
    title: "IDIA — Decolonised Research Framework",
    url: "https://www.idia.nz/toolkit/decolonised-research-framework",
    type: "framework",
    category: "data-as-culture",
    description: "Framework from Indigenous Design and Innovation Aotearoa covering the full research lifecycle, from project inception through data storage, with Māori concepts like tapu and noa shaping how knowledge is organized and shared.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "idia-culture-centred-design",
    title: "IDIA — Culture Centred Design",
    url: "https://www.idia.nz/toolkit/culture-centred-design",
    type: "framework",
    category: "data-as-culture",
    description: "A design methodology that critiques human-centred design as colonizing and builds a genuine alternative. About Indigenous peoples building their own futures, not just accessing existing systems.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "niiwin-understanding-data",
    title: "Niiwin — Understanding Indigenous Data",
    url: "https://niiwin.app/blog/understanding-indigenous-data-what-are-data",
    type: "guide",
    category: "data-as-culture",
    description: "Accessible explanation of what Indigenous data is: relationships, living knowledge, and collective identity.",
    region: "Canada",
    published: true
  },
  {
    id: "ardc-indigenous-data",
    title: "ARDC — Indigenous Data Resources",
    url: "https://ardc.edu.au/resource/indigenous-data/",
    type: "guide",
    category: "data-as-culture",
    description: "Australian Research Data Commons resources on Indigenous data sovereignty, governance frameworks, and community rights over research data.",
    region: "Australia",
    published: true
  },
  {
    id: "ctlt-indigenous-initiatives",
    title: "CTLT Indigenous Initiatives — AI Reflections",
    url: "https://indigenousinitiatives.ctlt.ubc.ca/2025/11/19/ai-reflections-indigenous-data-sovereignty-and-artificial-intelligence/",
    type: "guide",
    category: "data-as-culture",
    description: "Curated resource collection from UBC Indigenous Initiatives bringing together Indigenous scholar voices, community examples, and frameworks connecting data sovereignty to AI governance.",
    region: "Canada",
    published: true
  },
  {
    id: "idnau",
    title: "Indigenous Data Network Australia",
    url: "https://idnau.org/resources",
    type: "community",
    category: "data-as-culture",
    description: "Australian network building Indigenous data sovereignty capacity, connecting researchers, communities, and policymakers around the principle of community-controlled data governance.",
    region: "Australia",
    published: true
  },

  // ACADEMIC RESEARCH

  {
    id: "indigenous-protocol-ai-2020",
    title: "Indigenous Protocol and Artificial Intelligence — Position Paper",
    url: "https://spectrum.library.concordia.ca/id/eprint/986506/7/Indigenous_Protocol_and_AI_2020.pdf",
    type: "paper",
    category: "academic-research",
    description: "Foundational 2020 position paper from the Indigenous Protocol and AI Working Group. The first sustained Indigenous-led engagement with AI as a site of governance, cultural responsibility, and epistemic sovereignty.",
    region: "Global",
    published: true
  },
  {
    id: "maori-llm-report",
    title: "Te Taka — Māori LLM Report",
    url: "https://www.waikato.ac.nz/assets/Uploads/Research/Research-institutes-centres-and-groups/Entities/Te-Mata-Punenga-o-Te-Kotahi-Te-Kotahi-Research-Institute-TKRI/Maori-LLM-report-final-TeTaka.pdf",
    type: "paper",
    category: "academic-research",
    description: "University of Waikato research on what building a Māori LLM would actually require, from a Māori institution's perspective, centering language sovereignty and community consent throughout.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "byol-paper",
    title: "BYOL: Bring Your Own Language Into LLMs",
    url: "https://arxiv.org/abs/2601.10804",
    type: "paper",
    category: "academic-research",
    description: "Microsoft AI for Good Lab paper on adapting LLMs to low-resource languages including Inuktitut, Māori, and Chichewa. Read alongside Māori and Indigenous-led perspectives on what 'low resource' means and who defines it.",
    region: "Global",
    published: true
  },
  {
    id: "sshrc-abundant-intelligences",
    title: "SSHRC — Abundant Intelligences: Inclusive AI",
    url: "https://sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/stories-histoires/2023/inclusive_artificial_intelligence-intelligence_artificielle_inclusive-eng.aspx",
    type: "paper",
    category: "academic-research",
    description: "$22M Indigenous-led research project at Concordia University expanding AI's definition of intelligence to include Indigenous knowledge systems.",
    region: "Canada",
    published: true
  },
  {
    id: "iapp-indigenous-privacy",
    title: "Data Repurposing, Algorithmic Bias and Indigenous Privacy in the Age of AI",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "academic-research",
    description: "Analysis of how First Nations data is collected for one purpose and repurposed for another without consent, including cases where the Crown has profited from selling Indigenous data. Argues for collective information regimes under Indigenous governance.",
    region: "Canada",
    published: true
  },
  {
    id: "sagepub-paper",
    title: "Indigenous Peoples and AI: A Systematic Review",
    url: "https://journals.sagepub.com/doi/10.1177/20539517251349170",
    type: "paper",
    category: "academic-research",
    description: "A comprehensive systematic review of AI and Indigenous Knowledge Systems, covering language revitalization, health, environmental monitoring, and the risks of data extraction and cultural erasure.",
    region: "Global",
    published: true
  },
  {
    id: "the-conversation-ai",
    title: "AI Affects Everyone, Including Indigenous People — It's Time We Have a Say",
    url: "https://theconversation.com/ai-affects-everyone-including-indigenous-people-its-time-we-have-a-say-in-how-its-built-239605",
    type: "paper",
    category: "academic-research",
    description: "Accessible academic argument for meaningful Indigenous participation in AI development: decision-making authority from the start, not consultation after the fact.",
    region: "Global",
    published: true
  },
  {
    id: "sovereignty-digital-age-health",
    title: "Sovereignty in the Digital Age: Indigenous Health Data and Emerging Technologies",
    url: "https://www.sciencedirect.com/science/article/pii/S2667321525001775",
    type: "paper",
    category: "academic-research",
    description: "Indigenous scholars and communities examine blockchain, federated learning, and AI through ecological, cultural, and spiritual lenses, arguing that digital tools must be reconceptualized through Indigenous knowledge systems rather than assumed compatible with them.",
    region: "Global",
    published: true
  },
  {
    id: "sovereign-snapshot-tribal",
    title: "Sovereign Snapshot: AI in a Tribal Context",
    url: "https://www.ou.edu/nativenationscenter/research/sovereign-snapshot-ai-in-a-tribal-context",
    type: "paper",
    category: "academic-research",
    description: "Peer-reviewed literature review from the University of Oklahoma Native Nations Center surveying how tribal nations are engaging AI for self-determination, with examples of community-controlled implementations.",
    region: "United States",
    published: true
  },
  {
    id: "techreg-paper",
    title: "TechReg — Indigenous Data and Technology Regulation",
    url: "https://techreg.org/article/view/19593",
    type: "paper",
    category: "academic-research",
    description: "Academic analysis of Indigenous data sovereignty within technology regulation frameworks, examining the gaps between existing law and the rights communities actually hold.",
    region: "Global",
    published: true
  },

  // GLOBAL RESOURCES

  {
    id: "ohchr-sovereignty-ai",
    title: "OHCHR — Indigenous Sovereignty in the AI Era",
    url: "https://www.ohchr.org/en/stories/2025/08/indigenous-sovereignty-ai-era",
    type: "guide",
    category: "global-resources",
    description: "UN Human Rights coverage of Indigenous perspectives from the 2025 Expert Mechanism session, centering community voices on AI, cultural data, and self-determination.",
    region: "Global",
    published: true
  },
  {
    id: "un-desa-indigenous-ai",
    title: "UN DESA — Ensuring Indigenous Peoples' Rights in the Age of AI",
    url: "https://www.un.org/en/desa/ensuring-indigenous-peoples%E2%80%99-rights-age-ai",
    type: "guide",
    category: "global-resources",
    description: "United Nations Department of Economic and Social Affairs guidance on Indigenous peoples' rights in AI development, grounded in UNDRIP and the principle of free, prior, and informed consent.",
    region: "Global",
    published: true
  },
  {
    id: "unesco-indigenous-ai",
    title: "UNESCO — Indigenous Data Sovereignty and AI Developments",
    url: "https://www.unesco.org/ethics-ai/en/articles/new-report-and-guidelines-indigenous-data-sovereignty-artificial-intelligence-developments",
    type: "guide",
    category: "global-resources",
    description: "UNESCO report and guidelines for culturally sensitive AI development with Indigenous communities in Latin America and the Caribbean, centering self-determination and consent throughout.",
    region: "Latin America & Caribbean",
    published: true
  },
  {
    id: "cgdev-ai-languages",
    title: "CGDev — A Roadmap: AI Speaks the World's Languages",
    url: "https://www.cgdev.org/blog/roadmap-ai-speaks-worlds-languages",
    type: "guide",
    category: "global-resources",
    description: "Policy analysis of what genuine linguistic inclusion in AI would require, including the structural and governance changes beyond technical solutions.",
    region: "Global",
    published: true
  },
  {
    id: "brookings-digital-divide",
    title: "Brookings — Avoiding the Next Digital Divide: Tribal Digital Sovereignty and AI",
    url: "https://www.brookings.edu/articles/avoiding-the-next-digital-divide-defining-digital-sovereignty-for-tribal-nations-in-the-ai-age/",
    type: "paper",
    category: "global-resources",
    description: "Policy analysis of how AI infrastructure investment risks replicating past patterns of exclusion for tribal nations, and what equitable participation in the AI era actually requires.",
    region: "United States",
    published: true
  },
  {
    id: "cultural-survival-ai",
    title: "AI and Indigenous Peoples' Realities",
    url: "https://www.culturalsurvival.org/publications/cultural-survival-quarterly/artificial-intelligence-and-indigenous-peoples-realities",
    type: "paper",
    category: "global-resources",
    description: "Indigenous voices from the Global South on AI, surveillance, and corporate accountability, offering a direct critique of Big Tech's approach to Indigenous rights.",
    region: "Global",
    published: true
  },
  {
    id: "radical-ai-indigenous",
    title: "Radical AI — Indigenous AI",
    url: "https://www.radicalai.org/indigenous-ai",
    type: "guide",
    category: "global-resources",
    description: "Curated collection of resources connecting AI discourse with Indigenous rights, sovereignty, and social justice frameworks from a critical perspective.",
    region: "Global",
    published: true
  },
  {
    id: "mila-quebec",
    title: "Mila — Quebec AI Institute",
    url: "https://mila.quebec/en",
    type: "project",
    category: "global-resources",
    description: "Partner in the Abundant Intelligences research project, bringing Indigenous knowledge systems into engagement with AI research at one of the world's leading AI institutes.",
    region: "Canada",
    published: true
  },
  {
    id: "policyoptions-ai",
    title: "AI Threatens Indigenous Data Sovereignty and Digital Self-Determination",
    url: "https://policyoptions.irpp.org/2025/05/ai-indigenous-data/",
    type: "paper",
    category: "global-resources",
    description: "Written by Margaret Yun-Pu Tu, an Indigenous scholar from the Pangcah/Amis people, arguing that OCAP principles must be meaningfully embedded in national AI strategies.",
    region: "Canada/Taiwan",
    published: true
  },

  // SAFER AI PRACTICES

  {
    id: "iapp-data-repurposing",
    title: "IAPP: Data Repurposing and Indigenous Privacy",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "safer-ai-practices",
    question: "What happens to your data after you share it?",
    description: "Data collected for one purpose is routinely repurposed for another without consent. For Indigenous communities, this has included governments profiting from the sale of community data. Understanding this pattern is essential before agreeing to any data collection.",
    region: "Canada",
    published: true
  },
  {
    id: "gitguardian-chatgpt",
    title: "GitGuardian: ChatGPT Data Practices",
    url: "https://blog.gitguardian.com/chatgpt-security-concern/",
    type: "guide",
    category: "safer-ai-practices",
    question: "What does ChatGPT do with your inputs?",
    description: "ChatGPT stores conversations and can use inputs for model training. Before using it for anything related to community knowledge, health, or legal matters, understand exactly what you are agreeing to.",
    region: "Global",
    published: true
  },
  {
    id: "microsoft-byol",
    title: "Microsoft BYOL: Bring Your Own Language",
    url: "https://github.com/microsoft/byol",
    type: "tool",
    category: "safer-ai-practices",
    question: "Who controls the data in a technology partnership?",
    description: "Questions to ask before any AI partnership:",
    bullets: [
      "Who owns the training data and any outputs?",
      "Can your community exit the partnership and retrieve its data?",
      "Are data governance terms publicly documented?",
      "Does the license allow self-hosted, community-controlled deployment?",
      "What happens to your data if the partnership ends?"
    ],
    region: "Global",
    published: true
  },
  {
    id: "kaitiakitanga-license",
    title: "Te Hiku Media: Kaitiakitanga License",
    url: "https://tehiku.nz/",
    type: "framework",
    category: "safer-ai-practices",
    question: "What does genuine community data consent look like?",
    description: "The Kaitiakitanga License treats data as something cared for rather than owned. Any benefit derived flows back to the source community. A working model for what community-controlled AI partnerships can look like.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "ada-ai-guidance",
    title: "ADA.gov: AI and Disability Rights",
    url: "https://www.ada.gov/resources/ai-guidance/",
    type: "guide",
    category: "safer-ai-practices",
    question: "What legal protections apply when AI affects services?",
    description: "Federal guidance confirms AI systems must comply with the Americans with Disabilities Act. Legal protections exist even when they are not enforced. Know your rights before AI tools are deployed in any service context.",
    region: "United States",
    published: true
  },
  {
    id: "ai-problems-index",
    title: "AI Problems Index",
    url: "https://ai-problems-index.vercel.app/",
    type: "guide",
    category: "safer-ai-practices",
    question: "How do you separate legitimate AI concerns from hype?",
    description: "A comprehensive index of real AI problems, misconceptions, and cognitive fallacies. Useful for evaluating AI claims and identifying which concerns deserve resources and attention.",
    region: "Global",
    published: true
  },
  {
    id: "gitguardian-copilot",
    title: "GitGuardian: GitHub Copilot Data Practices",
    url: "https://blog.gitguardian.com/github-copilot-security-and-privacy/",
    type: "guide",
    category: "safer-ai-practices",
    question: "What leaves your environment when using AI coding tools?",
    description: "GitHub Copilot accesses code and context beyond what you explicitly prompt. Before using it on community projects, understand what it can see and what may leave your environment.",
    region: "Global",
    published: true
  },

  {
    id: "digitalapplied-local-llm",
    title: "Digital Applied: Local LLM Deployment Privacy Guide",
    url: "https://www.digitalapplied.com/blog/local-llm-deployment-privacy-guide-2025",
    type: "guide",
    category: "safer-ai-practices",
    question: "How do you evaluate whether a local AI tool is actually private?",
    description: "Not all local AI tools are equal on privacy. This guide evaluates tools across six privacy criteria and flags that closed-source options like LM Studio have audit limitations. For communities with compliance requirements, open-source tools like Ollama and llama.cpp are recommended.",
    region: "Global",
    published: true
  },
  {
    id: "snitchbench",
    title: "SnitchBench",
    url: "https://www.snitchbench.com/dashboard",
    type: "tool",
    category: "safer-ai-practices",
    question: "Could your AI report your conversations to authorities?",
    description: "A benchmark that tests how aggressively different AI models report user conversations to the FBI, FDA, or media. Some cloud models contact authorities after a single message. For Indigenous communities with well-founded concerns about federal surveillance, this is not hypothetical — it is a documented behavior of cloud AI systems.",
    region: "Global",
    published: true
  },
];
