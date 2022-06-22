import './index.css';
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

const cardList = new Section(
  (cardItem) => {
    return createCardElement(cardItem, `.template`);
  },
  `.cards`);
// ----------------------------------------------------------------------------------

api.fetchCardsList()
  .then(res => {
    cardList.renderItems(res);
  })
  .catch((err) => console.log(err));

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
const createCardElement = (data, selector) => {
  const card = new Card(data, userInfo.getId(), selector, () => popupWithImage.open(data));
  return card.showElement();
};

// ----------------------------------------------------------------------------------
const popupWithForm = new PopupWithForm(
  `.popup_type_add-form`, 
  (data) => {
    api.postCard(data)
      .then((resData) => cardList.prependItem(resData))
      .catch((err) => console.log(err))
  });
popupWithForm.setEventListeners();

// ----------------------------------------------------------------------------------
const popupWithImage = new PopupWithImage(`.popup_type_show`);
popupWithImage.setEventListeners();

// ----------------------------------------------------------------------------------
const userInfo = new UserInfo('.profile__title', '.profile__subtitle', () => api.fetchUserInfo());
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
