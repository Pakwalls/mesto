import './index.css';
import { initialCards } from '../utils/initCards.js';
import { Validator } from '../components/FormValidator.js';
import {
  profileEditBtn,
  profileAddbtn,
  avatarEditbtn,
  nameInput,
  jobInput,
  configData,
} from '../utils/data.js';


import Api from "../components/Api.js"

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// ----------------------------------------------------------------------------------
const api = new Api()

// ----------------------------------------------------------------------------------
api.fetchCardsList().then(res => {
  const cardList = new Section(
      {
      items: res,
      renderer: (cardItem) => {
        const card = createdCardElement(cardItem, `.template`)
        cardList.addItem(card); }
      },
      `.cards`);
    cardList.renderItems();
})

// ----------------------------------------------------------------------------------
const popupWithAvatarLink = new PopupWithForm(
  `.popup_type_avatar-form`,
  (data) => {
    api.patchAvatar(data.link).then(res => {
      document.querySelector(".profile__img").setAttribute("src", res.avatar)
    })
  }
)
popupWithAvatarLink.setEventListeners();

// ----------------------------------------------------------------------------------
const createdCardElement = (data, selector) => {
  const card = new Card(data, selector, () => popupWithImage.open(data));
  return card.showElement();
};

// ----------------------------------------------------------------------------------
const popupWithForm = new PopupWithForm(
  `.popup_type_add-form`, 
  (data) => {
    const createdCard = createdCardElement(data, `.template`);
    cardList.prependItem(createdCard);
  });
popupWithForm.setEventListeners();

// ----------------------------------------------------------------------------------
const popupWithImage = new PopupWithImage(`.popup_type_show`);
popupWithImage.setEventListeners();

// ----------------------------------------------------------------------------------
const userInfo = new UserInfo({userNameSelector: '.profile__title', userJobSelector: '.profile__subtitle'}, () => api.fetchUserInfo());
userInfo.initUserData();

const profileForm = new PopupWithForm(
  '.popup_type_edit-form',
  (data) => {
    userInfo.setUserInfo(data);
    api.patchUserInfo(data.name, data.job);
  });
profileForm.setEventListeners();

// ---------------------------------------------------------------------------------- 
const fillProfilePopup = () => {
  const { nameContent, jobContent } = userInfo.getUserInfo();

  nameInput.value = nameContent;
  jobInput.value = jobContent;

  resetForm(profileForm.getForm());
  profileForm.open();
}

// ---------------------------------------------------------------------------------- 
const forms = document.querySelectorAll(configData.formSelector)
forms.forEach((form) => {
  const validate = new Validator(configData, form)
  validate.enableValidation()
})

// ----------------------------------------------------------------------------------
const resetForm = (form) => {
  const validate = new Validator(configData, form)
  validate.hideError();
  validate.disableSubmitButton();
}

// ---------------------------------------------------------------------------------- слушатели слушают
avatarEditbtn.addEventListener('click', () => {
  popupWithAvatarLink.open();
})

profileEditBtn.addEventListener('click', () => fillProfilePopup());

profileAddbtn.addEventListener(`click`, () => {
  resetForm(popupWithForm.getForm());
  popupWithForm.open();
});
