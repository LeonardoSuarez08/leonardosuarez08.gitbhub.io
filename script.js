// ---------- Menú móvil ----------
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Terminal: texto tipiado ----------
const typedEl = document.getElementById('typed');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const query = "SELECT * FROM developers WHERE nombre = 'Leonardo';";

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = query;
  } else {
    let i = 0;
    const type = () => {
      if (i <= query.length) {
        typedEl.textContent = query.slice(0, i);
        i++;
        setTimeout(type, 35);
      }
    };
    type();
  }
}

// ---------- Reveal al hacer scroll ----------
const revealTargets = document.querySelectorAll(
  '.sobre-mi, .proyectos, .contacto, .card, .stack-list'
);
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in-view'));
}
