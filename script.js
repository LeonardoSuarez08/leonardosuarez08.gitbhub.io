const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});

elements.forEach(el => observer.observe(el));
