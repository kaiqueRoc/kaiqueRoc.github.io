document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

/* Stack tabs */
const stackTabs = document.querySelectorAll(".stack-tab");
const stackPanels = document.querySelectorAll(".stack-panel");

stackTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    stackTabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    stackPanels.forEach((panel) => {
      const isActive = panel.id === `panel-${target}`;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

/* Animate proficiency bars on scroll */
const animateBars = (container) => {
  container.querySelectorAll(".level-fill").forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      bar.style.setProperty("--w", `${width}%`);
      bar.classList.add("animated");
    }
  });
};

const levelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateBars(entry.target);
        levelObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".skill-levels").forEach((el) => levelObserver.observe(el));
