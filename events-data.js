const EVENTS_DATA = [
  {
    title: "&ldquo;It&rsquo;s Never Going To Be A Non-Issue&rdquo;: AI and Indigenous Interests",
    date: "2026-02-11",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Practical strategies for Indigenous communities: secure data storage, offline models, and smaller language models using community-controlled datasets. Speakers: Dr. Jane Anderson (NYU) and Zam DeShields (Chickasaw Nation).",
    url: "https://indigenousdatalab.org/webinar-1its-never-going-to-be-a-non-issue-ai-and-indigenous-interests/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/webinar-1its-never-going-to-be-a-non-issue-ai-and-indigenous-interests/"
  },
  {
    title: "The World&rsquo;s First Indigenous Data Standard: IEEE 2890-2025 Provenance of Indigenous Peoples&rsquo; Data",
    date: "2026-02-18",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "An introduction to IEEE 2890-2025, a standard for describing and recording the provenance of data about Indigenous Peoples and their cultures, lands, and knowledge systems. Speakers include Stephanie Carroll, Jane Anderson, Randy Akee, Camille Callison, and Maui Hudson.",
    url: "https://indigenousdatalab.org/webinar-the-worlds-first-indigenous-data-standard-ieee-2890-2025-provenance-of-indigenous-peoples-data/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/webinar-the-worlds-first-indigenous-data-standard-ieee-2890-2025-provenance-of-indigenous-peoples-data/"
  },
  {
    title: "Relational Data: Indigenous Data Governance in Global Biodiversity Applications",
    date: "2026-03-18",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Examines how Indigenous governance frameworks &mdash; centered on collective stewardship, cultural authority, and territorial jurisdiction &mdash; can strengthen global biodiversity infrastructure. Speakers: Jane Anderson (NYU), Lydia Jennings (U of Arizona), and Ann McCartney.",
    url: "https://indigenousdatalab.org/webinar-relational-data-indigenous-data-governance-in-global-biodiversity-applications/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/webinar-relational-data-indigenous-data-governance-in-global-biodiversity-applications/"
  },
  {
    title: "AI on Your Terms: Running Local Models for Data Sovereignty",
    date: "2026-03-25",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Hands-on demonstration of how to set up and run AI models on your own hardware &mdash; no cloud services, no data leaving your control. Speakers: Zam DeShields (Chickasaw Nation) and Lydia Jennings (University of Arizona).",
    url: "https://indigenousdatalab.org/webinar-ai-on-your-terms-running-local-models-for-data-sovereignty/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/webinar-ai-on-your-terms-running-local-models-for-data-sovereignty/"
  },
  {
    title: "Local Contexts TK &amp; BC Labels: Tools to Support Indigenous Cultural Authority &amp; Data Sovereignty",
    date: "2026-04-01",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Local Contexts",
    description: "Introduces the Traditional Knowledge and Biocultural Labels &mdash; tools that enable communities to add provenance information, protocols, and permissions to data and collections. Speakers from Local Contexts including Hop Hopkins, Emily Santhanam, and Corrie Roe.",
    url: "https://indigenousdatalab.org/idx-webinar-local-contexts-tk-bc-labels-tools-to-support-indigenous-cultural-authority-idsov/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/idx-webinar-local-contexts-tk-bc-labels-tools-to-support-indigenous-cultural-authority-idsov/"
  },
  {
    title: "Qayak to Waka: Indigenous Intelligence in Motion",
    date: "2026-04-29",
    type: "Webinar",
    org: "Collaboratory for Indigenous Data Governance / Indigenous Data Exchange",
    description: "Practitioner-focused conversation with Indigenous experts from M&amacr;ori, Yupik, and Samoan communities on applied data sovereignty. Speakers: Vanessa Raymond (Yupik), Tapunu&rsquo;u Vensel Margraff (Samoan), Lauren Decker (Yupik), and Pera Barrett (M&amacr;ori, founder of Kaha Create).",
    url: "https://indigenousdatalab.org/idx-webinar-qayak-to-waka-indigenous-intelligence-in-motion/",
    cta: "View event",
    recording: "https://indigenousdatalab.org/idx-webinar-qayak-to-waka-indigenous-intelligence-in-motion/"
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
