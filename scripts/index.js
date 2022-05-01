import { initialCards } from './cards.js';
import { toggleButtonCondidion } from './validate.js';

const profileCard = document.querySelector(`.profile`);
const profileEditBtn = profileCard.querySelector(`.profile__edit-btn`);
const profileAddbtn = profileCard.querySelector(`.profile__add-btn`);

const popupEditWindow = document.querySelector(`.popup_type_edit-form`);
const formEdit = popupEditWindow.querySelector(`.popup__form`);
const editFormClosebtn = popupEditWindow.querySelector(`.popup__closer`);
const nameInput = formEdit.querySelector(`#name-field`);
const jobInput = formEdit.querySelector(`#job-field`);

const popupAddWindow = document.querySelector(`.popup_type_add-form`);
const formAdd = popupAddWindow.querySelector(`.popup__form`);
const addFormCloseBtn = popupAddWindow.querySelector(`.popup__closer`);
const placeInput = formAdd.querySelector(`#place-name`);
const placeLinkInput = formAdd.querySelector(`#place-link`);

const popupZoom = document.querySelector(`.popup_type_show`);
const popupZoomCloseBtn = popupZoom.querySelector(`.popup__closer`);
const imageZoom = popupZoom.querySelector(`.popup__img`);
const captionZoom = popupZoom.querySelector(`.popup__figcaption`);

const nameInProfile = profileCard.querySelector(`.profile__title`)
const jobInProfile = profileCard.querySelector(`.profile__subtitle`)

const cardElementsList = document.querySelector(`.cards`)
const listElementTemplate = document.querySelector(`.template`);

//переменная, для снятия эскейпа-листенера
let currentOpenedPopup;

function renderCards() {
  const cardsList = initialCards.map(createCardElement);
  cardElementsList.append(...cardsList);
}

function createCardElement(cardData) {
  const cardClone = listElementTemplate.content.cloneNode(true);
  const name = cardClone.querySelector(`.article__title`);
  const image = cardClone.querySelector(`.article__img`);
  const delButton = cardClone.querySelector(`.article__del-btn`);
  const likeButton = cardClone.querySelector(`.article__feedback`);

  likeButton.addEventListener('click', () => likeButton.classList.toggle(`article__feedback_active`));
  delButton.addEventListener('click', (evt) => evt.target.closest(`.article`).remove());
  image.addEventListener('click', function() { 
    openPopupWindow(popupZoom);
    imageZoom.src = image.src;
    captionZoom.textContent = cardData.name;
    imageZoom.alt = image.alt;
  });
  
  name.textContent = cardData.name;
  image.src = cardData.link;
  image.alt = `Фотография ${cardData.name}`;
  
  return cardClone;
}

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  const card = createCardElement(newCard);
  
  cardElementsList.prepend(card);
  closePopupWindow(popupAddWindow);
 
  formAdd.reset();
  toggleButtonCondidion(formAdd);
});

function openEditWindow() {
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;

  openPopupWindow(popupEditWindow);
};

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  jobInProfile.textContent = jobInput.value;
  
  closePopupWindow(popupEditWindow);
}

function listenToOpenedModal(e) {
  if (e.target === e.currentTarget) {
    closePopupWindow(e.target);
  };
};

function escapeTrigger(e) {
  if (e.key === "Escape") {
    closePopupWindow(currentOpenedPopup);
  };
};

// открыватель

function openPopupWindow(popupWindow) {
  popupWindow.classList.add(`popup_opened`);
  currentOpenedPopup = popupWindow;
  popupWindow.addEventListener("click", listenToOpenedModal);
  document.addEventListener("keydown", escapeTrigger);
};

// закрыватель

function closePopupWindow(popupWindow) {
  popupWindow.classList.remove(`popup_opened`);
  popupWindow.removeEventListener("click", listenToOpenedModal);
  document.removeEventListener("keydown", escapeTrigger);
};

// слушатели

formEdit.addEventListener('submit', handleProfileFormSubmit);

profileEditBtn.addEventListener('click', openEditWindow);
editFormClosebtn.addEventListener('click', () => closePopupWindow(popupEditWindow)); // Спасибо 

profileAddbtn.addEventListener('click', () => openPopupWindow(popupAddWindow));
addFormCloseBtn.addEventListener('click', () => closePopupWindow(popupAddWindow));

popupZoomCloseBtn.addEventListener('click', () => closePopupWindow(popupZoom));

renderCards();