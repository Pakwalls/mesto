
let profileCard = document.querySelector(`.profile`);
let editProfile = profileCard.querySelector(`.profile__edit-btn`);

let popupWindow = document.querySelector(`.popup`);
let closePopup = popupWindow.querySelector(`.popup__closer`);

let nameInProfile = profileCard.querySelector(`.profile__title`)
let jobInProfile = profileCard.querySelector(`.profile__subtitle`)

let formElement = document.querySelector(`.popup__form`);
let nameInput = formElement.querySelector(`.popup__name`);
let jobInput = formElement.querySelector(`.popup__job`);

function togglePopup() {
  
  popupWindow.classList.toggle(`popup_opened`);
  nameInput.value = nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;
}

function makeSubmitHandler (evt) {

    evt.preventDefault();
    nameInProfile.textContent = nameInput.value;
    jobInProfile.textContent = jobInput.value;

  togglePopup();
}

formElement.addEventListener('submit', makeSubmitHandler);

editProfile.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
