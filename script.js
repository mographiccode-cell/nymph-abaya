/* =================================================================
   NYMPH ABAYA — Interactions & Logic
   ================================================================= */

(() => {
  'use strict';

  // ============ TYPES DATA (from real @nymph.abaya_ account) ============
  const TYPES = [
    {
      id: 'featured-burqu',
      title_ar: 'البراقع NYMPH',
      desc_ar: 'توقيعنا المميّز في عالم NYMPH — حيث يلتقي السحر بالأنوثة في كل نظرة.',
      image: 'images/posts/burqu-nymph.jpg',
      likes: 117,
      num: '𝟎𝟏',
      featured: true
    },
    {
      id: 'most-loved',
      title_ar: 'الأكثر إعجاباً',
      desc_ar: 'القطعة التي أسرت ٦٨٧ قلباً — لأن الأناقة الحقيقية أبلغ من كل الكلام.',
      image: 'images/posts/post-10.jpg',
      likes: 687,
      num: '𝟎𝟐',
      featured: true
    },
    {
      id: 'bisht',
      title_ar: 'بقصة بشت',
      desc_ar: 'حضورٌ مهيب بلمسة من السحر الخليجي — لمن تترك أثراً أينما حَلّت.',
      image: 'images/posts/abaya-bisht-160.jpg',
      likes: 169,
      num: '𝟎𝟑'
    },
    {
      id: 'classic',
      title_ar: 'كلاسيكية',
      desc_ar: 'أناقة لا تشيخ — قطعة تحتضن روحكِ في كل صباح ومساء.',
      image: 'images/posts/post-11.jpg',
      likes: 122,
      num: '𝟎𝟒'
    },
    {
      id: 'practical',
      title_ar: 'عملية',
      desc_ar: 'راحة يومية بلمسة من الرُقي — لإطلالة تنبض بالحياة والثقة.',
      image: 'images/posts/abaya-130.jpg',
      likes: 237,
      num: '𝟎𝟓'
    },
    {
      id: 'luxury',
      title_ar: 'فاخرة',
      desc_ar: 'إصدار يحمل بصمة NYMPH — لأمسياتٍ تستحقّ التميّز.',
      image: 'images/posts/post-05.jpg',
      likes: 210,
      num: '𝟎𝟔'
    }
  ];

  // ============ GALLERY DATA ============
  const GALLERY = [
    { image: 'images/posts/post-09.jpg', size: 'tall' },
    { image: 'images/posts/abaya-130.jpg', size: '' },
    { image: 'images/posts/reel-01.jpg', size: 'wide' },
    { image: 'images/posts/post-07.jpg', size: '' },
    { image: 'images/posts/post-05.jpg', size: 'big' },
    { image: 'images/posts/abaya-bisht-160.jpg', size: '' },
    { image: 'images/posts/reel-02.jpg', size: 'tall' },
    { image: 'images/posts/post-11.jpg', size: '' }
  ];

  // ============ FORMATTER ============
  const fmtAR = (n) => new Intl.NumberFormat('ar-EG').format(n);

  // ============ RENDER TYPES ============
  function renderTypes() {
    const grid = document.getElementById('typesGrid');
    if (!grid) return;
    grid.innerHTML = TYPES.map((t, i) => {
      let cls = 'type-card';
      if (i === 0) cls += ' type-card--hero';
      else if (i === 1) cls += ' type-card--tall';
      else if (t.featured) cls += ' type-card--featured';
      return `
      <article class="${cls} fade-in" style="transition-delay:${i * 70}ms" data-id="${t.id}">
        <div class="type-card__img">
          <img src="${t.image}" alt="${t.title_ar}" loading="lazy" />
          <div class="type-card__overlay"></div>
          <span class="type-card__num">${t.num}</span>
          <span class="type-card__likes">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ${fmtAR(t.likes)}
          </span>
        </div>
        <div class="type-card__body">
          <h3 class="type-card__title">${t.title_ar}</h3>
          <p class="type-card__desc">${t.desc_ar}</p>
          <a class="type-card__link" href="https://www.instagram.com/nymph.abaya_/" target="_blank" rel="noopener">
            <span>اسألي عن ${t.title_ar}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </a>
        </div>
      </article>
    `}).join('');
  }

  // ============ RENDER GALLERY ============
  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = GALLERY.map((g, i) => `
      <a href="https://www.instagram.com/nymph.abaya_/" target="_blank" rel="noopener" class="g-item g-item--${g.size} fade-in" style="transition-delay:${i * 50}ms" aria-label="صورة من معرض نيمف عباية">
        <img src="${g.image}" alt="معرض نيمف عباية" loading="lazy" />
      </a>
    `).join('');
  }

  // ============ THEME ============
  function initTheme() {
    const stored = localStorage.getItem('nymph-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    if (initial === 'dark') document.body.classList.add('dark');

    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('nymph-theme', isDark ? 'dark' : 'light');
    });
  }

  // ============ NAV ============
  function initNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => menu.classList.toggle('open'));

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
      }
    });
  }

  // ============ REVEAL ON SCROLL ============
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
  }

  // ============ SMOOTH SCROLL ============
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // ============ NAV SHADOW ON SCROLL ============
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const handler = () => {
      const y = window.scrollY;
      if (y > 50) nav.style.boxShadow = '0 4px 24px rgba(42, 32, 37, .04)';
      else nav.style.boxShadow = 'none';
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
  }

  // ============ FAQ SINGLE OPEN ============
  function initFaq() {
    const items = document.querySelectorAll('.faq__item');
    items.forEach(item => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach(other => { if (other !== item) other.open = false; });
        }
      });
    });
  }

  // ============ YEAR ============
  function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ============ INIT ============
  document.addEventListener('DOMContentLoaded', () => {
    renderTypes();
    renderGallery();
    initTheme();
    initNav();
    initNavScroll();
    initFaq();
    initSmoothScroll();
    setYear();
    setTimeout(initReveal, 50);
  });
})();
