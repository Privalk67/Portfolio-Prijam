const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const yearElement = document.querySelector("#year");

if (yearElement) yearElement.textContent = new Date().getFullYear();

if (menuToggle && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "Close" : "Menu";
  };

  menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  // Escape closes the menu and returns focus to the button
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Reset the menu when the window grows to desktop width
  window.matchMedia("(min-width: 801px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}

// Highlight the nav link for the section currently on screen
const anchors = [...document.querySelectorAll('#navLinks a[href^="#"]')];
if ("IntersectionObserver" in window && anchors.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      anchors.forEach((a) => {
        if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  anchors.forEach((a) => {
    const section = document.querySelector(a.getAttribute("href"));
    if (section) spy.observe(section);
  });
}

// Light / dark theme (remembered in this browser)
const themeBtn = document.querySelector("#themeToggle");
if (themeBtn) {
  const root = document.documentElement;
  const sync = () => {
    const light = root.dataset.theme === "light";
    themeBtn.textContent = light ? "Dark" : "Light";
    themeBtn.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", light ? "#f6f4ef" : "#0e1220");
  };
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    sync();
  });
  sync();
}

// Skill filter
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((btn) => btn.addEventListener("click", () => {
  filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
  document.querySelectorAll(".skills li").forEach((li) => {
    li.hidden = btn.dataset.f !== "all" && !li.dataset.tags.split(" ").includes(btn.dataset.f);
  });
}));

// Hero editor: change the goal, replay the typing
const goalInput = document.querySelector("#goalInput");
if (goalInput) {
  goalInput.addEventListener("input", () => {
    const value = goalInput.value.trim() || "keep learning";
    document.querySelector("#goalText").textContent = value;
    document.querySelector("#goalOut").textContent = value;
  });
  document.querySelector("#replay").addEventListener("click", () => {
    const lines = document.querySelectorAll(".ln");
    lines.forEach((l) => { l.style.animation = "none"; });
    void document.body.offsetWidth;
    lines.forEach((l) => { l.style.animation = ""; });
  });
}