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

const list = document.querySelector(`.cards`)
const listElementTemplate = document.querySelector(`.template`);

function renderCards() {
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
    openPopupWindow(popupZoom);
    imageZoom.src = image.src;
    captionZoom.textContent = item.name;
    imageZoom.alt = image.alt;
  });
  
  name.textContent = item.name;
  image.src = item.link;
  image.alt = `Фотография ${item.name}`;
  
  return cardClone;
}



formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  card = getElement(newCard);
  list.prepend(card);
  
  closePopupWindow(popupAddWindow);
  formAdd.reset();
});

function openEditWindow() {
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;

  openPopupWindow(popupEditWindow);
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

// слушатели

formEdit.addEventListener('submit', makeSubmitHandler);

profileEditBtn.addEventListener('click', openEditWindow);
editFormClosebtn.addEventListener('click', handleClosePopup);

profileAddbtn.addEventListener('click', () => openPopupWindow(popupAddWindow));
addFormCloseBtn.addEventListener('click', handleClosePopup);

popupZoomCloseBtn.addEventListener('click', handleClosePopup);

renderCards();