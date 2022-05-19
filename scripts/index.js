import { initialCards } from './initCards.js';
import Card from './Card.js';
import { openPopupWindow, closePopupWindow } from './utils.js';
import { Validator } from './FormValidator.js';
import {
  profileEditBtn,
  profileAddbtn,
  popupEditWindow,
  formEdit,
  editFormClosebtn,
  nameInput,
  jobInput,
  popupAddWindow,
  formAdd,
  addFormCloseBtn,
  placeInput,
  placeLinkInput,
  popupZoom,
  popupZoomCloseBtn,
  nameInProfile,
  jobInProfile,
  cardElementsList,
  configData,
} from './data.js';

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const validate = new Validator(configData, formAdd)

  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  const card = new Card(newCard, `.template`);
  
  cardElementsList.prepend(card.showElement());
  closePopupWindow(popupAddWindow);
  
  formAdd.reset();
  validate.toggleButtonCondition(); // подтянут из FormValidator.js метод
};

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  jobInProfile.textContent = jobInput.value;
  
  closePopupWindow(popupEditWindow);
};

function openEditWindow() {
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;

  openPopupWindow(popupEditWindow);
};

// слушатели
formAdd.addEventListener('submit', handleFormAddSubmit);
formEdit.addEventListener('submit', handleProfileFormSubmit);

profileEditBtn.addEventListener('click', openEditWindow);
editFormClosebtn.addEventListener('click', () => closePopupWindow(popupEditWindow));

profileAddbtn.addEventListener('click', () => openPopupWindow(popupAddWindow));
addFormCloseBtn.addEventListener('click', () => closePopupWindow(popupAddWindow));

popupZoomCloseBtn.addEventListener('click', () => closePopupWindow(popupZoom));

// прикрепление карт в стартовый экран
initialCards.forEach((cardData) => {
  const card = new Card(cardData, `.template`);
  cardElementsList.append(card.showElement());
})

// включение валидации
const forms = document.querySelectorAll(configData.formSelector)
forms.forEach((form) => {
  const validate = new Validator(configData, form)
  validate.enableValidation()
}) 