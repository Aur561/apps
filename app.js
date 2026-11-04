(() => {
  'use strict';

  const { IMG_BASE, DEFAULT_LANG, LANGS, ui, categories, apps } = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const imgUrl = (file) => IMG_BASE + encodeURIComponent(file);
  const STORAGE_KEY = 'portfolio-lang';

  function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') node.className = v;
      else if (k === 'style') node.style.cssText = v;
      else node.setAttribute(k, v);
    }
    node.append(...children);
    return node;
  }

  /* ----- Langue ----- */
  function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch { /* stockage indisponible */ }
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (LANGS.includes(nav)) return nav;
    return LANGS.includes('en') && nav ? 'en' : DEFAULT_LANG;
  }

  let lang = detectLang();
  let currentCat = 'all';

  /* ----- Lightbox ----- */
  const lb = $('lightbox');
  function openShot(img, caption) {
    lb.querySelector('img').src = img.currentSrc || img.src;
    lb.querySelector('img').alt = img.alt;
    lb.querySelector('p').textContent = caption;
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
  }
  lb.addEventListener('click', () => lb.close());
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());

  function shot(image, appName, t) {
    const alt = image.alt[lang];
    const img = el('img', { src: imgUrl(image.file), alt: `${appName} — ${alt}`, loading: 'lazy', decoding: 'async' });
    const fig = el('figure', { class: `shot ${image.kind || 'wide'}` },
      el('button', { type: 'button', class: 'shot-btn', 'aria-label': `${t.enlarge} : ${alt}` }, img),
      el('figcaption', {}, alt));
    fig.querySelector('button').addEventListener('click', () => openShot(img, `${appName} — ${alt}`));
    // Image introuvable : on affiche un repère clair plutôt qu'un cadre cassé
    img.addEventListener('error', () => { fig.classList.add('missing'); img.removeAttribute('src'); });
    return fig;
  }

  /* ----- Textes statiques (data-i18n*) ----- */
  function applyStatic() {
    const t = ui[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((n) => {
      const v = t[n.dataset.i18n];
      if (v === undefined) return;
      n.textContent = v.replace('{year}', new Date().getFullYear());
    });
    document.querySelectorAll('[data-i18n-html]').forEach((n) => {
      const v = t[n.dataset.i18nHtml];
      if (v !== undefined) n.innerHTML = v; // chaînes internes de data.js uniquement
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((n) => {
      const v = t[n.dataset.i18nAria];
      if (v !== undefined) n.setAttribute('aria-label', v);
    });
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.metaDescription);
    document.title = t.pageTitle;
    document.querySelectorAll('.lang button').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
      b.classList.toggle('on', b.dataset.lang === lang);
    });
  }

  /* ----- Applications + filtres ----- */
  const root = $('apps');
  const chips = $('chips');

  function renderApps() {
    const t = ui[lang];
    root.replaceChildren();
    apps.forEach((app, i) => {
      const name = app.name[lang];
      const intro = el('div', { class: 'demo-intro' },
        el('span', { class: 'num' }, String(i + 1).padStart(2, '0') + ' · ' + categories[app.category][lang]),
        el('h2', {}, name),
        el('p', {}, app.description[lang]),
        el('p', { class: 'problem' }, el('span', {}, t.problemLabel), app.problem[lang]),
        el('h3', { class: 'skills-title' }, t.skillsLabel),
        el('ul', { class: 'points' }, ...app.skills[lang].map((p) => el('li', {}, p))));
      const gallery = el('div', { class: 'gallery' }, ...app.images.map((im) => shot(im, name, t)));
      const sec = el('section', { class: 'demo', id: app.id, style: `--accent:${app.accent}` },
        el('div', { class: 'demo-inner' }, intro, gallery));
      sec.dataset.category = app.category;
      root.append(sec);
    });
    applyFilter();
  }

  function applyFilter() {
    let n = 0;
    root.querySelectorAll('.demo').forEach((s) => {
      const show = currentCat === 'all' || s.dataset.category === currentCat;
      s.hidden = !show;
      s.classList.toggle('alt', show && n % 2 === 1);
      if (show) n++;
    });
  }

  function renderChips() {
    const t = ui[lang];
    chips.replaceChildren();
    const keys = ['all', ...new Set(apps.map((a) => a.category))];
    keys.forEach((key) => {
      const label = key === 'all' ? t.filterAll : categories[key][lang];
      const count = key === 'all' ? apps.length : apps.filter((a) => a.category === key).length;
      const on = key === currentCat;
      const b = el('button', { type: 'button', class: on ? 'on' : '', 'aria-pressed': String(on) }, `${label} `, el('small', {}, String(count)));
      b.addEventListener('click', () => {
        currentCat = key;
        chips.querySelectorAll('button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
        applyFilter();
      });
      chips.append(b);
    });
  }

  function render() {
    applyStatic();
    renderChips();
    renderApps();
  }

  /* ----- Sélecteur de langue ----- */
  document.querySelectorAll('.lang button').forEach((b) => {
    b.addEventListener('click', () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignoré */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
      render();
    });
  });

  render();
})();
