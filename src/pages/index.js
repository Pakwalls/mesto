import './index.css';
import { Validator } from '../components/FormValidator.js';
import {
  profileEditBtn,
  profileAddbtn,
  avatarEditbtn,
  nameInput,
  aboutInput,
  configData,
} from '../utils/data.js';


import Api from "../components/Api.js"

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

// ----------------------------------------------------------------------------------
const api = new Api()

const cardList = new Section(
  (cardItem) => {
    return createCardElement(cardItem, `.template`);
  },
  `.cards`);

// ----------------------------------------------------------------------------------
Promise.all([api.fetchCardsList(), api.fetchUserInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user.avatar);
    userInfo.makeVisible();
    
    cardList.renderItems(cards);
  })
  .catch((err) => console.error(err))

// ----------------------------------------------------------------------------------
const popupWithConfirm = new PopupWithConfirm(`.popup_type_confirm`);
popupWithConfirm.setEventListeners();

// ----------------------------------------------------------------------------------
const popupWithAvatarLink = new PopupWithForm(
  `.popup_type_avatar-form`,
  (data) => {
    return api.patchAvatar(data.link)
      .then(userData => {
        userInfo.setAvatar(userData.avatar);
      })
  }
)
popupWithAvatarLink.setEventListeners();

// ----------------------------------------------------------------------------------
const createCardElement = (data, selector) => {
  const card = new Card(
    data,
    userInfo.getId(),
    selector,
    () => popupWithImage.open(data),
    () => {
      popupWithConfirm.setSubmitAction(() => {
        return api.deleteCard(data._id)
          .then(() => {
            card.deleteCard();
            popupWithConfirm.close();
          })
          .catch((err) => console.error(err))
      });
      popupWithConfirm.open();
    },
    () => {
      if (!card.getIsLiked()) {
        api.putLike(data._id)
          .then((res) => {
            card.likeCard();
            card.updateLikes(res.likes.length);
          })
          .catch((err) => console.error(err))
      } else {
        api.deleteLike(data._id)
          .then((res) => {
            card.likeCard();
            card.updateLikes(res.likes.length);
          })
          .catch((err) => console.error(err));
      }
    }
  );
  return card.showElement();
};

// ----------------------------------------------------------------------------------
const popupWithForm = new PopupWithForm(
  `.popup_type_add-form`,
  (data) => {
    return api.postCard(data)
      .then((resData) => cardList.prependItem(resData))
  });
popupWithForm.setEventListeners();

// ----------------------------------------------------------------------------------
const popupWithImage = new PopupWithImage(`.popup_type_show`);
popupWithImage.setEventListeners();

// ----------------------------------------------------------------------------------
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const profileForm = new PopupWithForm(
  '.popup_type_edit-form',
  (data) => {
    return api.patchUserInfo(data.name, data.about)
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
  });
profileForm.setEventListeners();

// ----------------------------------------------------------------------------------
const fillProfilePopup = () => {
  const { nameContent, aboutContent } = userInfo.getUserInfo();

  nameInput.value = nameContent;
  aboutInput.value = aboutContent;

  
  formValidators['popup__edit-form'].resetValidation();
  profileForm.open();
}

// ----------------------------------------------------------------------------------
const formValidators = {}

// Включение валидации
const enableValidation = (configData) => {
  const formList = Array.from(document.querySelectorAll(configData.formSelector))
  formList.forEach((formElement) => {
    const validator = new Validator(configData, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   //записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(configData);

// ---------------------------------------------------------------------------------- слушатели слушают
avatarEditbtn.addEventListener('click', () => {
  formValidators['popup__avatar-form'].resetValidation();
  popupWithAvatarLink.open();
})

profileEditBtn.addEventListener('click', () => fillProfilePopup());

profileAddbtn.addEventListener(`click`, () => {
  formValidators['popup__add-form'].resetValidation();
  popupWithForm.open();
});
