const SECTION_LABELS_ZH = {
  Attack: "攻击",
  Defense: "防御",
  "Benchmark & Measurement": "评测",
  Other: "其他",
};

const SECTION_SHORT = {
  Attack: "Attack",
  Defense: "Defense",
  "Benchmark & Measurement": "Benchmark",
  Other: "Other",
};

const state = {
  query: "",
  category: "all",
  year: "all",
  venue: "all",
  section: "all",
  linkedOnly: false,
  sort: "newest",
};

let DATA = null;
let PAPERS = [];
let CATEGORIES = [];

const $ = (selector) => document.querySelector(selector);

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value);
}

function formatNumber(value) {
  return Number(value ?? 0).toLocaleString("en-US");
}

function numberYear(paper) {
  return typeof paper.year === "number" ? paper.year : Number.parseInt(paper.year, 10) || 0;
}

function categoryBySlug(slug) {
  return CATEGORIES.find((category) => category.slug === slug);
}

function sectionLabel(section) {
  if (section === "all") return "全部角色";
  return `${SECTION_LABELS_ZH[section] ?? section} / ${SECTION_SHORT[section] ?? section}`;
}

function fillStats() {
  const stats = DATA.stats;
  $("#paper-count").textContent = formatNumber(stats.paperCount);
  $("#category-count").textContent = formatNumber(stats.categoryCount);
  $("#year-range").textContent = `${stats.yearMin}-${stats.yearMax}`;
  $("#linked-count").textContent = formatNumber(stats.linkedPaperCount);

  if (DATA.collectionDate) {
    $("#collection-date").textContent = `Collection date: ${DATA.collectionDate}. 页面数据由分类 Markdown 自动生成。`;
  }

  $("#repo-link").href = DATA.repo.url;
  $("#suggest-link").href = DATA.repo.issuesUrl;
  $("#taxonomy-link").href = `${DATA.repo.url}/blob/main/docs/taxonomy.md`;
  $("#resources-link").href = `${DATA.repo.url}/blob/main/docs/resources.md`;
  $("#readme-link").href = `${DATA.repo.url}/blob/main/README.md`;
  $("#readme-zh-link").href = `${DATA.repo.url}/blob/main/README.zh-CN.md`;
  $("#contributing-link").href = `${DATA.repo.url}/blob/main/CONTRIBUTING.md`;
}

function option(value, label) {
  const node = document.createElement("option");
  node.value = value;
  node.textContent = label;
  return node;
}

function populateFilters() {
  const categorySelect = $("#category-select");
  categorySelect.replaceChildren(option("all", "全部分类"));
  CATEGORIES.forEach((category) => {
    categorySelect.appendChild(option(category.slug, `${category.titleZh} (${category.total})`));
  });

  const yearSelect = $("#year-select");
  yearSelect.replaceChildren(option("all", "全部年份"));
  Object.keys(DATA.stats.yearCounts)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((year) => {
      yearSelect.appendChild(option(year, `${year} (${DATA.stats.yearCounts[year]})`));
    });

  const venueSelect = $("#venue-select");
  venueSelect.replaceChildren(option("all", "全部 venue"));
  Object.entries(DATA.stats.venueCounts).forEach(([venue, count]) => {
    venueSelect.appendChild(option(venue, `${venue} (${count})`));
  });

  renderSectionFilter();
}

function renderSectionFilter() {
  const host = $("#section-filter");
  const sections = ["all", ...Object.keys(DATA.sections)];
  host.replaceChildren();
  sections.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = sectionLabel(section);
    button.className = section === state.section ? "is-active" : "";
    button.addEventListener("click", () => {
      state.section = section;
      renderAll();
    });
    host.appendChild(button);
  });
}

function bindEvents() {
  $("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  $("#category-select").addEventListener("change", (event) => {
    state.category = event.target.value;
    renderAll();
  });

  $("#year-select").addEventListener("change", (event) => {
    state.year = event.target.value;
    renderAll();
  });

  $("#venue-select").addEventListener("change", (event) => {
    state.venue = event.target.value;
    renderAll();
  });

  $("#sort-select").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderAll();
  });

  $("#linked-only").addEventListener("change", (event) => {
    state.linkedOnly = event.target.checked;
    renderAll();
  });

  $("#reset-button").addEventListener("click", () => {
    Object.assign(state, {
      query: "",
      category: "all",
      year: "all",
      venue: "all",
      section: "all",
      linkedOnly: false,
      sort: "newest",
    });
    $("#search-input").value = "";
    $("#category-select").value = "all";
    $("#year-select").value = "all";
    $("#venue-select").value = "all";
    $("#sort-select").value = "newest";
    $("#linked-only").checked = false;
    renderAll();
  });
}

function renderCategoryList() {
  const host = $("#category-list");
  host.replaceChildren();
  $("#active-category-count").textContent = `${CATEGORIES.length}`;

  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-card${state.category === category.slug ? " is-active" : ""}`;
    button.innerHTML = `
      <span class="category-title">
        <span>${escapeHTML(category.titleZh)}</span>
        <strong>${formatNumber(category.total)}</strong>
      </span>
      <span class="category-desc">${escapeHTML(category.descriptionZh)}</span>
      <span class="mini-counts">
        ${Object.entries(category.sectionCounts)
          .filter(([, count]) => count > 0)
          .map(([section, count]) => `<span>${escapeHTML(SECTION_SHORT[section] ?? section)} ${count}</span>`)
          .join("")}
      </span>
    `;
    button.addEventListener("click", () => {
      state.category = state.category === category.slug ? "all" : category.slug;
      $("#category-select").value = state.category;
      renderAll();
      document.querySelector(".results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    host.appendChild(button);
  });
}

function renderFacets() {
  renderChipCloud("#top-tags", Object.entries(DATA.stats.tagCounts).slice(0, 16), ([tag, count]) => ({
    label: `${tag} ${count}`,
    active: state.query.trim().toLowerCase() === tag.toLowerCase(),
    onClick: () => {
      state.query = tag;
      $("#search-input").value = tag;
      renderAll();
    },
  }));

  renderChipCloud("#top-venues", Object.entries(DATA.stats.venueCounts).slice(0, 12), ([venue, count]) => ({
    label: `${venue} ${count}`,
    active: state.venue === venue,
    onClick: () => {
      state.venue = state.venue === venue ? "all" : venue;
      $("#venue-select").value = state.venue;
      renderAll();
    },
  }));
}

function renderChipCloud(selector, entries, mapEntry) {
  const host = $(selector);
  host.replaceChildren();
  entries.forEach((entry) => {
    const config = mapEntry(entry);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip-button${config.active ? " is-active" : ""}`;
    button.textContent = config.label;
    button.addEventListener("click", config.onClick);
    host.appendChild(button);
  });
}

function paperMatchesQuery(paper, query) {
  if (!query) return true;
  const haystack = [
    paper.title,
    paper.venue,
    paper.category,
    paper.categoryZh,
    paper.section,
    ...(paper.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function filteredPapers() {
  const query = state.query.trim().toLowerCase();
  return PAPERS.filter((paper) => {
    if (state.category !== "all" && paper.categorySlug !== state.category) return false;
    if (state.year !== "all" && String(paper.year) !== state.year) return false;
    if (state.venue !== "all" && paper.venue !== state.venue) return false;
    if (state.section !== "all" && paper.section !== state.section) return false;
    if (state.linkedOnly && !paper.url) return false;
    return paperMatchesQuery(paper, query);
  }).sort(comparePapers);
}

function comparePapers(a, b) {
  if (state.sort === "oldest") {
    return numberYear(a) - numberYear(b) || a.title.localeCompare(b.title);
  }
  if (state.sort === "title") {
    return a.title.localeCompare(b.title) || numberYear(b) - numberYear(a);
  }
  if (state.sort === "venue") {
    return a.venue.localeCompare(b.venue) || numberYear(b) - numberYear(a);
  }
  return numberYear(b) - numberYear(a) || a.title.localeCompare(b.title);
}

function renderResults() {
  const papers = filteredPapers();
  const host = $("#result-groups");
  host.replaceChildren();
  $("#empty-state").hidden = papers.length > 0;
  $("#result-count").textContent = `${formatNumber(papers.length)} / ${formatNumber(PAPERS.length)} papers`;

  const activeCategory = state.category === "all" ? null : categoryBySlug(state.category);
  const titleParts = [];
  if (activeCategory) titleParts.push(activeCategory.titleZh);
  if (state.section !== "all") titleParts.push(sectionLabel(state.section));
  $("#results-title").textContent = titleParts.length ? titleParts.join(" · ") : "全部论文";

  if (!papers.length) return;

  const grouped = new Map(CATEGORIES.map((category) => [category.slug, []]));
  papers.forEach((paper) => {
    if (!grouped.has(paper.categorySlug)) grouped.set(paper.categorySlug, []);
    grouped.get(paper.categorySlug).push(paper);
  });

  CATEGORIES.forEach((category) => {
    const groupPapers = grouped.get(category.slug) ?? [];
    if (!groupPapers.length) return;
    const section = document.createElement("section");
    section.className = "result-group";
    section.innerHTML = `
      <h3>${escapeHTML(category.titleZh)} <span class="result-count">${formatNumber(groupPapers.length)}</span></h3>
      <div class="paper-grid">
        ${groupPapers.map(renderPaperCard).join("")}
      </div>
    `;
    host.appendChild(section);
  });
}

function renderPaperCard(paper) {
  const title = escapeHTML(paper.title);
  const paperLink = paper.url
    ? `<a href="${escapeAttr(paper.url)}" target="_blank" rel="noopener noreferrer">${title}</a>`
    : title;
  const tags = (paper.tags ?? [])
    .slice(0, 7)
    .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
    .join("");

  return `
    <article class="paper-card">
      <div class="paper-meta">
        <span>${escapeHTML(paper.year)}</span>
        <span>${escapeHTML(paper.venue)}</span>
        <span class="section-badge" data-section="${escapeAttr(paper.section)}">${escapeHTML(SECTION_SHORT[paper.section] ?? paper.section)}</span>
      </div>
      <h4>${paperLink}</h4>
      <div class="paper-category">${escapeHTML(paper.categoryZh)}</div>
      <div class="tag-row">${tags}</div>
      <div class="paper-links">
        ${paper.url ? `<a href="${escapeAttr(paper.url)}" target="_blank" rel="noopener noreferrer">Paper</a>` : ""}
        <a href="${escapeAttr(paper.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </article>
  `;
}

function renderLandscape() {
  const sections = Object.keys(DATA.sections);
  const legend = $("#section-legend");
  legend.replaceChildren();
  sections.forEach((section) => {
    const item = document.createElement("span");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-swatch stack-segment" data-section="${escapeAttr(section)}"></span>${escapeHTML(sectionLabel(section))}`;
    legend.appendChild(item);
  });

  const host = $("#landscape-chart");
  host.replaceChildren();
  CATEGORIES.forEach((category) => {
    const row = document.createElement("div");
    row.className = "landscape-row";
    const segments = sections
      .filter((section) => (category.sectionCounts[section] ?? 0) > 0)
      .map((section) => {
        const count = category.sectionCounts[section] ?? 0;
        const width = Math.max(3, (count / category.total) * 100);
        return `<span class="stack-segment" data-section="${escapeAttr(section)}" style="width:${width}%"></span>`;
      })
      .join("");
    row.innerHTML = `
      <div class="landscape-label">${escapeHTML(category.titleZh)}</div>
      <div class="stack-bar" title="${escapeAttr(category.title)}">${segments}</div>
      <div class="stack-total">${formatNumber(category.total)}</div>
    `;
    host.appendChild(row);
  });
}

function renderAll() {
  renderSectionFilter();
  renderCategoryList();
  renderFacets();
  renderResults();
}

function setupHeroCanvas() {
  const canvas = $("#hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = ["rgba(11,143,130,0.72)", "rgba(43,102,217,0.62)", "rgba(185,63,102,0.58)", "rgba(182,117,24,0.58)"];
  const counts = CATEGORIES.map((category) => category.total);
  let animationId = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (animationId) {
      window.cancelAnimationFrame(animationId);
      animationId = 0;
    }
    draw(performance.now());
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#10171d";
    ctx.fillRect(0, 0, width, height);

    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = "#d9eef4";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 72) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 36; y < height; y += 72) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const barCount = 34;
    const gap = width / (barCount + 1);
    const maxCount = Math.max(...counts, 1);
    for (let i = 0; i < barCount; i += 1) {
      const count = counts[i % counts.length] || 1;
      const phase = Math.sin((time / 900) + i * 0.55);
      const barHeight = 28 + (count / maxCount) * 150 + phase * 14;
      const x = gap * (i + 0.7);
      const y = height - 48 - barHeight;
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillRect(x, y, Math.max(4, gap * 0.22), barHeight);
    }

    for (let layer = 0; layer < 3; layer += 1) {
      ctx.beginPath();
      const yBase = height * (0.34 + layer * 0.13);
      for (let x = 0; x <= width; x += 10) {
        const y = yBase + Math.sin(x / (58 + layer * 16) + time / (1200 + layer * 280)) * (18 + layer * 8);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = colors[(layer + 1) % colors.length];
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (!reducedMotion) {
      animationId = window.requestAnimationFrame(draw);
    }
  }

  resize();
  window.addEventListener("resize", resize);
}

async function loadData() {
  try {
    const response = await fetch("assets/research-data.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    DATA = await response.json();
    PAPERS = DATA.papers;
    CATEGORIES = DATA.categories;
    fillStats();
    populateFilters();
    bindEvents();
    renderLandscape();
    renderAll();
    setupHeroCanvas();
  } catch (error) {
    $("#result-count").textContent = "Data failed to load";
    $("#result-groups").innerHTML = `<div class="empty-state">无法加载 <code>assets/research-data.json</code>。请先运行 <code>python3 scripts/build_site.py</code>。</div>`;
    console.error(error);
  }
}

loadData();
