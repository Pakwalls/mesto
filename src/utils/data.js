// константы

export const profileCard = document.querySelector(`.profile`);
export const profileEditBtn = profileCard.querySelector(`.profile__edit-btn`);
export const profileAddbtn = profileCard.querySelector(`.profile__add-btn`);

export const popupEditWindow = document.querySelector(`.popup_type_edit-form`);
export const formEdit = popupEditWindow.querySelector(`.popup__form`);
export const editFormClosebtn = popupEditWindow.querySelector(`.popup__closer`);
export const nameInput = formEdit.querySelector(`#name-field`);
export const jobInput = formEdit.querySelector(`#job-field`);

export const popupAddWindow = document.querySelector(`.popup_type_add-form`);
export const formAdd = popupAddWindow.querySelector(`.popup__form`);
export const addFormCloseBtn = popupAddWindow.querySelector(`.popup__closer`);
export const placeInput = formAdd.querySelector(`#place-name`);
export const placeLinkInput = formAdd.querySelector(`#place-link`);

export const popupZoom = document.querySelector(`.popup_type_show`);
export const popupZoomCloseBtn = popupZoom.querySelector(`.popup__closer`);
export const imageZoom = popupZoom.querySelector(`.popup__img`);
export const captionZoom = popupZoom.querySelector(`.popup__figcaption`);

export const nameInProfile = profileCard.querySelector(`.profile__title`)
export const jobInProfile = profileCard.querySelector(`.profile__subtitle`)

export const cardElementsList = document.querySelector(`.cards`)
export const listElementTemplate = document.querySelector(`.template`);


// конфиг для валидации

export const configData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};