(() => {
  const root = document.documentElement;
  const storageKey = "ivalice-theme";

  const getPreferredTheme = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme) => {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(storageKey, theme);

    document.querySelectorAll("[data-theme-icon]").forEach((icon) => {
      const mode = icon.getAttribute("data-theme-icon");
      icon.classList.toggle("hidden", mode !== theme);
    });

    document.querySelectorAll("[data-hero-logo]").forEach((logo) => {
      const mode = logo.getAttribute("data-hero-logo");
      logo.classList.toggle("hidden", mode !== theme);
    });
  };

  applyTheme(getPreferredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = root.classList.contains("dark") ? "light" : "dark";
      applyTheme(next);
    });
  });

  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        form.classList.add("animate-pulse");
        setTimeout(() => form.classList.remove("animate-pulse"), 500);
        return;
      }

      const subject = encodeURIComponent(`Contato pelo site — ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n— ${name}\n${email}`
      );
      window.location.href = `mailto:contato@ivalice.com.br?subject=${subject}&body=${body}`;
    });
  }
})();
