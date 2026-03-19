// Indigenous AI Commons — Main JS
// Renders resource cards into each category section

const CATEGORIES = [
  {
    id: "indigenous-built-ai",
    title: "Indigenous-Built AI",
    description: "Tools, models, and projects built from within communities — where Indigenous peoples are not the subject of the technology but its architects."
  },
  {
    id: "community-solutions",
    title: "Community Solutions",
    description: "What tribes and Indigenous governments are actually implementing — real decisions, real infrastructure, real governance."
  },
  {
    id: "data-as-culture",
    title: "Data as Culture",
    description: "Resources that treat data sovereignty as a living concept rooted in cultural values — not just legal protection, not just a compliance question."
  },
  {
    id: "academic-research",
    title: "Academic Research",
    description: "Papers, studies, and scholarly work on AI and Indigenous communities — including work that centers Indigenous epistemologies, not just applies Western frameworks to Indigenous subjects."
  },
  {
    id: "global-resources",
    title: "Global Resources",
    description: "International examples, frameworks, and voices — because Indigenous communities across the world are asking the same questions and building answers worth sharing."
  },
  {
    id: "before-you-continue",
    title: "Before You Continue",
    description: "Before sharing data, signing agreements, or adopting AI tools — questions every community deserves to ask and answers worth knowing. The US experience is a warning: non-native governments and corporations have used data as a tool of control before. They will again."
  }
];

const TYPE_LABELS = {
  paper: "Paper",
  project: "Project",
  tool: "Tool",
  community: "Community",
  framework: "Framework",
  guide: "Guide"
};

function renderCard(resource) {
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
    </article>
  `;
}

function renderSection(category) {
  const resources = RESOURCES.filter(r => r.category === category.id);
  if (resources.length === 0) return "";

  const cards = resources.map(renderCard).join("");

  return `
    <section class="category-section" id="${category.id}">
      <div class="section-inner">
        <div class="section-header">
          <h2 class="section-title">${category.title}</h2>
          <p class="section-description">${category.description}</p>
        </div>
        <div class="cards-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function renderNav() {
  const links = CATEGORIES.map(cat =>
    `<a href="#${cat.id}" class="nav-link">${cat.title}</a>`
  ).join("");

  document.getElementById("nav-links").innerHTML = links;
}

function renderAll() {
  const main = document.getElementById("main-content");
  main.innerHTML = CATEGORIES.map(renderSection).join("");
}

function initScrollSpy() {
  const sections = document.querySelectorAll(".category-section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(section => observer.observe(section));
}

function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded",
        navLinks.classList.contains("open") ? "true" : "false"
      );
    });
    // Close on link click
    navLinks.querySelectorAll && document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderAll();
  initScrollSpy();
  initMobileMenu();
});
