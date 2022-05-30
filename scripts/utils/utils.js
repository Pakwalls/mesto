function listenToOpenedModal(e) {
  if (e.target === e.currentTarget) {
    closePopupWindow(e.target);
  };
};

function escapeTrigger(e) {
  if (e.key === "Escape") {
    const OpenedModal = document.querySelector(`.popup_opened`);
    closePopupWindow(OpenedModal);
  };
};

export function openPopupWindow(popupWindow) {
  popupWindow.classList.add(`popup_opened`);
  popupWindow.addEventListener("click", listenToOpenedModal);
  document.addEventListener("keydown", escapeTrigger);
};

export function closePopupWindow(popupWindow) {
  popupWindow.classList.remove(`popup_opened`);
  popupWindow.removeEventListener("click", listenToOpenedModal);
  document.removeEventListener("keydown", escapeTrigger);
};
