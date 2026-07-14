(() => {
  const STORAGE_KEY = "ivalice-lang";
  const DEFAULT_LANG = "pt";

  const dict = {
    pt: {
      "meta.home.title": "Ivalice Labs — Aplicativos móveis e produtos digitais",
      "meta.home.desc":
        "A Ivalice Labs cria aplicativos móveis e produtos digitais de alta qualidade, com foco em qualidade, simplicidade e usabilidade.",
      "meta.portfolio.title": "Portfólio — Ivalice Labs",
      "meta.portfolio.desc":
        "Portfólio da Ivalice Labs — primeiros produtos digitais em breve.",
      "meta.contact.title": "Contato — Ivalice Labs",
      "meta.contact.desc":
        "Entre em contato com a Ivalice Labs. Vamos construir algo extraordinário juntos.",
      "meta.privacy.title": "Política de Privacidade — Ivalice Labs",
      "meta.privacy.desc":
        "Política de Privacidade da Ivalice Labs, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
      "meta.terms.title": "Termos de Uso — Ivalice Labs",
      "meta.terms.desc":
        "Termos de Uso do site e dos serviços institucionais da Ivalice Labs.",

      "a11y.home": "Ivalice Labs — início",
      "a11y.theme": "Alternar tema claro ou escuro",
      "a11y.menu": "Abrir menu",
      "a11y.nav": "Principal",
      "a11y.navMobile": "Mobile",
      "a11y.lang": "Idioma",

      "nav.home": "Início",
      "nav.portfolio": "Portfólio",
      "nav.contact": "Contato",
      "nav.privacy": "Privacidade",
      "nav.terms": "Termos",

      "home.subtitle":
        "Desenvolvemos aplicativos móveis e produtos digitais de alta qualidade.",
      "home.body":
        "Criamos experiências de software inovadoras, com foco em qualidade, simplicidade e usabilidade.",
      "home.cta": "Fale conosco",

      "portfolio.title": "Portfólio em construção",
      "portfolio.body":
        "Estamos preparando nossos primeiros produtos digitais. Novos projetos serão publicados em breve.",
      "portfolio.cta": "Quero ser avisado",

      "contact.eyebrow": "Fale conosco",
      "contact.title": "Vamos construir algo extraordinário",
      "contact.body":
        "Tem um projeto em mente ou quer conversar sobre um produto digital sob medida? Envie uma mensagem — retornamos o mais rápido possível.",
      "contact.location": "Brasil",
      "contact.social": "Redes",
      "contact.name": "Nome completo",
      "contact.namePh": "Seu nome",
      "contact.email": "E-mail",
      "contact.emailPh": "seu@email.com",
      "contact.message": "Mensagem",
      "contact.messagePh": "Descreva seu projeto ou dúvida...",
      "contact.consent":
        'Ao enviar, você concorda com o tratamento dos dados conforme nossa <a href="privacy.html" class="font-medium text-brand-purple hover:underline">Política de Privacidade</a>.',
      "contact.submit": "Enviar mensagem",
      "contact.mailSubject": "Contato pelo site",

      "footer.rights": "© 2026 Ivalice Labs. Todos os direitos reservados.",

      "legal.eyebrow": "Documento legal",
      "legal.updated": "Última atualização: 13 de julho de 2026",
    },
    en: {
      "meta.home.title": "Ivalice Labs — Mobile apps & digital products",
      "meta.home.desc":
        "Ivalice Labs builds high-quality mobile applications and digital products with a focus on quality, simplicity, and usability.",
      "meta.portfolio.title": "Portfolio — Ivalice Labs",
      "meta.portfolio.desc":
        "Ivalice Labs portfolio — first digital products coming soon.",
      "meta.contact.title": "Contact — Ivalice Labs",
      "meta.contact.desc":
        "Get in touch with Ivalice Labs. Let's build something extraordinary together.",
      "meta.privacy.title": "Privacy Policy — Ivalice Labs",
      "meta.privacy.desc":
        "Ivalice Labs Privacy Policy, aligned with Brazil's General Data Protection Law (LGPD).",
      "meta.terms.title": "Terms of Use — Ivalice Labs",
      "meta.terms.desc":
        "Terms of Use for the Ivalice Labs website and institutional services.",

      "a11y.home": "Ivalice Labs — home",
      "a11y.theme": "Toggle light or dark theme",
      "a11y.menu": "Open menu",
      "a11y.nav": "Primary",
      "a11y.navMobile": "Mobile",
      "a11y.lang": "Language",

      "nav.home": "Home",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",

      "home.subtitle":
        "Building high-quality mobile applications and digital products.",
      "home.body":
        "We create innovative software experiences with a focus on quality, simplicity, and usability.",
      "home.cta": "Contact us",

      "portfolio.title": "Portfolio under construction",
      "portfolio.body":
        "We are preparing our first digital products. New projects will be published soon.",
      "portfolio.cta": "Notify me",

      "contact.eyebrow": "Get in touch",
      "contact.title": "Let's build something extraordinary",
      "contact.body":
        "Have a project in mind, or want to discuss a custom digital product? Send a message — we'll get back to you as soon as possible.",
      "contact.location": "Brazil",
      "contact.social": "Social",
      "contact.name": "Full name",
      "contact.namePh": "Your name",
      "contact.email": "Email",
      "contact.emailPh": "you@email.com",
      "contact.message": "Message",
      "contact.messagePh": "Describe your project or question...",
      "contact.consent":
        'By submitting, you agree to the processing of your data under our <a href="privacy.html" class="font-medium text-brand-purple hover:underline">Privacy Policy</a>.',
      "contact.submit": "Send message",
      "contact.mailSubject": "Website inquiry",

      "footer.rights": "© 2026 Ivalice Labs. All rights reserved.",

      "legal.eyebrow": "Legal document",
      "legal.updated": "Last updated: July 13, 2026",
    },
  };

  const getLang = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "pt" ? stored : DEFAULT_LANG;
  };

  const t = (key, lang = getLang()) =>
    (dict[lang] && dict[lang][key]) || dict.pt[key] || key;

  const setActiveLangButtons = (lang) => {
    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
      const active = btn.getAttribute("data-lang-set") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  };

  const applyMeta = (lang) => {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    const title = t(`meta.${page}.title`, lang);
    const desc = t(`meta.${page}.desc`, lang);
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);
  };

  const applyTranslations = (lang) => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);
      if (value == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key, lang));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key, lang));
    });

    applyMeta(lang);
    setActiveLangButtons(lang);
  };

  window.IvaliceI18n = {
    getLang,
    t,
    apply: applyTranslations,
    setLang: (lang) => {
      if (lang !== "pt" && lang !== "en") return;
      applyTranslations(lang);
    },
  };

  applyTranslations(getLang());

  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-lang-set]");
    if (!btn) return;
    const lang = btn.getAttribute("data-lang-set");
    applyTranslations(lang);
  });
})();
