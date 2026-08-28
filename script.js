document.getElementById("year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  ".section-head, .intro-copy, .intro-photo, .feature-card, .price-card, .gallery-grid figure, .access-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
  observer.observe(el);
});
