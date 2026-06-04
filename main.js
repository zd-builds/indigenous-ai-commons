// Indigenous AI Commons — Main JS (multi-page)

const CATEGORIES = [
  {
    id: "indigenous-innovations",
    title: "Indigenous AI Innovations",
    descriptor: "AI and technology tools designed and led by Indigenous creators",
    description: "Tools, models, and platforms built from within communities — centering Indigenous values, languages, and sovereignty from day one."
  },
  {
    id: "community-safeguards",
    title: "AI Governance & Community Policy",
    descriptor: "Governance frameworks, policies, and practical safety guides for your community",
    description: "Policy templates, example governance documents, and the questions every community deserves answered before signing any data agreement or adopting any AI tool."
  },
  {
    id: "cultural-data-sovereignty",
    title: "AI, Data & Cultural Sovereignty",
    descriptor: "Why data sovereignty matters — and what Indigenous communities worldwide are doing about it",
    description: "Resources that treat data as a living cultural resource rooted in community identity, land, language, and the right to self-determination."
  },
  {
    id: "learning-gathering-ground",
    title: "AI Learning & Gathering Ground",
    descriptor: "Research, scholarship, and community-built knowledge from across the world",
    description: "Academic research, community-led analyses, and global voices documenting what AI means — and what it should mean — for Indigenous peoples."
  }
];

const GS_TITLES = {
  "gs-federal-risk":   "Federal Risk",
  "gs-hallucinations": "Hallucinations",
  "gs-local-models":   "Local Models"
};

const TYPE_LABELS = { paper: "Paper", project: "Project", tool: "Tool", community: "Community", framework: "Framework", guide: "Guide" };

function getCurrentPage() {
  return document.body.getAttribute("data-page") || "index";
}


function renderBreadcrumb() {
  const current = getCurrentPage();
  if (!current.startsWith("gs-")) return;
  const title = GS_TITLES[current] || current;
  const bc = document.createElement("div");
  bc.className = "breadcrumb";
  bc.setAttribute("aria-label", "Breadcrumb");
  bc.innerHTML = `<div class="breadcrumb-inner"><a href="get-started.html" class="breadcrumb-link">&larr; Get Started</a><span class="breadcrumb-sep" aria-hidden="true"> / </span><span class="breadcrumb-current">${title}</span></div>`;
  const pageHeader = document.querySelector(".page-header");
  if (pageHeader) pageHeader.parentNode.insertBefore(bc, pageHeader);
}

function renderCard(resource) {
  const featured = resource.featured ? "true" : "false";
  if (resource.question) {
    const bulletsHtml = resource.bullets
      ? `<ul class="card-bullets">${resource.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`
      : "";
    return `
      <article class="resource-card card card--question" data-category="${resource.category}" data-featured="${featured}">
        <h3 class="card-question">${resource.question}</h3>
        <p class="card-description">${resource.description}</p>
        ${bulletsHtml}
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="card-resource-link">${resource.title} &rarr;</a>
      </article>`;
  }
  const typeLabel = TYPE_LABELS[resource.type] || resource.type;
  const region = resource.region ? `<span class="card-region">${resource.region}</span>` : "";
  return `
    <article class="resource-card card card--${resource.type}" data-category="${resource.category}" data-featured="${featured}">
      <div class="card-header">
        <span class="card-tag card-tag--${resource.type}">${typeLabel}</span>
        ${region}
      </div>
      <h3 class="card-title">
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title}</a>
      </h3>
      <p class="card-description">${resource.description}</p>
    </article>`;
}

function renderHomePage() {
  const main = document.getElementById("main-content");
  const cards = CATEGORIES.map(cat => {
    const count = RESOURCES.filter(r => r.category === cat.id && r.published !== false).length;
    return `
      <a href="${cat.id}.html" class="category-card">
        <h2 class="category-card-title">${cat.title}</h2>
        <p class="category-descriptor">${cat.descriptor}</p>
        <p class="category-card-description">${cat.description}</p>
        <span class="category-card-cta">Explore ${count} resources &rarr;</span>
      </a>`;
  }).join("");
  main.innerHTML = `<section class="categories-overview" id="categories"><div class="overview-inner"><div class="category-grid">${cards}</div></div></section>`;
}

function calloutConnect() {
  return `
    <div class="callout-box callout-box--connect" role="complementary" aria-label="Connect with Indigenous builders">
      <span class="callout-box-eyebrow">For Indigenous Builders &amp; Developers</span>
      <p class="callout-box-title">Building something? Let&rsquo;s get it in front of your community.</p>
      <p class="callout-box-body">If you&rsquo;re an Indigenous creator, developer, or technologist working on a tool, platform, or AI project — this is a place to be seen. Submit your work to the commons or reach out to connect with other builders and communities working toward the same goals.</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;">
        <a href="mailto:zam@zamdeshields.org?subject=Indigenous%20AI%20Commons%20Tool%20Submission" class="btn btn--primary btn--sm">Submit your project &rarr;</a>
        <a href="https://zamdeshields.org" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" style="color:var(--text);border-color:var(--border);">Work with Zam DeShields &rarr;</a>
      </div>
    </div>`;
}

function calloutAdvisory() {
  return `
    <div class="callout-box callout-box--advisory" role="complementary" aria-label="Advisory services for educators and researchers">
      <span class="callout-box-eyebrow">For Educators &amp; Researchers</span>
      <p class="callout-box-title">Looking for technical strategy or advisory support?</p>
      <p class="callout-box-body">If you&rsquo;re an educator, researcher, or institution working on Indigenous AI, data sovereignty, or community-centered technology — Zam DeShields provides advisory and technical strategy services rooted in lived experience inside tribal governments and Indigenous communities. From curriculum development to policy review to research partnerships.</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;">
        <a href="https://zamdeshields.org" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Learn about advisory services &rarr;</a>
        <a href="mailto:zam@zamdeshields.org?subject=Advisory%20Services%20Inquiry" class="btn btn--outline btn--sm" style="color:var(--text);border-color:var(--border);">Get in touch &rarr;</a>
      </div>
    </div>`;
}

function policyLinkCard() {
  return `
    <a href="resources/example-policies.html" class="policy-link-card">
      <div class="policy-link-card-text">
        <span class="policy-link-card-eyebrow">Governance Documents</span>
        <div class="policy-link-card-title">Example Policies &amp; Governance Documents</div>
        <p class="policy-link-card-desc">Adaptable templates, declarations, and frameworks from Indigenous nations worldwide — including OCAP&reg;, CARE Principles, the Kaitiakitanga framework, and the Cherokee Nation AI Policy.</p>
      </div>
      <span class="policy-link-card-cta">Browse documents &rarr;</span>
    </a>`;
}

function renderCategoryPage(categoryId) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  if (!category) return;
  const resources = RESOURCES.filter(r => r.category === categoryId && r.published !== false);
  const main = document.getElementById("main-content");

  let preamble = "";
  let postamble = "";

  if (categoryId === "community-safeguards") {
    preamble = policyLinkCard();
  }
  if (categoryId === "indigenous-innovations") {
    postamble = calloutConnect();
  }
  if (categoryId === "learning-gathering-ground") {
    postamble = calloutAdvisory();
  }

  main.innerHTML = `
    <div class="page-header">
      <div class="page-header-inner">
        <a href="index.html" class="back-link">&larr; All Categories</a>
        <h1 class="page-title">${category.title}</h1>
        <p class="page-description">${category.description}</p>
      </div>
    </div>
    <section class="page-resources" aria-label="${category.title} resources">
      <div class="section-inner">
        ${preamble}
        <div class="cards-grid">${resources.map(renderCard).join("")}</div>
        ${postamble}
      </div>
    </section>`;
}

const SKIP_RENDER = new Set(["index", "get-started", "about", "events", "for-tribal-governments", "example-policies", "og-preview"]);

document.addEventListener("DOMContentLoaded", () => {
  const page = getCurrentPage();
  renderBreadcrumb();
  if (page === "index") {
    renderHomePage();
  } else if (!SKIP_RENDER.has(page) && !page.startsWith("gs-")) {
    renderCategoryPage(page);
  }
});
