
let profileCard = document.querySelector(`.profile`);
let editProfile = profileCard.querySelector(`.profile__edit-btn`);

let popupWindow = document.querySelector(`.popup`);
let closePopupButton = popupWindow.querySelector(`.popup__closer`);

let nameInProfile = profileCard.querySelector(`.profile__title`)
let jobInProfile = profileCard.querySelector(`.profile__subtitle`)

let formElement = document.querySelector(`.popup__form`);
let nameInput = formElement.querySelector(`#name-field`);
let jobInput = formElement.querySelector(`#job-field`);


function openPopupWindow() {
  popupWindow.classList.add(`popup_opened`);
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;
}

function closePopupWindow() {
  popupWindow.classList.remove(`popup_opened`);
}

function makeSubmitHandler (evt) {
  evt.preventDefault();
  nameInProfile.textContent = nameInput.value;
  jobInProfile.textContent = jobInput.value;

  closePopupWindow();
}

formElement.addEventListener('submit', makeSubmitHandler);

editProfile.addEventListener('click', openPopupWindow);
closePopupButton.addEventListener('click', closePopupWindow);
