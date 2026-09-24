(() => {
  const revealSelectors = [
    ".home-bio > .notice--info",
    ".home-bio > p",
    ".page__content > h1",
    ".pub-filter",
    ".pub-item"
  ];

  const elements = Array.from(document.querySelectorAll(revealSelectors.join(",")))
    .filter((element) => !element.closest(".page__footer"));

  if (!elements.length) {
    return;
  }

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function show(element) {
    element.classList.add("is-visible");
  }

  elements.forEach((element, index) => {
    element.classList.add("reveal-item");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 24, 144)}ms`);
  });

  if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
    elements.forEach(show);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.12
  });

  elements.forEach((element) => observer.observe(element));

  function handleMotionPreference() {
    if (reduceMotionQuery.matches) {
      observer.disconnect();
      elements.forEach(show);
    }
  }

  if (reduceMotionQuery.addEventListener) {
    reduceMotionQuery.addEventListener("change", handleMotionPreference);
  } else if (reduceMotionQuery.addListener) {
    reduceMotionQuery.addListener(handleMotionPreference);
  }
})();
