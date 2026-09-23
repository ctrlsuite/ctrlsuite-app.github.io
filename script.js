// Reveals each feature row as it scrolls into view. Skipped entirely for anyone who asked for less motion,
// and every row still shows (CSS default is visible) if this never runs at all.
(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rows = document.querySelectorAll('.feature');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    rows.forEach((row) => row.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
  );
  rows.forEach((row) => observer.observe(row));
  // A row this never reaches (a throttled background tab, a browser quirk) still shows: a few seconds is well
  // past any reasonable scroll, so nothing left hidden by then was ever going to be revealed by scrolling.
  setTimeout(() => rows.forEach((row) => row.classList.add('in')), 4000);
})();
