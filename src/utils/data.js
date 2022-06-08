// константы

export const profileCard = document.querySelector(`.profile`);
export const profileEditBtn = profileCard.querySelector(`.profile__edit-btn`);
export const profileAddbtn = profileCard.querySelector(`.profile__add-btn`);

export const popupEditWindow = document.querySelector(`.popup_type_edit-form`);
export const formEdit = popupEditWindow.querySelector(`.popup__form`);
export const nameInput = formEdit.querySelector(`#name-field`);
export const jobInput = formEdit.querySelector(`#job-field`);

// конфиг для валидации

export const configData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};