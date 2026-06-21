let lastFocusedElement = null;

export function initModal() {
  const modal = document.querySelector("#modal");
  const content = document.querySelector("#modal-content");
  const closeBtn = document.querySelector("#close-modal");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-modal")) {
      openModal(e.target.dataset.id);
    }
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function openModal(id) {
    lastFocusedElement = document.activeElement;

    const event = new CustomEvent("request-character", {
      detail: { id },
    });

    document.dispatchEvent(event);

    modal.showModal();
  }

  function closeModal() {
    modal.close();

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }
}

export function setModalContent(html) {
  document.querySelector("#modal-content").innerHTML = html;
}
