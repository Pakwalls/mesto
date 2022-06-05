import { initialCards } from '../utils/initCards.js';
import Card from '../components/Card.js';
import { openPopupWindow, closePopupWindow } from '../utils/utils.js';
import { Validator } from '../components/FormValidator.js';
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
} from '../utils/data.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';

// ---------------------------------------------------------------------------------- увеличить изображение
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

// ---------------------------------------------------------------------------------- слушатели
formAdd.addEventListener('submit', handleFormAddSubmit);
formEdit.addEventListener('submit', handleProfileFormSubmit);

profileEditBtn.addEventListener('click', openEditWindow);
editFormClosebtn.addEventListener('click', () => closePopupWindow(popupEditWindow));

profileAddbtn.addEventListener('click', () => openPopupWindow(popupAddWindow));
addFormCloseBtn.addEventListener('click', () => closePopupWindow(popupAddWindow));

popupZoomCloseBtn.addEventListener('click', () => closePopupWindow(popupZoom));

// ---------------------------------------------------------------------------------- сбор карт в контейнер секции
const cardList = new Section({ 
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, `.template`);
    const cardElement = card.showElement();
    
    cardList.addItem(cardElement);
    },
  },
  cardElementsList);
cardList.renderItems();

// ---------------------------------------------------------------------------------- включение валидации
const forms = document.querySelectorAll(configData.formSelector)
forms.forEach((form) => {
  const validate = new Validator(configData, form)
  validate.enableValidation()
}) 