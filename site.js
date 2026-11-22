// Shared by every page: theme (remembered across pages) and active nav link.
(function () {
  let theme = "dark";
  try { theme = localStorage.getItem("theme") || "dark"; } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", () => {
    const page = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
    const current = page === "index" || page === "" ? "home" : page;
    document.querySelectorAll(".site-links a[data-nav]").forEach(a => {
      a.classList.toggle("active", a.dataset.nav === current);
    });

    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    const setIcon = t => { toggle.textContent = t === "dark" ? "🌙" : "☀️"; };
    setIcon(theme);
    toggle.onclick = () => {
      theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("theme", theme); } catch (e) {}
      setIcon(theme);
    };
  });
})();
