(() => {
  const nav = document.querySelector(".site-nav-simple");

  if (!nav) {
    return;
  }

  const toggle = nav.querySelector(".site-nav-toggle");
  const panel = nav.querySelector(".site-nav-panel");
  const icon = toggle ? toggle.querySelector("i") : null;

  if (!toggle || !panel) {
    return;
  }

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");

    if (icon) {
      icon.classList.toggle("fa-bars", !open);
      icon.classList.toggle("fa-times", open);
    }
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 601px)").matches) {
      setOpen(false);
    }
  });
})();
