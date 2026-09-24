(() => {
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  const topicLinks = Array.from(document.querySelectorAll(".research-topic-link"));
  const publications = Array.from(document.querySelectorAll(".pub-item"));
  const publicationList = document.querySelector(".publication-list");

  if (!filterButtons.length || !publications.length) {
    return;
  }

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeTrace = null;

  function matchesFilter(publication, filter) {
    const categories = (publication.dataset.categories || "").split(" ");
    return filter === "all" || categories.includes(filter);
  }

  function clearPreview() {
    filterButtons.forEach((button) => button.classList.remove("is-preview"));
    topicLinks.forEach((link) => link.classList.remove("is-preview"));
    publications.forEach((publication) => {
      publication.classList.remove("is-preview-match", "is-preview-muted");
    });
  }

  function previewFilter(filter) {
    if (!filter || filter === "all") {
      return;
    }

    clearPreview();
    filterButtons.forEach((button) => {
      button.classList.toggle("is-preview", button.dataset.filter === filter);
    });
    topicLinks.forEach((link) => {
      link.classList.toggle("is-preview", link.dataset.filter === filter);
    });
    publications.forEach((publication) => {
      const matches = matchesFilter(publication, filter);
      publication.classList.toggle("is-preview-match", matches);
      publication.classList.toggle("is-preview-muted", !matches);
    });
  }

  function clearTrace() {
    activeTrace = null;
    publicationList?.classList.remove("is-tracing");
    filterButtons.forEach((button) => button.classList.remove("is-trace-target"));
    publications.forEach((publication) => {
      publication.classList.remove("is-trace-match", "is-trace-muted");
    });
  }

  function scrollToPublicationList() {
    const target = document.querySelector("#publications");
    if (target) {
      target.scrollIntoView({
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
        block: "start"
      });
    }
  }

  function applyFilter(filter, scrollToPublications) {
    clearPreview();
    clearTrace();

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    topicLinks.forEach((link) => {
      const active = link.dataset.filter === filter;
      link.classList.toggle("active", active);
      link.setAttribute("aria-pressed", String(active));
    });

    publications.forEach((publication) => {
      const visible = matchesFilter(publication, filter);
      publication.hidden = !visible;

      if (visible && !reduceMotionQuery.matches) {
        publication.classList.add("is-filter-entering");
        requestAnimationFrame(() => publication.classList.remove("is-filter-entering"));
      }
    });

    if (scrollToPublications) {
      scrollToPublicationList();
    }
  }

  function applyTrace(filter) {
    const shouldClear = activeTrace === filter;

    clearPreview();
    clearTrace();

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === "all";
      button.classList.toggle("active", active);
      button.classList.toggle("is-trace-target", !shouldClear && button.dataset.filter === filter);
      button.setAttribute("aria-pressed", String(active));
    });

    topicLinks.forEach((link) => {
      const active = !shouldClear && link.dataset.filter === filter;
      link.classList.toggle("active", active);
      link.setAttribute("aria-pressed", String(active));
    });

    publications.forEach((publication) => {
      publication.hidden = false;
      if (!shouldClear) {
        const matches = matchesFilter(publication, filter);
        publication.classList.toggle("is-trace-match", matches);
        publication.classList.toggle("is-trace-muted", !matches);
      }
    });

    if (!shouldClear) {
      activeTrace = filter;
      publicationList?.classList.add("is-tracing");
    }

    scrollToPublicationList();
  }

  function bindPreview(element) {
    const filter = element.dataset.filter;
    element.addEventListener("pointerenter", () => previewFilter(filter));
    element.addEventListener("pointerleave", clearPreview);
    element.addEventListener("focus", () => previewFilter(filter));
    element.addEventListener("blur", clearPreview);
  }

  filterButtons.forEach((button) => {
    bindPreview(button);
    button.addEventListener("click", () => applyFilter(button.dataset.filter, false));
  });

  topicLinks.forEach((link) => {
    bindPreview(link);
    link.addEventListener("click", () => applyTrace(link.dataset.filter));
  });
})();
