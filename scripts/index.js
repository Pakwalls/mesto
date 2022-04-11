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

  //console.log(likeButton);
  //console.log(delButton);

  likeButton.addEventListener('click', () => { likeButton.classList.toggle(`article__feedback_active`); })
  delButton.addEventListener('click', (evt) => evt.target.closest(`.article`).remove());
  //image.addEventListener('click', )

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
  

  closeAddWindow();
  addFormElement.reset();
});


// открытия и закрытия ниже

function openEditWindow() {
  popupEditWindow.classList.add(`popup_opened`);
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;
}

function closeEditWindow() {
  popupEditWindow.classList.remove(`popup_opened`);
}

function openAddWindow() {
  popupAddWindow.classList.add(`popup_opened`);
}

function closeAddWindow() {
  popupAddWindow.classList.remove(`popup_opened`);
}

function makeSubmitHandler (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  jobInProfile.textContent = jobInput.value;
  
  closeEditWindow();
}


editFormElement.addEventListener('submit', makeSubmitHandler);

editProfile.addEventListener('click', openEditWindow);
closeEditPopupButton.addEventListener('click', closeEditWindow);
addCard.addEventListener('click', openAddWindow);
closeAddPopupButton.addEventListener('click', closeAddWindow);

build();