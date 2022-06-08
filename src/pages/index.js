import './index.css';
import { initialCards } from '../utils/initCards.js';
import { Validator } from '../components/FormValidator.js';
import {
  profileEditBtn,
  profileAddbtn,
  nameInput,
  jobInput,
  configData,
} from '../utils/data.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// ----------------------------------------------------------------------------------
const createdCardElement = (data, selector) => {
  const card = new Card(data, selector, () => popupWithImage.open(data));
  const cardElement = card.showElement();

  return cardElement;
};

// ----------------------------------------------------------------------------------
const cardList = new Section({ 
  items: initialCards,
  renderer: (cardItem) => { return createdCardElement(cardItem, `.template`) }},
  `.cards`);

cardList.renderItems();

// ----------------------------------------------------------------------------------
const popupWithForm = new PopupWithForm(
  `.popup_type_add-form`, 
  (data) => {
    const createdCard = createdCardElement({name: data["place-name"], link: data["place-link"]}, `.template`);
    cardList.prependItem(createdCard);
  });

popupWithForm.setEventListeners();

// ---------------------------------------------------------------------------------- увеличить изображение карточки
const popupWithImage = new PopupWithImage(`.popup_type_show`);

popupWithImage.setEventListeners();

// ---------------------------------------------------------------------------------- изменить данные в карточке профиля

const userInfo = new UserInfo({userNameSelector: '.profile__title', userJobSelector: '.profile__subtitle'});

const profileForm = new PopupWithForm(
  '.popup_type_edit-form',
  (data) => {
    userInfo.setUserInfo(data);
  });
profileForm.setEventListeners();

profileEditBtn.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();

  nameInput.value = userData.nameContent;
  jobInput.value = userData.jobContent;

  profileForm.open();
})

// ---------------------------------------------------------------------------------- включение валидации
const forms = document.querySelectorAll(configData.formSelector)
forms.forEach((form) => {
  const validate = new Validator(configData, form)
  validate.enableValidation()
})

// ---------------------------------------------------------------------------------- слушатели слушают

profileAddbtn.addEventListener(`click`, () => {
  popupWithForm.open();
});
