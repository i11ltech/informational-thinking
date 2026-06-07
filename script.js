let tocData = [];
let flatChapters = [];
let currentIndex = -1;

document.documentElement.setAttribute("data-theme", "dark");

const tocEl = document.getElementById("toc");
const contentEl = document.getElementById("content");
const titleEl = document.getElementById("chapterTitle");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const themeToggle = document.getElementById("themeToggle");
const homeBtn = document.getElementById("homeBtn");

async function init() {
  const res = await fetch("toc.json");
  tocData = await res.json();

  // Flatten chapters for navigation
  flatChapters = tocData.flatMap(section => section.items);

  renderTOC(tocData);

  // Load home page by default
  loadChapterById("home");
}

function renderTOC(data) {
  tocEl.innerHTML = "";
  data.forEach((section, sIndex) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "toc-section";

    const header = document.createElement("div");
    header.className = "toc-section-header";
    header.innerHTML = `
      <span class="toc-section-title">${section.section}</span>
      <span>▾</span>
    `;

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "toc-items";

    section.items.forEach((item, iIndex) => {
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

  const res = await fetch("./chapters/" + chapter.file);
  var text = await res.text();
  const parser = new DOMParser();
    // Remove escaped quotes
    text = text.replace(/\\"/g, '"');

    // Remove literal empty quotes
    text = text.replace(/""/g, "");

    // Remove outer quotes if present
    text = text.replace(/^"(.*)"$/, "$1");

  titleEl.textContent = chapter.title;

    if (chapter.file.endsWith(".md")) {
        contentEl.innerHTML = marked.parse(text);
    } else {
        contentEl.innerHTML = parser.parseFromString(text, 'text/html').body.textContent;
    }

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
  if (currentIndex > 0) {
    const prev = flatChapters[currentIndex - 1];
    loadChapterById(prev.id);
  }
};

nextBtn.onclick = () => {
  if (currentIndex < flatChapters.length - 1) {
    const next = flatChapters[currentIndex + 1];
    loadChapterById(next.id);
  }
};

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  if (!q) {
    renderTOC(tocData);
    if (currentIndex >= 0) updateActiveTOC(flatChapters[currentIndex].id);
    return;
  }

  const filtered = tocData.map(section => ({
    section: section.section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(q)
    )
  })).filter(section => section.items.length > 0);

  renderTOC(filtered);
});

themeToggle.onclick = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  themeToggle.textContent = next === "dark" ? "🌙" : "☀️";
};


homeBtn.onclick = () => {
  loadChapterById("home");
};

init();
