// Indigenous AI Commons — Resource Data

const RESOURCES = [

  // INDIGENOUS INNOVATIONS

  {
    id: "temarama-ai",
    title: "Temarama AI",
    url: "https://temaramaai.com/",
    type: "project",
    category: "indigenous-innovations",
    description: "An Indigenous-led AI project centering Māori values, language, and sovereignty, built with data governance frameworks that keep community knowledge under community control.",
    region: "Aotearoa New Zealand",
    published: false
  },
  {
    id: "te-hiku-media",
    title: "Te Hiku Media",
    url: "https://tehiku.nz/",
    type: "project",
    category: "indigenous-innovations",
    featured: true,
    description: "Māori-led broadcaster that built te reo Māori speech recognition AI with 92% accuracy. Governed by the Kaitiakitanga License: data is cared for, not owned. Any benefit flows back to the community.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "animikii",
    title: "Animikii Indigenous Technology",
    url: "https://animikii.com/",
    type: "project",
    category: "indigenous-innovations",
    description: "Indigenous-owned technology company building digital solutions for and with Indigenous communities, grounded in Indigenous values and self-determination.",
    region: "Canada",
    published: true
  },
  {
    id: "nativebio",
    title: "NativeBio Data",
    url: "https://www.nativebio.org/",
    type: "project",
    category: "indigenous-innovations",
    description: "The first Indigenous-led genomic biorepository on sovereign Native American land (Cheyenne River Sioux Reservation), centering Indigenous sovereignty and Indigenous data governance in health and science research.",
    region: "United States",
    published: true
  },
  {
    id: "semwise",
    title: "Semwise",
    url: "https://semwise.org/",
    type: "project",
    category: "indigenous-innovations",
    description: "Indigenous-focused technology organization developing tools and frameworks for community-controlled AI and data sovereignty.",
    region: "Global",
    published: false
  },

  {
    id: "skobots",
    title: "SkoBots — Indigenous Language Revitalization Robot",
    url: "https://www.steamconnection.org/skobots",
    type: "project",
    category: "indigenous-innovations",
    description: "Wearable, AI-powered robots designed to teach endangered Indigenous languages to youth. Built by Danielle Boyer (Ojibwe, Sault Ste Marie Tribe of Chippewa Indians), distributed free to Indigenous schools and organizations. Uses internally-developed AI that functions without Wi-Fi, designed for communities with limited connectivity.",
    region: "United States",
    published: true
  },
  {
    id: "flair-mila",
    title: "FLAIR (First Languages AI Reality), Mila Quebec",
    url: "https://mila.quebec/en/ai4humanity/applied-projects/first-languages-ai-reality",
    type: "project",
    category: "indigenous-innovations",
    description: "Indigenous-led voice AI for endangered language revitalization, built with data sovereignty and linguistic self-determination at its core. Open source. Led by Michael Running Wolf.",
    region: "Canada",
    published: true
  },
  {
    id: "wasikan-kisewatisiwin",
    title: "wâsikan kisewâtisiwin (AI With Heart)",
    url: "https://www.wasikankisewatisiwin.ca/",
    type: "project",
    category: "indigenous-innovations",
    description: "Métis-built AI writing tool by Shani Gwin and Pipikwan Pêhtâkwan (Edmonton). Named in a ceremony by Elder Theresa Strawberry of O'Chiese First Nation -- wâsikan kisewâtisiwin means 'kind electricity' in Cree. Functions as a writing plug-in that identifies unconscious bias or racism directed at Indigenous Peoples and corrects it with factual information. Built to transfer the emotional labor of Indigenous education off Indigenous people and onto the systems that need to change. Trained and developed by Indigenous people.",
    region: "Canada",
    published: true
  },
  {
    id: "fireweed-ai",
    title: "Fireweed AI",
    url: "https://www.fireweedai.ca/",
    type: "project",
    category: "indigenous-innovations",
    description: "Canadian company building sovereign AI infrastructure for Indigenous nations: on-premise deployment within client jurisdiction, policy drafting tools grounded in governance frameworks, Indigenous language preservation through community-owned models, and document analysis &mdash; with no third-party cloud access, telemetry, or cross-border data movement. Aligned with OCAP&reg; standards. Founded by Cole Robulack.",
    region: "Canada",
    published: true
  },
  {
    id: "saige",
    title: "SAIGE -- Indigenous Scholarship Matching AI",
    url: "https://mila.quebec/en/ai4humanity/applied-projects/saige",
    type: "project",
    category: "indigenous-innovations",
    description: "An AI-based scholarship matching tool created by and for Indigenous youth through Mila's Indigenous Pathfinders in AI program. Designed to reduce barriers to education funding while centering data sovereignty in how student data is stored and managed.",
    region: "Canada",
    published: true
  },

  {
    id: "cherokee-ai-legal-agent",
    title: "Cherokee Nation AI Legal Agent",
    url: "https://www.forbes.com/sites/ronschmelzer/2025/08/17/cherokee-nation-shows-how-ai-governance-can-be-sovereign/",
    type: "project",
    category: "indigenous-innovations",
    description: "Built in Microsoft Copilot Studio with MIT intern support, this system unifies treaty law, tribal codes, executive orders issued by the Principal Chief, and Cherokee Nation Supreme Court rulings into a single searchable repository. Designed for citizens, attorneys, and the tribal attorney general's office. Demonstrates sovereign AI governance grounded in tribal legal tradition. Government-operated and sovereignty-affirming, though hosted on Microsoft's cloud infrastructure.",
    region: "United States",
    published: true
  },
  {
    id: "irrigopt-ai",
    title: "IrrigOpt AI — Yakama Nation Irrigation Platform",
    url: "https://solve.mit.edu/solutions/97706",
    type: "project",
    category: "indigenous-innovations",
    description: "An AI platform designed to provide hyperlocal irrigation guidance, crop yield projections, and drought forecasts for Yakama Nation farmers. Uses 25+ years of historical climate and soil data; developed with Yakama Nation communities as primary stakeholders. MIT Solve Indigenous Communities Fellow (2025). In active development — relationship with Yakama Nation is community-engaged, not yet a confirmed deployment.",
    region: "United States",
    published: true
  },
  {
    id: "morongo-legal-chatbot",
    title: "Morongo Band of Mission Indians Legal Chatbot",
    url: "https://www.brookings.edu/articles/avoiding-the-next-digital-divide-defining-digital-sovereignty-for-tribal-nations-in-the-ai-age/",
    type: "project",
    category: "indigenous-innovations",
    description: "An internal AI chatbot that cross-references cultural customs with Tribal council resolutions, ballot referenda, and ordinances — helping staff and leadership navigate layered internal sources of legal authority. A model for integrating cultural knowledge with formal governance records. (Source: Brookings, Feb 2026.)",
    region: "United States",
    published: true
  },

  {
    id: "cherokee-salmon-monitoring",
    title: "Cherokee Nation AI Salmon Monitoring System",
    url: "#",
    type: "project",
    category: "indigenous-innovations",
    featured: false,
    description: "A computer-vision machine learning model paired with traditional physical weir designs to manage environmental sovereignty entirely under community cultural values.",
    region: "United States",
    published: true
  },
  {
    id: "project-adi-vaani",
    title: "Project Adi Vaani Language Roadmap",
    url: "#",
    type: "project",
    category: "indigenous-innovations",
    featured: false,
    description: "A collaborative real-time AI translation initiative supporting tribal languages, driven and validated by Tribal Research Institutes to protect oral traditions.",
    region: "Global",
    published: true
  },

  // LEARNING & GATHERING GROUND (community solutions)

  {
    id: "fntc-ai",
    title: "First Nations Technology Council — AI Adoption Initiative",
    url: "https://www.technologycouncil.ca/research/digital-transformation-ai/",
    type: "community",
    category: "learning-gathering-ground",
    description: "Community-driven research and free AI resources for First Nations in BC, built from what communities said they need. Developing an open-source AI toolkit informed by Indigenous knowledge systems.",
    region: "Canada",
    published: true
  },
  {
    id: "fntc-pathways-to-ai",
    title: "First Nations Technology Council — Pathways to AI",
    url: "https://www.technologycouncil.ca/pathways-to-ai/",
    type: "guide",
    category: "learning-gathering-ground",
    description: "Free, self-paced 1.5-hour course designed specifically for Indigenous people and Indigenous-serving organizations. Covers how AI works, practical use of tools like ChatGPT and Copilot, and critical concerns including bias, data misuse, and protection of sacred knowledge — framed through relationality, OCAP®, and data sovereignty. No prerequisites, certificate on completion.",
    region: "Canada",
    published: true
  },
  {
    id: "cherokee-nation-ai",
    title: "Cherokee Nation AI Task Force",
    url: "https://www.cherokee.org/media/0ipldvul/task-force-report-on-ai-data-sovereignty-cybersecurity.pdf",
    type: "community",
    category: "learning-gathering-ground",
    description: "The Cherokee Nation established an AI task force and governance committees to evaluate AI against Cherokee values before adoption. Companies must complete an AI questionnaire before working with the Nation. Data literacy programs extend these protections community-wide.",
    region: "United States",
    published: true
  },
  {
    id: "wiring-the-rez",
    title: "Wiring the Rez — Tribal Nations and Digital Sovereignty",
    url: "https://law.asu.edu/newsroom/wiring-rez-tribal-nations-claim-their-digital-futures",
    type: "community",
    category: "learning-gathering-ground",
    description: "Annual conference where Indigenous leaders, legal experts, and community members develop policy and practice on digital sovereignty. 2026 theme: infrastructure is sovereignty in action, including AI infrastructure.",
    region: "United States",
    published: true
  },
  {
    id: "tribal-digital-sovereignty-guidebook",
    title: "Tribal Digital Sovereignty Guidebook",
    url: "https://aipi.asu.edu/sites/g/files/litvpz1606/files/2025-11/Tribal%20Digital%20Sovereignty%20Guidebook_0.pdf",
    type: "guide",
    category: "learning-gathering-ground",
    description: "Practical guide for Indigenous nations on broadband, spectrum sovereignty, data governance, and AI, framing digital infrastructure as an instrument of self-determination. From ASU's American Indian Policy Institute.",
    region: "United States",
    published: true
  },
  {
    id: "niiwin-databack",
    title: "Niiwin — DataBack Fellowship",
    url: "https://niiwin.app/blog/the-databack-fellowship-for-organizations-ready-to-do-data-right",
    type: "community",
    category: "learning-gathering-ground",
    description: "Fellowship for organizations ready to return data to Indigenous communities. A model of what accountability and data stewardship actually look like in practice.",
    region: "Canada",
    published: true
  },
  {
    id: "aipi-tribal-sovereignty",
    title: "ASU AIPI — Proactive Solutions for Tribal Digital Sovereignty",
    url: "https://aipi.asu.edu/blog/2026/02/proactive-solutions-implementing-tribal-digital-sovereignty",
    type: "guide",
    category: "learning-gathering-ground",
    description: "From Arizona State University's American Indian Policy Institute, a 2026 analysis of implementation strategies Indigenous nations are using to assert digital sovereignty, covering governance structures, data policies, and AI decision frameworks.",
    region: "United States",
    published: true
  },
  {
    id: "conservation-metrics",
    title: "Conservation Metrics",
    url: "https://conservationmetrics.com/",
    type: "tool",
    category: "learning-gathering-ground",
    description: "Technology tools supporting Indigenous and local communities in monitoring and stewarding their lands and waters, with community-controlled data and decision-making.",
    region: "Global",
    published: true
  },

  {
    id: "cherokee-ai-policy-doc",
    title: "Cherokee Nation AI Policy — Full Document",
    url: "https://www.cherokee.org/media/fo4pcqvz/cherokee-nation-information-technology-artificial-intelligence-ai-policy.pdf",
    type: "framework",
    category: "learning-gathering-ground",
    description: "The policy document signed by Principal Chief Chuck Hoskin Jr. in August 2025 — one of the first comprehensive Indigenous AI governance frameworks. Covers approved uses, cultural protections (Cherokee language requires fluent speaker oversight), governance committee structure, and data protection requirements. A working model other nations can adapt.",
    region: "United States",
    published: true
  },
  {
    id: "indigenous-pathfinders-ai",
    title: "Indigenous Pathfinders in AI, Mila + Indspire",
    url: "https://mila.quebec/en/ai4humanity/ai-governance-policy-and-inclusion/indigenous-pathfinders-in-ai",
    type: "community",
    category: "learning-gathering-ground",
    description: "Annual career-pathway program for First Nations, Inuit, and Métis post-secondary students. Cohorts produce community-driven AI projects including language revitalization tools, data sovereignty platforms, and Indigenous food systems work.",
    region: "Canada",
    published: true
  },
  {
    id: "matritech",
    title: "Matritech",
    url: "https://matritech.org/",
    type: "community",
    category: "learning-gathering-ground",
    description: "Indigenous women and Two-Spirit-led initiative founded at the Emergence Circle AI Retreat (Santa Fe, February 2026). Focused on tech discernment over tech adoption -- equipping Indigenous women and Two-Spirit leaders to evaluate, govern, and refuse AI technologies on sovereign terms. Grounded in relational ethics, gender justice, and Indigenous data sovereignty.",
    region: "United States",
    published: true
  },
  {
    id: "matritech-report",
    title: "Matritech Listening Sessions Report: Indigenous Women and Two-Spirit Perspectives on AI",
    url: "https://matritech.org/s/Listening-Sessions-Report-Indigenous-Women-Two-Spirit-Perspectives-on-AI.pdf",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Primary research from four listening sessions with 11 Indigenous women and Two-Spirit participants on AI use, governance, and values. Key finding: community protection ranked as the top priority in all four sessions. Participants identified a distinct Indigenous women and Two-Spirit model of AI leadership rooted in relationality, stewardship, and collective responsibility rather than individual adoption.",
    region: "United States",
    published: true
  },
  {
    id: "jeff-doctor-mydata-2021",
    title: "Jeff Doctor: Are Individualistic Data Policies and Designs Fuelling Digital Colonialism?",
    url: "https://vimeo.com/653038251",
    type: "guide",
    category: "learning-gathering-ground",
    description: "Cayuga technologist Jeff Doctor (Animikii) on how individualistic data frameworks reproduce colonial logic, and what Indigenous data sovereignty demands instead. MyData Canada, 2021.",
    region: "Canada",
    published: true
  },

  // CULTURAL & DATA SOVEREIGNTY

  {
    id: "ict-data-as-land",
    title: "Treating Data Like Land: Data Sovereignty in the AI Age",
    url: "https://ictnews.org/news/treating-data-like-land-data-sovereignty-in-the-ai-age/",
    type: "paper",
    category: "cultural-data-sovereignty",
    description: "Indigenous news analysis grounding data sovereignty in the relationship between land and identity. Data is a cultural resource with its own relationships and responsibilities.",
    region: "United States",
    published: true
  },
  {
    id: "local-contexts",
    title: "Local Contexts",
    url: "https://localcontexts.org/",
    type: "framework",
    category: "cultural-data-sovereignty",
    featured: true,
    description: "A global framework of Traditional Knowledge (TK) and Biocultural (BC) Labels and Notices that lets Indigenous communities define cultural protocols for their data, collections, and knowledge. Used in archives, museums, and research platforms worldwide.",
    region: "Global",
    published: true
  },
  {
    id: "idia-decolonised-research",
    title: "IDIA — Decolonised Research Framework",
    url: "https://www.idia.nz/toolkit/decolonised-research-framework",
    type: "framework",
    category: "cultural-data-sovereignty",
    description: "Framework from Indigenous Design and Innovation Aotearoa covering the full research lifecycle, from project inception through data storage, with Māori concepts like tapu and noa shaping how knowledge is organized and shared.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "idia-culture-centred-design",
    title: "IDIA — Culture Centred Design",
    url: "https://www.idia.nz/toolkit/culture-centred-design",
    type: "framework",
    category: "cultural-data-sovereignty",
    description: "A design methodology that critiques human-centred design as colonizing and builds a genuine alternative. About Indigenous peoples building their own futures, not just accessing existing systems.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "niiwin-understanding-data",
    title: "Niiwin — Understanding Indigenous Data",
    url: "https://niiwin.app/blog/understanding-indigenous-data-what-are-data",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "Accessible explanation of what Indigenous data is: relationships, living knowledge, and collective identity.",
    region: "Canada",
    published: true
  },
  {
    id: "ardc-indigenous-data",
    title: "ARDC — Indigenous Data Resources",
    url: "https://ardc.edu.au/resource/indigenous-data/",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "Australian Research Data Commons resources on Indigenous data sovereignty, governance frameworks, and community rights over research data.",
    region: "Australia",
    published: true
  },
  {
    id: "ctlt-indigenous-initiatives",
    title: "CTLT Indigenous Initiatives — AI Reflections",
    url: "https://indigenousinitiatives.ctlt.ubc.ca/2025/11/19/ai-reflections-indigenous-data-sovereignty-and-artificial-intelligence/",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "Curated resource collection from UBC Indigenous Initiatives bringing together Indigenous scholar voices, community examples, and frameworks connecting data sovereignty to AI governance.",
    region: "Canada",
    published: true
  },
  {
    id: "idnau",
    title: "Indigenous Data Network Australia",
    url: "https://idnau.org/resources/catalogue",
    type: "community",
    category: "cultural-data-sovereignty",
    description: "Australian network building Indigenous data sovereignty capacity, connecting researchers, communities, and policymakers around the principle of community-controlled data governance.",
    region: "Australia",
    published: true
  },

  {
    id: "gida-global",
    title: "Global Indigenous Data Alliance (GIDA)",
    url: "https://gida-global.org/",
    type: "framework",
    category: "cultural-data-sovereignty",
    featured: true,
    description: "The international body articulating Indigenous data sovereignty as a relational framework — centering data as relations rather than as property or resource. Stewards the CARE Principles (Collective Benefit, Authority to Control, Responsibility, Ethics) and convenes Indigenous data sovereignty networks across multiple continents. The foundational reference point for understanding what 'data as relations' means in governance practice.",
    region: "Global",
    published: true
  },
  {
    id: "new-commons-incubator",
    title: "New Commons Incubator",
    url: "https://newcommons.ai/",
    type: "community",
    category: "cultural-data-sovereignty",
    description: "A six-month capacity-building program supporting Indigenous-led teams in developing data commons proposals for language and cultural preservation in the AI era. Run by the GovLab's Open Data Policy Lab with Microsoft and UNESCO as partners. Applications open June 18 – August 14, 2026. Emphasizes Indigenous-led governance and community benefit-sharing. Note: Microsoft and UNESCO co-sponsor — readers should evaluate the governance terms and who controls the resulting commons before applying.",
    region: "Global",
    published: true
  },

  // LEARNING & GATHERING GROUND (academic research)

  {
    id: "indigenous-protocol-ai-2020",
    title: "Indigenous Protocol and Artificial Intelligence — Position Paper",
    url: "https://spectrum.library.concordia.ca/id/eprint/986506/7/Indigenous_Protocol_and_AI_2020.pdf",
    type: "paper",
    category: "learning-gathering-ground",
    featured: true,
    description: "Foundational 2020 position paper from the Indigenous Protocol and AI Working Group. The first sustained Indigenous-led engagement with AI as a site of governance, cultural responsibility, and epistemic sovereignty.",
    region: "Global",
    published: true
  },
  {
    id: "maori-llm-report",
    title: "Te Taka — Māori LLM Report",
    url: "https://www.waikato.ac.nz/assets/Uploads/Research/Research-institutes-centres-and-groups/Entities/Te-Mata-Punenga-o-Te-Kotahi-Te-Kotahi-Research-Institute-TKRI/Maori-LLM-report-final-TeTaka.pdf",
    type: "paper",
    category: "learning-gathering-ground",
    description: "University of Waikato research on what building a Māori LLM would actually require, from a Māori institution's perspective, centering language sovereignty and community consent throughout.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "byol-paper",
    title: "BYOL: Bring Your Own Language Into LLMs",
    url: "https://arxiv.org/abs/2601.10804",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Microsoft AI for Good Lab paper on adapting LLMs to low-resource languages including Inuktitut, Māori, and Chichewa. Read alongside Māori and Indigenous-led perspectives on what 'low resource' means and who defines it.",
    region: "Global",
    published: true
  },
  {
    id: "sshrc-abundant-intelligences",
    title: "SSHRC — Abundant Intelligences: Inclusive AI",
    url: "https://sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/stories-histoires/2023/inclusive_artificial_intelligence-intelligence_artificielle_inclusive-eng.aspx",
    type: "paper",
    category: "learning-gathering-ground",
    description: "$22M Indigenous-led research project at Concordia University expanding AI's definition of intelligence to include Indigenous knowledge systems.",
    region: "Canada",
    published: false
  },
  {
    id: "iapp-indigenous-privacy",
    title: "Data Repurposing, Algorithmic Bias and Indigenous Privacy in the Age of AI",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Analysis of how First Nations data is collected for one purpose and repurposed for another without consent, including cases where the Crown has profited from selling Indigenous data. Argues for collective information regimes under Indigenous governance.",
    region: "Canada",
    published: true
  },
  {
    id: "sagepub-paper",
    title: "Indigenous Peoples and AI: A Systematic Review",
    url: "https://journals.sagepub.com/doi/10.1177/20539517251349170",
    type: "paper",
    category: "learning-gathering-ground",
    description: "A comprehensive systematic review of AI and Indigenous Knowledge Systems, covering language revitalization, health, environmental monitoring, and the risks of data extraction and cultural erasure.",
    region: "Global",
    published: true
  },
  {
    id: "the-conversation-ai",
    title: "AI Affects Everyone, Including Indigenous People — It's Time We Have a Say",
    url: "https://theconversation.com/ai-affects-everyone-including-indigenous-people-its-time-we-have-a-say-in-how-its-built-239605",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Accessible academic argument for meaningful Indigenous participation in AI development: decision-making authority from the start, not consultation after the fact.",
    region: "Global",
    published: true
  },
  {
    id: "sovereignty-digital-age-health",
    title: "Sovereignty in the Digital Age: Indigenous Health Data and Emerging Technologies",
    url: "https://www.sciencedirect.com/science/article/pii/S2667321525001775",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Indigenous scholars and communities examine blockchain, federated learning, and AI through ecological, cultural, and spiritual lenses, arguing that digital tools must be reconceptualized through Indigenous knowledge systems rather than assumed compatible with them.",
    region: "Global",
    published: true
  },
  {
    id: "sovereign-snapshot-tribal",
    title: "Sovereign Snapshot: AI in a Tribal Context",
    url: "https://www.ou.edu/nativenationscenter/research/sovereign-snapshot-ai-in-a-tribal-context",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Peer-reviewed literature review from the University of Oklahoma Native Nations Center surveying how Indigenous nations are engaging AI for self-determination, with examples of community-controlled implementations.",
    region: "United States",
    published: true
  },
  {
    id: "techreg-paper",
    title: "TechReg — Indigenous Data and Technology Regulation",
    url: "https://techreg.org/article/view/19593",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Academic analysis of Indigenous data sovereignty within technology regulation frameworks, examining the gaps between existing law and the rights communities actually hold.",
    region: "Global",
    published: true
  },

  {
    id: "making-kin-machines",
    title: "Making Kin with the Machines",
    url: "https://jods.mitpress.mit.edu/pub/lewis-arista-pechawis-kite",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Award-winning 2018 essay by Jason Edward Lewis, Noelani Arista, Archer Pechawis, and Suzanne Kite in MIT Press Journal of Design and Science. Proposes drawing on Indigenous kinship protocols to reimagine the epistemological foundations of AI — arguing that centering human well-being alone is too narrow and that AI belongs within an extended circle of relationships.",
    region: "Global",
    published: true
  },
  {
    id: "ou-sovereign-brief-data-centers",
    title: "OU Native Nations Center — Sovereign Brief: AI Data Centers and Tribes (June 2026)",
    url: "https://www.ou.edu/nativenationscenter/research/sovereign-brief-ai-data-centers-and-tribes",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Reviews emerging federal and state policy trends on AI data center development and outlines tribal governance options — including federal co-management frameworks, contract language for sovereignty protections, and formal consultation requirements. By Tana Fitzpatrick, J.D., Native Nations Center for Tribal Policy Research, University of Oklahoma. Open access, Creative Commons license. Note: focuses on physical infrastructure policy; sets aside Indigenous data ethics — pairs with, rather than replaces, other sovereignty resources here.",
    region: "United States",
    published: true
  },
  {
    id: "aipi-policy-tracking-dashboard",
    title: "AIPI Federal Policy Tracking Dashboard",
    url: "https://aipi.asu.edu/solutions",
    type: "tool",
    category: "learning-gathering-ground",
    description: "A real-time tracker of congressional bills, Federal Register notices, executive orders, and agency activity affecting Tribal Nations. Customizable by issue area (health, education, environment, technology); includes public comment deadlines and historical data from 2021. Weekly analyst updates by ASU's American Indian Policy Institute. Free access with brief registration.",
    region: "United States",
    published: true
  },

  {
    id: "abundant-intelligences-site",
    title: "Abundant Intelligences — Research Program",
    url: "https://abundant-intelligences.net/",
    type: "project",
    category: "learning-gathering-ground",
    description: "Indigenous-led, Indigenous-majority international research program imagining how AI could be conceptualized and designed from Indigenous knowledge systems. Led by Jason Edward Lewis (Concordia University) in partnership with Mila Quebec AI Institute. A $22M SSHRC-funded initiative.",
    region: "Global",
    published: true
  },
  {
    id: "ssn-ai-indigenous-sovereignty",
    title: "Scholars Strategy Network: AI Policy Must Respect Indigenous Data Sovereignty",
    url: "#",
    type: "paper",
    category: "learning-gathering-ground",
    featured: false,
    description: "A critical brief demonstrating the core differences between Western 'privacy' and Indigenous 'sovereignty,' and why standard notice models fail communities.",
    region: "United States",
    published: false
  },

  {
    id: "yanchapaxi-murphy-2025",
    title: "Indigenous Environmental Data Justice: Confronting Colonial Data and Activating Indigenous Sovereignty",
    url: "https://journals.sagepub.com/doi/10.1177/01622439251343837",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Yanchapaxi and Murphy (2025) in Science, Technology, and Human Values. Frameworks Indigenous Environmental Data Justice as distinct from Environmental Data Justice, centering place-based, community-led data sovereignty practices. Treats data as relational rather than extractive.",
    region: "Global",
    published: true
  },

  {
    id: "yurok-information-sharing-2026",
    title: "Yurok Tribe Sovereign Data Sharing &amp; Security Agreement",
    url: "https://resources.ca.gov/-/media/CNRA-Website/Files/Initiatives/Tribal-Affairs/TemplateYurok-SDSSA-for-Research.pdf",
    type: "framework",
    category: "cultural-data-sovereignty",
    featured: false,
    description: "A comprehensive data sharing agreement template governing creation, collection, exchange, storage, and use of culturally sensitive information. Developed by the largest federally recognized tribe in California and released for adaptation by other nations. The sovereignty-forward framing is more protective than standard institutional templates.",
    region: "United States",
    published: true
  },
  {
    id: "govlab-gida-readings-2026",
    title: "GovLab/GIDA: Selected Readings on Indigenous Data Governance (2026 Update)",
    url: "#",
    type: "paper",
    category: "cultural-data-sovereignty",
    featured: false,
    description: "A curated literature review tracking the operational implementation of the CARE Principles and traditional knowledge labels under generative AI pressures.",
    region: "Global",
    published: false
  },

  {
    id: "seekcommons-ai-enclosures-2025",
    title: "\"They came for our land, now they are coming for our data\": Supporting digital sovereignty in the face of AI enclosures",
    url: "https://zenodo.org/records/20604154",
    type: "paper",
    category: "cultural-data-sovereignty",
    featured: false,
    description: "Final report from a November 2025 SEEKCommons Research Coordination Network workshop drawing a direct parallel between historical land dispossession and AI-driven data enclosure, with panel discussions on digital autonomy and sovereignty from María Fernanda Yanchapaxi, Ben Tairea, Jane Anderson, Keolu Fox, Jeff Ward, Dorothy Howard, Lane Rasberry, and Luis Felipe R. Murillo.",
    region: "Global",
    published: true
  },

  // CULTURAL & DATA SOVEREIGNTY (from global resources)

  {
    id: "ohchr-sovereignty-ai",
    title: "OHCHR — Indigenous Sovereignty in the AI Era",
    url: "https://www.ohchr.org/en/stories/2025/08/indigenous-sovereignty-ai-era",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "UN Human Rights coverage of Indigenous perspectives from the 2025 Expert Mechanism session, centering community voices on AI, cultural data, and self-determination.",
    region: "Global",
    published: true
  },
  {
    id: "un-desa-indigenous-ai",
    title: "UN DESA — Ensuring Indigenous Peoples' Rights in the Age of AI",
    url: "https://www.un.org/en/desa/ensuring-indigenous-peoples%E2%80%99-rights-age-ai",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "United Nations Department of Economic and Social Affairs guidance on Indigenous peoples' rights in AI development, grounded in UNDRIP and the principle of free, prior, and informed consent.",
    region: "Global",
    published: true
  },
  {
    id: "unesco-indigenous-ai",
    title: "UNESCO — Indigenous Data Sovereignty and AI Developments",
    url: "https://www.unesco.org/ethics-ai/en/articles/new-report-and-guidelines-indigenous-data-sovereignty-artificial-intelligence-developments",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "UNESCO report and guidelines for culturally sensitive AI development with Indigenous communities in Latin America and the Caribbean, centering self-determination and consent throughout.",
    region: "Latin America & Caribbean",
    published: true
  },
  {
    id: "cgdev-ai-languages",
    title: "CGDev — A Roadmap: AI Speaks the World's Languages",
    url: "https://www.cgdev.org/blog/roadmap-ai-speaks-worlds-languages",
    type: "guide",
    category: "learning-gathering-ground",
    description: "Policy analysis of what genuine linguistic inclusion in AI would require, including the structural and governance changes beyond technical solutions.",
    region: "Global",
    published: true
  },
  {
    id: "brookings-digital-divide",
    title: "Brookings — Avoiding the Next Digital Divide: Tribal Digital Sovereignty and AI",
    url: "https://www.brookings.edu/articles/avoiding-the-next-digital-divide-defining-digital-sovereignty-for-tribal-nations-in-the-ai-age/",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Policy analysis of how AI infrastructure investment risks replicating past patterns of exclusion for Indigenous nations, and what equitable participation in the AI era actually requires.",
    region: "United States",
    published: true
  },
  {
    id: "cultural-survival-ai",
    title: "AI and Indigenous Peoples' Realities",
    url: "https://www.culturalsurvival.org/publications/cultural-survival-quarterly/artificial-intelligence-and-indigenous-peoples-realities",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Indigenous voices from the Global South on AI, surveillance, and corporate accountability, offering a direct critique of Big Tech's approach to Indigenous rights.",
    region: "Global",
    published: true
  },
  {
    id: "radical-ai-indigenous",
    title: "Radical AI — Indigenous AI",
    url: "https://www.radicalai.org/indigenous-ai",
    type: "guide",
    category: "cultural-data-sovereignty",
    description: "Curated collection of resources connecting AI discourse with Indigenous rights, sovereignty, and social justice frameworks from a critical perspective.",
    region: "Global",
    published: true
  },
  {
    id: "policyoptions-ai",
    title: "AI Threatens Indigenous Data Sovereignty and Digital Self-Determination",
    url: "https://policyoptions.irpp.org/2025/05/ai-indigenous-data/",
    type: "paper",
    category: "learning-gathering-ground",
    description: "Written by Margaret Yun-Pu Tu, an Indigenous scholar from the Pangcah/Amis people, arguing that OCAP principles must be meaningfully embedded in national AI strategies.",
    region: "Canada/Taiwan",
    published: true
  },

  // COMMUNITY SAFEGUARDS & POLICY

  {
    id: "brookings-tribal-sovereignty-2026",
    title: "Brookings Report: Defining Digital Sovereignty for Tribal Nations in the AI Age (2026)",
    url: "#",
    type: "paper",
    category: "community-safeguards",
    featured: false,
    description: "A policy framework detailing legal agreements, data protection codes, and unified digital governance strategies built specifically for Tribal Nations navigating AI.",
    region: "United States",
    published: false
  },
  {
    id: "niaa-ai-transparency-2026",
    title: "NIAA Artificial Intelligence Transparency Statement (2026)",
    url: "#",
    type: "framework",
    category: "community-safeguards",
    featured: false,
    description: "A public agency blueprint showing how to strictly apply Indigenous Data Sovereignty rules to enterprise AI use, mapping out where AI is restricted in community decision-making.",
    region: "Australia",
    published: false
  },

  {
    id: "cherokee-data-center-task-force",
    title: "Cherokee Nation Data Center Task Force (2026)",
    url: "https://www.cherokeephoenix.org/news/cherokee-nation-establishes-task-force-to-study-the-impact-of-data-centers/",
    type: "framework",
    category: "community-safeguards",
    description: "Principal Chief Chuck Hoskin Jr. established a nine-member task force by executive order (Feb. 24, 2026) to study environmental and economic impacts before any data center siting decision on Cherokee Nation lands. Led by Secretary of Natural Resources Christina Justice. Citizens engaged via the Gadugi Portal. A model of proactive governance — evaluating infrastructure proposals through a community lens before approving any agreement.",
    region: "United States",
    published: true
  },
  {
    id: "seminole-nation-moratorium",
    title: "Seminole Nation of Oklahoma Data Center Moratorium (March 2026)",
    url: "https://nativenewsonline.net/sovereignty/seminole-nation-of-oklahoma-passes-moratorium-on-data-centers/",
    type: "framework",
    category: "community-safeguards",
    description: "The Tribal Council voted 24-0 for an indefinite moratorium on generative AI and hyperscale data center development after a startup corporation asked leadership to sign an NDA before disclosing project details. The first tribal council to pass such a moratorium. Triggered by an emergency town hall on March 3 where tribal members and neighboring non-Indigenous residents voiced environmental concerns. A landmark example of community-driven governance stopping a corporate proposal before it could take hold.",
    region: "United States",
    published: true
  },
  {
    id: "muscogee-data-center-rejection",
    title: "Muscogee (Creek) Nation National Council Rejects Data Center (November 2025)",
    url: "https://ictnews.org/news/in-indian-country-data-centers-come-with-a-familiar-threat-of-colonialism-these-organizers-are-fighting-back/",
    type: "community",
    category: "community-safeguards",
    description: "Citizens Jordan Harmon and Kenzie Roberts organized town halls across the reservation to oppose a proposed data center on Looped Square Ranch — a 5,570-acre food sovereignty parcel. The National Council rejected the Mvskoke Tech Park bill after council members reported receiving more constituent calls on this issue than any other. Harmon and Roberts were later featured on the cover of TIME magazine. A case study in citizen-led land protection under AI infrastructure pressure.",
    region: "United States",
    published: true
  },
  {
    id: "sault-tribe-moratorium",
    title: "Sault Ste. Marie Tribe of Chippewa Indians Data Center Moratorium (April 2026)",
    url: "https://michiganadvance.com/2026/04/10/community-pushback-prompts-sault-tribe-leadership-to-adopt-moratorium-on-data-centers/",
    type: "framework",
    category: "community-safeguards",
    description: "The Board of Directors voted unanimously on April 7, 2026 for an indefinite moratorium on AI data center development after community members raised concerns about energy use, land impact, and noise. The moratorium requires a tribal impact assessment, environmental and cultural resource evaluations, infrastructure and energy capacity analysis, and community consultation before it can be lifted — setting a clear standard for what due diligence looks like.",
    region: "United States",
    published: true
  },
  {
    id: "honor-the-earth-nda-pattern",
    title: "The NDA-Before-Pitch Pattern — Honor the Earth",
    url: "https://futurism.com/artificial-intelligence/data-centers-tribal-communities",
    type: "guide",
    category: "community-safeguards",
    description: "Honor the Earth executive director Krystal Two Bulls has documented a recurring corporate tactic: developers approach tribal leadership proposing solar infrastructure, then shift to hyperscale data center proposals. Before substantive discussions begin, companies often request NDAs — making leadership contractually accountable to the corporation rather than to their citizens. The Seminole Nation moratorium was directly triggered by this pattern. Knowing the warning signs before any pitch meeting is essential.",
    region: "United States",
    published: true
  },

  {
    id: "iapp-data-repurposing",
    title: "IAPP: Data Repurposing and Indigenous Privacy",
    url: "https://iapp.org/news/a/data-repurposing-algorithmic-bias-and-indigenous-privacy-in-the-age-of-ai",
    type: "paper",
    category: "community-safeguards",
    description: "Data collected for one purpose is routinely repurposed for another without consent. For Indigenous communities, this has included governments profiting from the sale of community data. Understanding this pattern is essential before agreeing to any data collection.",
    region: "Canada",
    published: true
  },
  {
    id: "gitguardian-chatgpt",
    title: "GitGuardian: ChatGPT Data Practices",
    url: "https://blog.gitguardian.com/chatgpt-security-concern/",
    type: "guide",
    category: "community-safeguards",
    description: "ChatGPT stores conversations and can use inputs for model training. Before using it for anything related to community knowledge, health, or legal matters, understand exactly what you are agreeing to.",
    region: "Global",
    published: true
  },
  {
    id: "microsoft-byol",
    title: "Microsoft BYOL: Bring Your Own Language",
    url: "https://github.com/microsoft/byol",
    type: "tool",
    category: "community-safeguards",
    description: "Before entering any AI partnership, ask: Who owns the training data and any outputs? Can your community exit the partnership and retrieve its data? Are data governance terms publicly documented? Does the license allow self-hosted, community-controlled deployment? What happens to your data if the partnership ends?",
    region: "Global",
    published: true
  },
  {
    id: "kaitiakitanga-license",
    title: "Te Hiku Media: Kaitiakitanga License",
    url: "https://tehiku.nz/",
    type: "framework",
    category: "community-safeguards",
    featured: true,
    description: "The Kaitiakitanga License treats data as something cared for rather than owned. Any benefit derived flows back to the source community. A working model for what community-controlled AI partnerships can look like.",
    region: "Aotearoa New Zealand",
    published: true
  },
  {
    id: "ada-ai-guidance",
    title: "ADA.gov: AI and Disability Rights",
    url: "https://www.ada.gov/resources/ai-guidance/",
    type: "guide",
    category: "community-safeguards",
    description: "Federal guidance confirms AI systems must comply with the Americans with Disabilities Act. Legal protections exist even when they are not enforced. Know your rights before AI tools are deployed in any service context.",
    region: "United States",
    published: true
  },
  {
    id: "ai-problems-index",
    title: "AI Problems Index",
    url: "https://ai-problems-index.vercel.app/",
    type: "guide",
    category: "community-safeguards",
    description: "A comprehensive index of real AI problems, misconceptions, and cognitive fallacies. Useful for evaluating AI claims and identifying which concerns deserve resources and attention.",
    region: "Global",
    published: true
  },
  {
    id: "gitguardian-copilot",
    title: "GitGuardian: GitHub Copilot Data Practices",
    url: "https://blog.gitguardian.com/github-copilot-security-and-privacy/",
    type: "guide",
    category: "community-safeguards",
    description: "GitHub Copilot accesses code and context beyond what you explicitly prompt. Before using it on community projects, understand what it can see and what may leave your environment.",
    region: "Global",
    published: true
  },
  {
    id: "digitalapplied-local-llm",
    title: "Digital Applied: Local LLM Deployment Privacy Guide",
    url: "https://www.digitalapplied.com/blog/local-llm-deployment-privacy-guide-2025",
    type: "guide",
    category: "community-safeguards",
    description: "Not all local AI tools are equal on privacy. This guide evaluates tools across six privacy criteria and flags that closed-source options like LM Studio have audit limitations. For communities with compliance requirements, open-source tools like Ollama and llama.cpp are recommended.",
    region: "Global",
    published: true
  },
  {
    id: "snitchbench",
    title: "SnitchBench",
    url: "https://www.snitchbench.com/dashboard",
    type: "tool",
    category: "community-safeguards",
    description: "A benchmark that tests how aggressively different AI models report user conversations to the FBI, FDA, or media. Some cloud models contact authorities after a single message. For Indigenous communities with well-founded concerns about federal surveillance, this is not hypothetical — it is a documented behavior of cloud AI systems.",
    region: "Global",
    published: true
  },
];
