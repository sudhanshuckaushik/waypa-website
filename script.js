const nav = document.querySelector("[data-nav]");
const accordion = document.querySelector("[data-accordion]");
const navToggle = document.querySelector(".nav-toggle");

const updateNav = () => {
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 160);
};

updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

if (nav && navToggle) {
  const closeMobileNav = () => {
    nav.removeAttribute("data-mobile-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.hasAttribute("data-mobile-open");
    if (isOpen) {
      closeMobileNav();
    } else {
      nav.setAttribute("data-mobile-open", "");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  });

  for (const link of nav.querySelectorAll("nav a")) {
    link.addEventListener("click", closeMobileNav);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.hasAttribute("data-mobile-open")) {
      closeMobileNav();
    }
  });
}

if (accordion) {
  const triggers = Array.from(accordion.querySelectorAll(".accordion-trigger"));

  for (const trigger of triggers) {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("aria-controls");
      const targetPanel = targetId ? document.getElementById(targetId) : null;

      for (const otherTrigger of triggers) {
        const otherId = otherTrigger.getAttribute("aria-controls");
        const otherPanel = otherId ? document.getElementById(otherId) : null;
        const isActive = otherTrigger === trigger;

        otherTrigger.setAttribute("aria-expanded", String(isActive));
        if (otherPanel) {
          otherPanel.hidden = !isActive;
          otherPanel.classList.toggle("is-open", isActive);
        }
      }

      if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.classList.add("is-open");
      }
    });
  }
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  for (const item of revealItems) {
    observer.observe(item);
  }
} else {
  for (const item of revealItems) {
    item.classList.add("is-visible");
  }
}
