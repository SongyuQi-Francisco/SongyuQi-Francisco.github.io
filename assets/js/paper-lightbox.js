(() => {
  const dialog = document.querySelector(".paper-lightbox");
  const triggers = Array.from(document.querySelectorAll(".paper-figure"));

  if (!dialog || !triggers.length) {
    return;
  }

  const previewImage = dialog.querySelector(".paper-lightbox__image");
  const previewTitle = dialog.querySelector(".paper-lightbox__title");
  const closeButton = dialog.querySelector(".paper-lightbox__close");
  let activeTrigger = null;

  function closeDialog() {
    if (dialog.open) {
      dialog.close();
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");

      if (!image) {
        return;
      }

      activeTrigger = trigger;
      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = image.alt;
      previewTitle.textContent = trigger.dataset.paperTitle || image.alt;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  closeButton.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
  dialog.addEventListener("close", () => {
    if (activeTrigger) {
      activeTrigger.focus();
    }
  });
})();
