// Client behaviour for the whole site. With <ClientRouter /> this module runs
// once, so everything is (re)initialised on `astro:page-load` and torn down
// on `astro:before-swap`.

let cleanups: Array<() => void> = [];
const onCleanup = (fn: () => void) => cleanups.push(fn);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const root = document.documentElement;
  const backToTop = document.querySelector('[data-back-to-top]');

  const onScroll = () => {
    header.toggleAttribute('data-scrolled', window.scrollY > 60);
    backToTop?.toggleAttribute('data-visible', window.scrollY > 600);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  onCleanup(() => window.removeEventListener('scroll', onScroll));

  // Mobile menu
  const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const setOpen = (open: boolean) => {
    header.toggleAttribute('data-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    root.toggleAttribute('data-menu-open', open);
  };
  toggle?.addEventListener('click', () => setOpen(!header.hasAttribute('data-open')));
  const links = [...header.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
  const onKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && header.hasAttribute('data-open')) {
      setOpen(false);
      toggle?.focus();
    }
  };
  document.addEventListener('keydown', onKey);
  onCleanup(() => document.removeEventListener('keydown', onKey));

  // Theme toggle
  const themeToggle = header.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const syncTheme = () =>
    themeToggle?.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  syncTheme();
  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this page.
    }
    syncTheme();
  });

  // Highlight the nav link of the section crossing the middle of the viewport.
  let activeId = '';
  const sections = links
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length > 0) {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          activeId = entry.target.id;
          links.forEach((link) => {
            const current = link.hash === `#${activeId}`;
            link.classList.toggle('is-active', current);
            if (current) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
          });
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    sections.forEach((section) => spy.observe(section));
    onCleanup(() => spy.disconnect());
  }

  // Switching language keeps the visitor in the section they were reading.
  header.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((link) => {
    link.addEventListener('click', () => {
      if (activeId && activeId !== 'hero') link.hash = activeId;
    });
  });
}

function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (targets.length === 0) return;
  if (reducedMotion() || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((target) => observer.observe(target));
  onCleanup(() => observer.disconnect());
}

// Types and deletes the words of the hero, like the original Typed.js effect.
function initTyped() {
  const el = document.querySelector<HTMLElement>('[data-typed]');
  if (!el || reducedMotion()) return;

  const words: string[] = JSON.parse(el.dataset.typed ?? '[]');
  if (words.length < 2) return;

  const TYPE_MS = 100;
  const DELETE_MS = 50;
  const HOLD_MS = 2000;
  let word = 0;
  let length = words[0].length;
  let deleting = true;
  let timer = 0;

  const tick = () => {
    const current = words[word];
    if (deleting) {
      length -= 1;
      if (length === 0) {
        deleting = false;
        word = (word + 1) % words.length;
      }
    } else {
      length += 1;
      if (length === current.length) deleting = true;
    }
    el.textContent = words[word].slice(0, length);
    const holding = deleting && length === words[word].length;
    timer = window.setTimeout(tick, holding ? HOLD_MS : deleting ? DELETE_MS : TYPE_MS);
  };
  timer = window.setTimeout(tick, HOLD_MS);
  onCleanup(() => window.clearTimeout(timer));
}

// Category filter of the projects grid. The cards have view-transition names,
// so the browser animates them to their new positions.
function initFilters() {
  const group = document.querySelector<HTMLElement>('[data-filters]');
  if (!group) return;
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('button[data-filter]')];
  const items = [...document.querySelectorAll<HTMLElement>('[data-project]')];

  group.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-filter]');
    if (!button || button.getAttribute('aria-pressed') === 'true') return;
    const filter = button.dataset.filter;

    const update = () => {
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      items.forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.category !== filter;
        // Filtered cards should not wait for the scroll reveal.
        item.classList.add('is-visible');
      });
    };

    if (reducedMotion() || !document.startViewTransition) update();
    else document.startViewTransition(update);
  });
}

document.addEventListener('astro:page-load', () => {
  initHeader();
  initReveal();
  initTyped();
  initFilters();
});

document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((fn) => fn());
  cleanups = [];
});
