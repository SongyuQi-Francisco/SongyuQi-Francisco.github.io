(() => {
  const tiltCards = Array.from(document.querySelectorAll(
    ".home-profile-card"
  ));
  const glowCards = Array.from(document.querySelectorAll(
    ".paper-box, .pub-list-paper"
  ));

  if (!tiltCards.length && !glowCards.length) {
    return;
  }

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function getPointerPosition(card, event) {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    return { x, y };
  }

  function resetTilt(card) {
    card.classList.remove("is-tilting");
    card.style.removeProperty("--tilt-rx");
    card.style.removeProperty("--tilt-ry");
    card.style.removeProperty("--tilt-glow-x");
    card.style.removeProperty("--tilt-glow-y");
  }

  function resetGlow(card) {
    card.classList.remove("is-glowing");
    card.style.removeProperty("--paper-glow-x");
    card.style.removeProperty("--paper-glow-y");
  }

  function updateTilt(card, event) {
    if (reduceMotionQuery.matches || event.pointerType === "touch") {
      return;
    }

    const { x, y } = getPointerPosition(card, event);
    const maxRotate = 4.4;
    const rotateX = (0.5 - y) * maxRotate;
    const rotateY = (x - 0.5) * maxRotate * 1.25;

    card.classList.add("is-tilting");
    card.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--tilt-glow-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--tilt-glow-y", `${(y * 100).toFixed(1)}%`);
  }

  function updateGlow(card, event) {
    if (reduceMotionQuery.matches || event.pointerType === "touch") {
      return;
    }

    const { x, y } = getPointerPosition(card, event);

    card.classList.add("is-glowing");
    card.style.setProperty("--paper-glow-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--paper-glow-y", `${(y * 100).toFixed(1)}%`);
  }

  tiltCards.forEach((card) => {
    card.classList.add("tilt-card");
    card.addEventListener("pointermove", (event) => updateTilt(card, event), { passive: true });
    card.addEventListener("pointerleave", () => resetTilt(card));
    card.addEventListener("blur", () => resetTilt(card), true);
  });

  glowCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => updateGlow(card, event), { passive: true });
    card.addEventListener("pointerleave", () => resetGlow(card));
    card.addEventListener("blur", () => resetGlow(card), true);
  });

  function syncMotionPreference() {
    tiltCards.forEach(resetTilt);
    glowCards.forEach(resetGlow);
  }

  if (reduceMotionQuery.addEventListener) {
    reduceMotionQuery.addEventListener("change", syncMotionPreference);
  } else if (reduceMotionQuery.addListener) {
    reduceMotionQuery.addListener(syncMotionPreference);
  }
})();
