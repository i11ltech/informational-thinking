// Book reader. Each chapter is its own page: book.html#a1
// Section headers in the sidebar only collapse/expand their chapters.
// Shared by every book page. Each page sets its own sources on <body>:
//   data-toc="toc.json"  data-chapters="./chapters/"  data-home="about"
// (those are the defaults, used by book.html).

const bookConfig = document.body.dataset;
const TOC_URL = bookConfig.toc || "toc.json";
const CHAPTER_DIR = bookConfig.chapters || "./chapters/";
const HOME_ID = bookConfig.home || "about";

let tocData = [];
let flatChapters = [];
let currentIndex = -1;

const tocEl = document.getElementById("toc");
const contentEl = document.getElementById("content");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

async function init() {
  const res = await fetch(TOC_URL);
  tocData = await res.json();

  flatChapters = tocData.flatMap(section => section.items);

  renderTOC(tocData);

  const fromHash = decodeURIComponent(location.hash.slice(1));
  loadChapterById(flatChapters.some(ch => ch.id === fromHash) ? fromHash : HOME_ID);
}

window.addEventListener("hashchange", () => {
  const id = decodeURIComponent(location.hash.slice(1));
  if (flatChapters[currentIndex]?.id !== id) loadChapterById(id);
});

function renderTOC(data) {
  tocEl.innerHTML = "";
  data.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "toc-section";

    const header = document.createElement("div");
    header.className = "toc-section-header";
    header.innerHTML = `
      <span class="toc-section-title">${esc(section.section)}</span>
      <span>▾</span>
    `;

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "toc-items";

    section.items.forEach(item => {
      const li = document.createElement("div");
      li.className = "toc-item";
      li.textContent = item.title;
      li.dataset.id = item.id;
      li.onclick = () => loadChapterById(item.id);
      itemsDiv.appendChild(li);
    });

    header.onclick = () => {
      const isHidden = itemsDiv.style.display === "none";
      itemsDiv.style.display = isHidden ? "block" : "none";
      header.querySelector("span:last-child").textContent = isHidden ? "▾" : "▸";
    };

    sectionDiv.appendChild(header);
    sectionDiv.appendChild(itemsDiv);
    tocEl.appendChild(sectionDiv);
  });
}

async function loadChapterById(id) {
  const index = flatChapters.findIndex(ch => ch.id === id);
  if (index === -1) return;

  currentIndex = index;
  const chapter = flatChapters[index];

  const res = await fetch(CHAPTER_DIR + chapter.file);
  contentEl.innerHTML = marked.parse(await res.text());

  if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
  contentEl.scrollTop = 0;
  updateActiveTOC(id);
  updateNavButtons();
}

function updateActiveTOC(id) {
  document.querySelectorAll(".toc-item").forEach(el => {
    el.classList.toggle("active", el.dataset.id === id);
  });
}

function updateNavButtons() {
  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= flatChapters.length - 1;
}

prevBtn.onclick = () => {
  if (currentIndex > 0) loadChapterById(flatChapters[currentIndex - 1].id);
};

nextBtn.onclick = () => {
  if (currentIndex < flatChapters.length - 1) loadChapterById(flatChapters[currentIndex + 1].id);
};

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  if (!q) {
    renderTOC(tocData);
  } else {
    const filtered = tocData.map(section => ({
      ...section,
      items: section.items.filter(item => item.title.toLowerCase().includes(q))
    })).filter(section => section.items.length > 0);
    renderTOC(filtered);
  }
  if (currentIndex >= 0) updateActiveTOC(flatChapters[currentIndex].id);
});

homeBtn.onclick = () => loadChapterById(HOME_ID);

init();
