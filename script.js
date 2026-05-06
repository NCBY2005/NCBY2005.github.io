/* ─────────────────────────────────────────────────────────
   script.js — Nicholas Chin Bo You personal portfolio
   ───────────────────────────────────────────────────────── */

"use strict";

/* Prevent the browser from restoring the previous scroll position on refresh */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

/* ── 1. Theme ─────────────────────────────────────────── */

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const moon = document.getElementById("icon-moon");
    const sun = document.getElementById("icon-sun");
    if (moon) moon.style.display = theme === "dark" ? "none" : "";
    if (sun) sun.style.display = theme === "dark" ? "" : "none";
}

(function initTheme() {
    const saved = localStorage.getItem("theme") || "light";
    applyTheme(saved);
})();

themeToggle && themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
});


/* ── 2. Mobile menu ───────────────────────────────────── */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileClose = document.getElementById("mobile-close");

hamburger && hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose && mobileClose.addEventListener("click", () => mobileMenu.classList.remove("open"));
// Close on link click
mobileMenu && mobileMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);


/* ── 3. Active nav highlight on scroll ───────────────── */

(function initNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const OFFSET = 80;

    function sync() {
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - OFFSET) current = sec.id;
        });
        navLinks.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
        });
    }

    window.addEventListener("scroll", sync, { passive: true });
    sync();
})();


/* ── 4. Scroll-reveal ─────────────────────────────────── */

(function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
})();


/* ── 5. KaTeX auto-render ─────────────────────────────── */

function runKaTeX() {
    if (typeof renderMathInElement === "undefined") return;
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
    });
}


/* ── 6. Helpers ───────────────────────────────────────── */

function statusClass(status) {
    const s = status.toLowerCase();
    if (s === "ongoing") return "status-ongoing";
    if (s === "preprint") return "status-preprint";
    if (s === "published") return "status-published";
    return "";
}

function tagPills(tags) {
    return tags.map(t => `<span class="tag-pill">${t}</span>`).join("");
}

function stackPills(stack) {
    return stack.map(t => `<span class="stack-pill">${t}</span>`).join("");
}

function cardLinks(links) {
    if (!links) return "";
    const items = [];
    if (links.paper) items.push(`<a href="${links.paper}" class="card-link" target="_blank" rel="noopener">↗ ${links.paperTitle || "Publication"}</a>`);
    if (links.code) items.push(`<a href="${links.code}"  class="card-link" target="_blank" rel="noopener">⌥ Code</a>`);
    if (links.notes) items.push(`<a href="${links.notes}" class="card-link" target="_blank" rel="noopener">✎ Notes</a>`);
    return items.length ? `<div class="card-links">${items.join("")}</div>` : "";
}

function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

/* Collect all unique tags from an array of items */
function collectTags(items) {
    const set = new Set();
    items.forEach(item => item.tags.forEach(t => set.add(t)));
    return [...set].sort();
}


/* ── 7. Render Research ───────────────────────────────── */

function renderResearch() {
    const container = document.getElementById("research-cards");
    const filterBar = document.getElementById("research-filter");
    if (!container || typeof RESEARCH === "undefined") return;

    /* Build filter buttons */
    const tags = collectTags(RESEARCH);
    filterBar.innerHTML =
        `<button class="filter-btn active" data-tag="all">All</button>` +
        tags.map(t => `<button class="filter-btn" data-tag="${t}">${t}</button>`).join("");

    /* Build cards */
    container.innerHTML = RESEARCH.map((r, i) => `
    <div class="research-card reveal${i > 0 ? " reveal-delay-" + Math.min(i, 4) : ""}" data-tags='${JSON.stringify(r.tags)}'>
      <div class="card-top">
        <div class="card-title">${r.title}</div>
        <span class="status-badge ${statusClass(r.status)}">${r.status}</span>
      </div>
      <p class="card-abstract">${r.abstract}</p>
      <div class="card-tags">${tagPills(r.tags)}</div>
      ${cardLinks(r.links)}
    </div>
  `).join("");

    /* Filter logic */
    let active = "all";
    filterBar.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        active = btn.dataset.tag;
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
        container.querySelectorAll(".research-card").forEach(card => {
            const cardTags = JSON.parse(card.dataset.tags);
            card.classList.toggle("card-hidden", active !== "all" && !cardTags.includes(active));
        });
    });

    /* Re-run KaTeX on newly inserted HTML */
    runKaTeX();
}


/* ── 8. Render Projects ───────────────────────────────── */

function renderProjects() {
    const container = document.getElementById("projects-cards");
    const filterBar = document.getElementById("projects-filter");
    if (!container || typeof PROJECTS === "undefined") return;

    const tags = collectTags(PROJECTS);
    filterBar.innerHTML =
        `<button class="filter-btn active" data-tag="all">All</button>` +
        tags.map(t => `<button class="filter-btn" data-tag="${t}">${t}</button>`).join("");

    container.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-card reveal${i > 0 ? " reveal-delay-" + Math.min(i, 4) : ""}" data-tags='${JSON.stringify(p.tags)}'>
      <div class="project-title">${p.title}</div>
      <p class="project-description">${p.description}</p>
      <p class="project-idea">${p.idea}</p>
      <div class="stack-pills">${stackPills(p.stack)}</div>
      <div class="card-tags">${tagPills(p.tags)}</div>
      ${p.github === "Ongoing"
            ? `<span class="status-badge status-ongoing" style="display:inline-block;margin-top:0.25rem;">Ongoing</span>`
            : p.github
            ? `<a href="${p.github}" class="github-link" target="_blank" rel="noopener">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
               <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 
                        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                        -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                        .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                        -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                        c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                        0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                        0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
             </svg>
             GitHub
           </a>`
            : ``
        }
    </div>
  `).join("");

    let active = "all";
    filterBar.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        active = btn.dataset.tag;
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
        container.querySelectorAll(".project-card").forEach(card => {
            const cardTags = JSON.parse(card.dataset.tags);
            card.classList.toggle("card-hidden", active !== "all" && !cardTags.includes(active));
        });
    });
}


/* ── 9. Render Notes ──────────────────────────────────── */

function renderNotes() {
    const container = document.getElementById("notes-list");
    if (!container || typeof NOTES === "undefined") return;

    container.innerHTML = NOTES.map((n, i) => `
    <div class="note-card reveal${i > 0 ? " reveal-delay-" + Math.min(i, 4) : ""}">
      <div class="note-date">${formatDate(n.date)}</div>
      <div class="note-content">
        ${n.url
            ? `<a href="${n.url}" class="note-title" target="_blank" rel="noopener">${n.title} ↗</a>`
            : `<div class="note-title">${n.title}</div>`}
        <p class="note-summary">${n.summary}</p>
        <div class="card-tags">${tagPills(n.tags)}</div>
      </div>
    </div>
  `).join("");

    runKaTeX();
}


/* ── 10. Render Awards ────────────────────────────────── */

function renderAwards() {
    const container = document.getElementById("awards-list");
    if (!container || typeof AWARDS === "undefined") return;

    container.innerHTML = AWARDS.map((a, i) => `
    <div class="award-item reveal${i > 0 ? " reveal-delay-" + Math.min(i, 4) : ""}">
      <div class="award-meta">
        <span class="award-year">${a.year}</span>
        <span class="award-category">${a.category}</span>
      </div>
      <div class="award-body">
        <div class="award-title">${a.title}</div>
        <p class="award-desc">${a.desc}</p>
      </div>
    </div>
  `).join("");
}


/* ── 11. Boot ─────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
    renderResearch();
    renderProjects();
    renderNotes();
    renderAwards();

    /* KaTeX may already be loaded at this point; run again to be safe */
    runKaTeX();

    /* Re-observe any newly added .reveal elements */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
