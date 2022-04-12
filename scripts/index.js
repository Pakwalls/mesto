const initialCards = [
  { name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
  { name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
  { name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
  { name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  { name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
  { name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
]; 

const profileCard = document.querySelector(`.profile`);
const editProfile = profileCard.querySelector(`.profile__edit-btn`);
const addCard = profileCard.querySelector(`.profile__add-btn`);

const popupEditWindow = document.querySelector(`.popup_type_edit-form`);
const editFormElement = popupEditWindow.querySelector(`.popup__form`);
const closeEditPopupButton = popupEditWindow.querySelector(`.popup__closer`);
const nameInput = editFormElement.querySelector(`#name-field`);
const jobInput = editFormElement.querySelector(`#job-field`);

const popupAddWindow = document.querySelector(`.popup_type_add-form`);
const addFormElement = popupAddWindow.querySelector(`.popup__form`);
const placeInput = addFormElement.querySelector(`#place-name`);
const placeLinkInput = addFormElement.querySelector(`#place-link`);
const closeAddPopupButton = popupAddWindow.querySelector(`.popup__closer`);

const popupZoom = document.querySelector(`.popup_type_show`);
const zoomImage = popupZoom.querySelector(`.popup__img`);
const zoomCaption = popupZoom.querySelector(`.popup__figcaption`);
const closeZoomPopup = popupZoom.querySelector(`.popup__closer`);

const nameInProfile = profileCard.querySelector(`.profile__title`)
const jobInProfile = profileCard.querySelector(`.profile__subtitle`)

const list = document.querySelector(`.cards`)
const listElementTemplate = document.querySelector(`.template`);

function build() {
  const cardsList = initialCards.map(getElement);
  list.append(...cardsList);
}

function getElement(item) {
  const cardClone = listElementTemplate.content.cloneNode(true);
  const name = cardClone.querySelector(`.article__title`);
  const image = cardClone.querySelector(`.article__img`);
  const delButton = cardClone.querySelector(`.article__del-btn`);
  const likeButton = cardClone.querySelector(`.article__feedback`);

  likeButton.addEventListener('click', () => { likeButton.classList.toggle(`article__feedback_active`); })
  delButton.addEventListener('click', (evt) => evt.target.closest(`.article`).remove());
  image.addEventListener('click', function() { 
    openPopupWinow(popupZoom);
    zoomImage.src = image.src;
    zoomCaption.textContent = item.name;
    zoomImage.alt = image.alt;
  });
  
  name.textContent = item.name;
  image.src = item.link;
  image.alt = `Фотография ${item.name}`;
  
  return cardClone;
}

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  card = getElement(newCard);
  list.prepend(card);
  
  closePopupWindow(popupAddWindow);
  addFormElement.reset();
});

function openEditWindow() {
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;

  openPopupWinow(popupEditWindow);
}

function makeSubmitHandler (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  jobInProfile.textContent = jobInput.value;
  
  closePopupWindow(popupEditWindow);
}

// открыватель

function openPopupWindow(popupWindow) {
  popupWindow.classList.add(`popup_opened`);
}

// закрыватель

function closePopupWindow(popupWindow) {
  popupWindow.classList.remove(`popup_opened`);
}

function handleClosePopup(evt) {
  const popupWindow = evt.target.closest(`.popup`);
  closePopupWindow(popupWindow);
}

editFormElement.addEventListener('submit', makeSubmitHandler);

editProfile.addEventListener('click', () => openPopupWindow(popupEditWindow));
closeEditPopupButton.addEventListener('click', handleClosePopup);

addCard.addEventListener('click', () => openPopupWindow(popupAddWindow));
closeAddPopupButton.addEventListener('click', handleClosePopup);

closeZoomPopup.addEventListener('click', handleClosePopup);

build();