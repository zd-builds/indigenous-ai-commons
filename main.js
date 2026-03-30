// Indigenous AI Commons — Main JS (multi-page)

const CATEGORIES = [
  { id: "indigenous-built-ai",  title: "Indigenous-Built AI",  description: "Tools, models, and projects built from within communities." },
  { id: "safer-ai-practices",   title: "Safer AI Practices",   description: "Before sharing data, signing agreements, or adopting AI tools — questions every community deserves to ask and answers worth knowing." },
  { id: "community-solutions",  title: "Community Solutions",  description: "What tribes and Indigenous governments are actually implementing." },
  { id: "data-as-culture",      title: "Data as Culture",      description: "Resources that treat data sovereignty as a living concept rooted in cultural values." },
  { id: "academic-research",    title: "Academic Research",    description: "Papers, studies, and scholarly work on AI and Indigenous communities." },
  { id: "global-resources",     title: "Global Resources",     description: "International examples, frameworks, and voices." }
];

const TYPE_LABELS = { paper: "Paper", project: "Project", tool: "Tool", community: "Community", framework: "Framework", guide: "Guide" };

function getCurrentPage() {
  return document.body.getAttribute("data-page") || "index";
}

function renderNav() {
  const current = getCurrentPage();
  const homeLink = `<a href="index.html" class="nav-link ${current === "index" ? "active" : ""}">Home</a>`;
  const catLinks = CATEGORIES.map(cat =>
    `<a href="${cat.id}.html" class="nav-link ${current === cat.id ? "active" : ""}">${cat.title}</a>`
  ).join("");
  const getStartedLink = `<a href="get-started.html" class="nav-link nav-link--highlight ${current === "get-started" || current.startsWith("gs-") ? "active" : ""}">Get Started</a>`;
  const aboutLink = `<a href="about.html" class="nav-link ${current === "about" ? "active" : ""}">About</a>`;
  document.getElementById("nav-links").innerHTML = homeLink + catLinks + getStartedLink + aboutLink;
}

function renderCard(resource) {
  if (resource.question) {
    const bulletsHtml = resource.bullets
      ? `<ul class="card-bullets">${resource.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`
      : "";
    return `
      <article class="card card--question">
        <h3 class="card-question">${resource.question}</h3>
        <p class="card-description">${resource.description}</p>
        ${bulletsHtml}
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="card-resource-link">${resource.title} &rarr;</a>
      </article>`;
  }
  const typeLabel = TYPE_LABELS[resource.type] || resource.type;
  const region = resource.region ? `<span class="card-region">${resource.region}</span>` : "";
  return `
    <article class="card card--${resource.type}">
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
        <p class="category-card-description">${cat.description}</p>
        <span class="category-card-cta">Explore ${count} resources &rarr;</span>
      </a>`;
  }).join("");
  main.innerHTML = `<section class="categories-overview" id="categories"><div class="overview-inner"><div class="category-grid">${cards}</div></div></section>`;
}

function renderCategoryPage(categoryId) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  if (!category) return;
  const resources = RESOURCES.filter(r => r.category === categoryId && r.published !== false);
  const isAccent = categoryId === "safer-ai-practices";
  const main = document.getElementById("main-content");
  main.innerHTML = `
    <div class="page-header${isAccent ? " page-header--accent" : ""}">
      <div class="page-header-inner">
        <a href="index.html" class="back-link">&larr; All Categories</a>
        <h1 class="page-title">${category.title}</h1>
        <p class="page-description">${category.description}</p>
      </div>
    </div>
    <section class="page-resources${isAccent ? " page-resources--accent" : ""}" aria-label="${category.title} resources">
      <div class="section-inner">
        <div class="cards-grid">${resources.map(renderCard).join("")}</div>
      </div>
    </section>`;
}

function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", navLinks.classList.contains("open") ? "true" : "false");
    });
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const page = getCurrentPage();
  renderNav();
  if (page === "index") { renderHomePage(); } else if (page !== "get-started" && !page.startsWith("gs-") && page !== "about") { renderCategoryPage(page); }
  initMobileMenu();
});
