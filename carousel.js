// Landing page carousel: 6 random quotes from carousel.json, each with its example.
(async function () {
  const SHOW = 6;

  const root = document.getElementById("carousel");
  const track = document.getElementById("carouselTrack");
  const dots = document.getElementById("carouselDots");
  if (!root) return;

  let items;
  try {
    const res = await fetch("carousel.json");
    if (!res.ok) return;
    items = await res.json();
  } catch (e) {
    return; // the card stays hidden if the quotes can't be loaded
  }

  if (!items.length) return;

  let shown = [];
  let current = 0;

  // A random set, leaving out the quotes on screen now (if there are enough others).
  function pickFresh() {
    const others = items.filter(item => !shown.includes(item));
    const pool = others.length >= SHOW ? others : [...items];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, SHOW);
  }

  const add = (parent, tag, className, text) => {
    const el = document.createElement(tag);
    el.className = className;
    if (text) el.textContent = text;
    parent.appendChild(el);
    return el;
  };

  // Replace the slides and dots with a fresh set, starting at the first one.
  function showFresh() {
    shown = pickFresh();
    track.replaceChildren();
    dots.replaceChildren();
    shown.forEach((item, i) => {
      const slide = add(track, "div", "carousel-slide");
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-label", `${i + 1} of ${shown.length}`);
      add(slide, "p", "carousel-quote", item.quote);
      const example = add(slide, "div", "carousel-example");
      add(example, "span", "carousel-label", "Example");
      add(example, "p", "", item.example);

      const dot = add(dots, "button", "");
      dot.type = "button";
      dot.setAttribute("aria-label", `Quote ${i + 1}`);
      dot.onclick = () => goTo(i);
    });
    track.scrollTo({ left: 0, behavior: "auto" });
    mark(0);
  }

  function mark(i) {
    current = i;
    [...dots.children].forEach((dot, d) => {
      if (d === i) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function goTo(i) {
    const target = (i + shown.length) % shown.length;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    mark(target);
    track.scrollTo({ left: target * track.clientWidth, behavior: still ? "auto" : "smooth" });
  }

  document.getElementById("carouselPrev").onclick = () => goTo(current - 1);
  document.getElementById("carouselNext").onclick = () => goTo(current + 1);
  track.addEventListener("keydown", e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    goTo(current + (e.key === "ArrowRight" ? 1 : -1));
  });

  // After a swipe or scroll settles, light the matching dot.
  let settle;
  track.addEventListener("scroll", () => {
    clearTimeout(settle);
    settle = setTimeout(() => mark(Math.round(track.scrollLeft / track.clientWidth)), 120);
  });

  // Keep the same quote in view when the window is resized.
  window.addEventListener("resize", () => {
    track.scrollTo({ left: current * track.clientWidth, behavior: "auto" });
  });

  document.getElementById("carouselRefresh").onclick = showFresh;

  showFresh();
  root.hidden = false;
})();
