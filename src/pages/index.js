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

// ----------------------------------------------------------------------------------
const popupWithImage = new PopupWithImage(`.popup_type_show`);
popupWithImage.setEventListeners();

// ----------------------------------------------------------------------------------

const userInfo = new UserInfo({userNameSelector: '.profile__title', userJobSelector: '.profile__subtitle'});

const profileForm = new PopupWithForm(
  '.popup_type_edit-form',
  (data) => {
    userInfo.setUserInfo(data);
  });
profileForm.setEventListeners();

// ---------------------------------------------------------------------------------- 
const fillProfilePopup = () => {
  const { nameContent, jobContent } = userInfo.getUserInfo();

  nameInput.value = nameContent;
  jobInput.value = jobContent;

  profileForm.open();
}

// ---------------------------------------------------------------------------------- 

const forms = document.querySelectorAll(configData.formSelector)
forms.forEach((form) => {
  const validate = new Validator(configData, form)
  validate.enableValidation()
})

// ---------------------------------------------------------------------------------- слушатели слушают

profileEditBtn.addEventListener('click', () => fillProfilePopup());

profileAddbtn.addEventListener(`click`, () => {
  popupWithForm.open();
});
