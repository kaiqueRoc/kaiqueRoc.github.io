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

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 40);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".level-fill").forEach((bar) => {
          bar.style.width = bar.style.width;
        });
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".skill-levels").forEach((el) => observer.observe(el));
