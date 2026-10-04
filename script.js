document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupNavigation();
  setActiveNavigation();

  const page = document.body.dataset.page;
  if (page === "home") {
    setupHomeSearch();
    renderHomeSections();
  }
  if (page === "category") setupCategoryPage();
  if (page === "detail") renderDetail();
  if (page === "download") renderDownload();
});

function setupTheme() {
  const saved = localStorage.getItem("mineza-theme") || "dark";
  document.documentElement.dataset.theme = saved;
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute("aria-pressed", String(saved === "light"));
    button.addEventListener("click", () => {
      const next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("mineza-theme", next);
      document
        .querySelectorAll(".theme-toggle")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(next === "light")),
        );
    });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
}

function setActiveNavigation() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a[data-page-link]").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
}

function setupHomeSearch() {
  const input = document.querySelector("#home-search");
  if (!input) return;
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    document.querySelectorAll("[data-home-section]").forEach((section) => {
      const category = section.dataset.homeSection;
      const source = getCategoryData(category);
      const result = source.filter((item) => matchesKeyword(item, keyword));
      renderSlider(section.querySelector(".card-slider"), result, category);
    });
    setupImageFallbacks();
  });
}

function renderHomeSections() {
  document.querySelectorAll("[data-home-section]").forEach((section) => {
    const category = section.dataset.homeSection;
    renderSlider(
      section.querySelector(".card-slider"),
      getCategoryData(category),
      category,
    );
  });
  setupImageFallbacks();
}

function getCategoryData(category) {
  if (category === "Addon") return addonsData;
  if (category === "Map") return mapsData;
  if (category === "Shader") return shadersData;
  return [];
}

function matchesKeyword(item, keyword) {
  return `${item.name} ${item.category} ${item.description} ${(item.features || []).join(" ")}`
    .toLowerCase()
    .includes(keyword);
}

function renderSlider(slider, items, category) {
  if (!slider) return;
  slider.innerHTML = items.length
    ? items.map((item) => createCard(item)).join("")
    : `<div class="empty-state">Belum ada ${category.toLowerCase()} yang ditambahkan.</div>`;
}

function setupCategoryPage() {
  const category = document.body.dataset.category;
  const search = document.querySelector("#content-search");
  const grid = document.querySelector("#category-grid");
  const count = document.querySelector("#result-count");
  const render = () => {
    const keyword = (search.value || "").trim().toLowerCase();
    const filtered = getCategoryData(category).filter((item) =>
      matchesKeyword(item, keyword),
    );
    grid.innerHTML = filtered.length
      ? filtered.map((item) => createCard(item, true)).join("")
      : `<div class="empty-state">Belum ada konten untuk kategori ini.</div>`;
    count.textContent = `${filtered.length} konten`;
    setupImageFallbacks();
  };
  search.addEventListener("input", render);
  render();
}

function createCard(item, categoryCard = false) {
  return `<article class="content-card ${categoryCard ? "category-card" : ""}">
    <a class="card-image" href="detail.html?id=${encodeURIComponent(item.id)}"><img src="${escapeAttribute(item.thumbnail)}" alt="${escapeHtml(item.name)}" loading="lazy"><span class="image-placeholder">Thumbnail belum tersedia</span></a>
    <div class="card-body"><div class="card-topline"><span class="tag">${escapeHtml(item.category)}</span><span class="version">${escapeHtml(item.version || "Bedrock")}</span></div>
    <h3><a href="detail.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(item.description)}</p>
    <a class="card-link" href="detail.html?id=${encodeURIComponent(item.id)}">Lihat detail <span aria-hidden="true">→</span></a></div>
  </article>`;
}

function renderDetail() {
  const wrapper = document.querySelector("#detail-content");
  const id = new URLSearchParams(window.location.search).get("id");
  const item = contents.find((content) => content.id === id);
  if (!item) {
    wrapper.innerHTML = `<div class="not-found"><p class="eyebrow">404</p><h1>Konten tidak ditemukan</h1><a class="button button-primary" href="index.html">Kembali ke home</a></div>`;
    return;
  }
  document.title = `${item.name} | Mineza_Craft`;
  const features = (item.features || [])
    .map((feature) => `<li>${escapeHtml(feature)}</li>`)
    .join("");
  wrapper.innerHTML = `<div class="detail-image"><img src="${escapeAttribute(item.thumbnail)}" alt="${escapeHtml(item.name)}" loading="lazy"><span class="image-placeholder">Thumbnail belum tersedia</span></div>
    <div class="detail-copy"><span class="tag">${escapeHtml(item.category)}</span><h1>${escapeHtml(item.name)}</h1>
    <div class="detail-panels"><section class="info-panel"><span class="panel-label">Versi Minecraft</span><strong>${escapeHtml(item.version || "Bedrock")}</strong></section>
    <section class="info-panel"><span class="panel-label">Penjelasan</span><p>${escapeHtml(item.description)}</p></section>
    <section class="info-panel"><span class="panel-label">Fitur</span><ul class="feature-list">${features}</ul></section></div>
    ${item.download ? `<a class="button button-primary" href="download.html?id=${encodeURIComponent(item.id)}">Download <span aria-hidden="true">↓</span></a>` : ""}</div>`;
  setupImageFallbacks();
}

function renderDownload() {
  const wrapper = document.querySelector("#download-content");
  const id = new URLSearchParams(window.location.search).get("id");
  const item = contents.find((content) => content.id === id);
  if (!item || !item.download) {
    wrapper.innerHTML = `<p class="eyebrow">DOWNLOAD</p><h1>Link download tidak tersedia</h1><p class="download-message">Konten ini belum memiliki link download.</p><a class="button button-primary" href="index.html">Kembali ke Home</a>`;
    return;
  }

  document.title = `Download ${item.name} | Mineza_Craft`;
  let seconds = 5;
  wrapper.innerHTML = `<span class="tag">${escapeHtml(item.category)}</span><h1>Download ${escapeHtml(item.name)}</h1><p class="download-message">Link download akan tersedia dalam beberapa detik. Harap tunggu.</p><div class="countdown-number" id="countdown-number">${seconds}</div><div class="countdown-track"><span id="countdown-progress"></span></div><p class="download-status" id="download-status">Menyiapkan link download...</p><a class="button button-primary download-ready" id="download-ready" href="${escapeAttribute(item.download)}" target="_blank" rel="noopener" hidden>Download sekarang <span aria-hidden="true">↓</span></a><a class="back-link" href="detail.html?id=${encodeURIComponent(item.id)}">Kembali ke detail</a>`;

  const number = wrapper.querySelector("#countdown-number");
  const progress = wrapper.querySelector("#countdown-progress");
  const status = wrapper.querySelector("#download-status");
  const ready = wrapper.querySelector("#download-ready");
  const timer = window.setInterval(() => {
    seconds -= 1;
    number.textContent = seconds;
    progress.style.width = `${((5 - seconds) / 5) * 100}%`;
    if (seconds <= 0) {
      window.clearInterval(timer);
      number.textContent = "✓";
      status.textContent = "Link siap digunakan.";
      ready.hidden = false;
    }
  }, 1000);
}

function setupImageFallbacks() {
  document.querySelectorAll(".card-image, .detail-image").forEach((wrapper) => {
    const image = wrapper.querySelector("img");
    if (image)
      image.addEventListener(
        "error",
        () => wrapper.classList.add("image-failed"),
        { once: true },
      );
  });
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c],
  );
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function moveSlider(section, direction) {
  section?.querySelector(".card-slider")?.scrollBy({
    left: direction * 330,
    behavior: "smooth",
  });
}

window.moveSlider = moveSlider;
