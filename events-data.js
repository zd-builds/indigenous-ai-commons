const EVENTS_DATA = [
  {
    title: "&ldquo;It&rsquo;s Never Going To Be A Non-Issue&rdquo;: AI and Indigenous Interests",
    date: "2026-02-11",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Practical strategies for Indigenous communities: secure data storage, offline models, and smaller language models using community-controlled datasets. Speakers: Dr. Jane Anderson (NYU) and Zam DeShields (Chickasaw Nation).",
    url: "https://indigenousdatalab.org/webinar-1its-never-going-to-be-a-non-issue-ai-and-indigenous-interests/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=T9Bd-Du-wyc"
  },
  {
    title: "The World&rsquo;s First Indigenous Data Standard: IEEE 2890-2025 Provenance of Indigenous Peoples&rsquo; Data",
    date: "2026-02-18",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "An introduction to IEEE 2890-2025, a standard for describing and recording the provenance of data about Indigenous Peoples and their cultures, lands, and knowledge systems. Speakers include Stephanie Carroll, Jane Anderson, Randy Akee, Camille Callison, and Maui Hudson.",
    url: "https://indigenousdatalab.org/webinar-the-worlds-first-indigenous-data-standard-ieee-2890-2025-provenance-of-indigenous-peoples-data/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=YOwGhq4gDkM"
  },
  {
    title: "Relational Data: Indigenous Data Governance in Global Biodiversity Applications",
    date: "2026-03-18",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Examines how Indigenous governance frameworks &mdash; centered on collective stewardship, cultural authority, and territorial jurisdiction &mdash; can strengthen global biodiversity infrastructure. Speakers: Jane Anderson (NYU), Lydia Jennings (U of Arizona), and Ann McCartney.",
    url: "https://indigenousdatalab.org/webinar-relational-data-indigenous-data-governance-in-global-biodiversity-applications/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=7WTcU3HQHyQ"
  },
  {
    title: "AI on Your Terms: Running Local Models for Data Sovereignty",
    date: "2026-03-25",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Hands-on demonstration of how to set up and run AI models on your own hardware &mdash; no cloud services, no data leaving your control. Speakers: Zam DeShields (Chickasaw Nation) and Lydia Jennings (University of Arizona).",
    url: "https://indigenousdatalab.org/webinar-ai-on-your-terms-running-local-models-for-data-sovereignty/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=1X7Auus4Keo"
  },
  {
    title: "Local Contexts TK &amp; BC Labels: Tools to Support Indigenous Cultural Authority &amp; Data Sovereignty",
    date: "2026-04-01",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Local Contexts",
    description: "Introduces the Traditional Knowledge and Biocultural Labels &mdash; tools that enable communities to add provenance information, protocols, and permissions to data and collections. Speakers from Local Contexts including Hop Hopkins, Emily Santhanam, and Corrie Roe.",
    url: "https://indigenousdatalab.org/idx-webinar-local-contexts-tk-bc-labels-tools-to-support-indigenous-cultural-authority-idsov/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=S86csS0Teac"
  },
  {
    title: "Qayak to Waka: Indigenous Intelligence in Motion",
    date: "2026-04-29",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Practitioner-focused conversation with Indigenous experts from M&amacr;ori, Yupik, and Samoan communities on applied data sovereignty. Speakers: Vanessa Raymond (Yupik), Tapunu&rsquo;u Vensel Margraff (Samoan), Lauren Decker (Yupik), and Pera Barrett (M&amacr;ori, founder of Kaha Create).",
    url: "https://indigenousdatalab.org/idx-webinar-qayak-to-waka-indigenous-intelligence-in-motion/",
    cta: "View event",
    recording: "https://www.youtube.com/watch?v=zPiQGFI0dww"
  },
  {
    title: "Artificial Intelligence Foundations",
    date: "2026-05-04",
    dateEnd: "2026-05-15",
    type: "Training",
    org: "First Nations Technology Council",
    description: "Two-week live online course covering foundational AI concepts with Indigenous perspectives on data governance and responsible use. Funded for Indigenous people aged 18&ndash;35 in BC.",
    url: "https://www.technologycouncil.ca/training-program/artificial-intelligence-foundations/",
    cta: "Sign up for notifications",
    recording: null
  },
  {
    title: "w&acirc;sikan kisew&acirc;tisiwin &ndash; AI with Heart: How We Built an Indigenous-Led and Informed LLM",
    date: "2026-06-04",
    type: "Forum",
    org: "CCIB Forum",
    description: "Shani Gwin (CEO &amp; Founder, w&acirc;sikan kisew&acirc;tisiwin) explores how an Indigenous-led writing assistant was built to help communicators spot harmful phrasing, offer respectful rewrites, and explain why changes matter. Grounded in story stewardship, data sovereignty, and consent throughout the model lifecycle, the session introduces a model of &ldquo;matriarchal AI&rdquo; rooted in care and relationships rather than technical efficiency alone.",
    url: "https://forum.ccib.ca/forum-agenda/",
    registerUrl: "https://conference.ccib.ca/secure/portal/",
    cta: "Register",
    recording: null
  },
  {
    title: "Indigenous Perspectives on AI: Appropriation, Regulation, and Innovation",
    date: "2026-06-05",
    type: "Conference",
    org: "Seattle University School of Law",
    description: "Virtual conference examining how AI intersects with cultural heritage, data sovereignty, environmental stewardship, and legal authority. Part of the Annual Innovation and Technology Law Conference.",
    url: "https://events.seattleu.edu/event/9th-innovation-and-technology-law-conference",
    cta: "Register",
    recording: null
  },
  {
    title: "FLO Workshop: GenAI and the Indigenous 5Rs Framework",
    date: "2026-06-16",
    type: "Workshop",
    org: "BCcampus / SFU",
    description: "Online workshop exploring how educators can evaluate generative AI tools through the Indigenous 5Rs framework: Respect, Relevance, Reciprocity, Responsibility, and Relationships.",
    url: "https://bccampus.ca/event/flo-workshop-genai-and-the-indigenous-5rs-framework/",
    cta: "Register",
    recording: null
  },
  {
    title: "Indigenous Voices in Global AI: A Conversation in Circle",
    date: "2026-06-17",
    type: "Webinar",
    org: "Animikii Indigenous Technology",
    description: "Jeff Ward invites the network into a circle-style conversation to share what he heard at the 4th GPAI Innovation Workshop in Rio &mdash; covering AI literacy, cooperation frameworks for AI governance, AI from local data, and cultural diversity in AI training, each through an Indigenous lens &mdash; and to gather input on how Animikii should represent Indigenous priorities in Canada&rsquo;s AI sector going forward. 11:00 AM PT / 2:00 PM ET.",
    url: "https://us02web.zoom.us/meeting/register/vkPcndIVQcW5aOEMzmN5Xg",
    cta: "Register",
    recording: null
  },
  {
    title: "ARDC Indigenous Data Governance Masterclass 2026",
    date: "2026-06-18",
    dateEnd: "2026-06-19",
    type: "Masterclass",
    org: "Australian Research Data Commons (ARDC)",
    description: "Two-day in-person masterclass in Tarndanya/Adelaide (Kaurna Country) covering Indigenous Data Governance principles, curation of community collections, and the Indigenous Data Matrix. Free. Speakers include Distinguished Professor Marcia Langton.",
    url: "https://ardc.edu.au/event/indigenous-data-governance-masterclass-2026/",
    cta: "View event",
    recording: null
  },
  {
    title: "AI for Indigenous People",
    date: "2026-07-09",
    type: "Summit",
    org: "ITU AI for Good Global Summit 2026",
    description: "Keynote session on AI applications and opportunities for Indigenous communities, featuring speakers from across the Americas. Hybrid event.",
    url: "https://aiforgood.itu.int/event/ai-for-indigenous-people/",
    registerUrl: "https://aiforgood.itu.int/summit26/passes/",
    cta: "Register for summit",
    recording: null
  },
  {
    title: "Indigenous AI Gathering 2026",
    date: "2026-07-16",
    dateEnd: "2026-07-17",
    type: "Conference",
    org: "Mila &ndash; Quebec AI Institute / Abundant Intelligences",
    description: "Two-day in-person gathering at Mila in Montreal bringing together 50+ Indigenous innovators, technologists, and community leaders. Includes the Indigenous Pathfinders in AI Year 3 showcase, keynotes from Krystle Tsosie (&ldquo;Data has Descendants&rdquo;) and Solomon Enos (&ldquo;Ancestral Imagination&rdquo;), and panels on Indigenous data sovereignty, AI governance, and building Indigenous-led AI markets. Speakers include Michael Running Wolf, Keoni Mahelona, Peter-Lucas Jones, Danielle Boyer, and Jeff Ward.",
    url: "https://mila.quebec/en/indigenous-ai-gathering-2026-meet-the-speakers",
    cta: "View event",
    recording: null
  },
  {
    title: "Data Sharing Agreements Between States and Tribal Public Health Authorities: A Review of Terms Commonly Negotiated",
    date: "2026-07-22",
    type: "Webinar",
    org: "National Indian Health Board (NIHB)",
    description: "A review of commonly used terms and provisions in data sharing agreements (DSAs) negotiated between states, Tribal public health departments, and Tribal Epidemiology Centers (TECs). Attorney Chris Alibrandi O&rsquo;Connor shares findings from a review of several DSAs, joined by representatives from a Tribal public health department, a TEC, and a state health department on what provisions they included and where they had to compromise. 2:00 PM ET.",
    url: "https://us02web.zoom.us/meeting/register/Uk7RZxj7TpGLNB3P9vu2EQ",
    cta: "Register",
    recording: null
  },
  {
    title: "Tech Sovereignty: A Tribal Leader&rsquo;s Guide to the AI Era",
    date: "2026-07-22",
    type: "Webinar",
    org: "National Congress of American Indians (NCAI)",
    description: "Virtual briefing equipping tribal decision-makers with strategies for governing artificial intelligence &mdash; protecting natural resources, safeguarding Tribal data sovereignty, and ensuring emerging technologies align with Tribal values &mdash; while leveraging AI for language preservation and economic development. Speakers: Cora Tso (Arizona State University) on land &amp; water risks; Dr. Krystal Tsosie &amp; Joe Yracheta (Native BioData Consortium) on data &amp; DNA risks; Danielle Forward (Natives Rising) on workforce opportunities; and Michael Running Wolf (FLAIR) on language innovation. 1:00&ndash;2:30 PM ET.",
    url: "https://www.ncai.org/event/sovereignty-first-webinar",
    cta: "Register",
    recording: null
  },
  {
    title: "Indigenous Peoples and AI: Defending Rights, Shaping Futures",
    date: "2026-08-12",
    type: "Webinar",
    org: "Australian Indigenous Governance Institute",
    description: "Guest speakers from diverse Indigenous cultures explore how AI intersects with Indigenous rights and self-determination.",
    url: "https://aigi.org.au/event/indigenous-peoples-and-ai-defending-rights-shaping-futures",
    cta: "Learn more",
    recording: null
  },
  {
    title: "ATALM 2026 &mdash; AI, Data Sovereignty, and Indigenous Knowledge",
    date: "2026-09-21",
    dateEnd: "2026-09-24",
    type: "Conference",
    org: "Association of Tribal Archives, Libraries, and Museums",
    description: "Spokane, WA. The September 21 Strategy Summit focuses on Artificial Intelligence, Data Sovereignty, and Indigenous Knowledge &mdash; national, Indigenous-led problem-solving and strategy development.",
    url: "https://www.atalm.org/conference-2026/",
    cta: "Learn more",
    recording: null
  },
  {
    title: "INIHKD 2026: Reclaiming Indigenous Ecologies of Love for Future Generations",
    date: "2026-11-09",
    dateEnd: "2026-11-13",
    type: "Conference",
    org: "International Network of Indigenous Health, Wellness &amp; Development",
    description: "Rarotonga, Cook Islands. Includes a dedicated track on advanced technologies and AI.",
    url: "https://inihkd.com/inihkd-2026/",
    cta: "Learn more",
    recording: null
  }
];

const EVERGREEN_TRAININGS = [
  {
    title: "Pathways to AI: An Introduction for Indigenous People and Organizations",
    type: "Self-Paced",
    org: "First Nations Technology Council",
    description: "Free 1.5-hour self-paced introduction to AI. Covers capabilities, limitations, and hands-on use of tools like ChatGPT and Copilot, grounded in Indigenous principles. Start anytime.",
    url: "https://learn.technologycouncil.ca/course/view.php?id=2",
    cta: "Enroll free"
  }
];
