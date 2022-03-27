let formElement = document.querySelector(`.popup__form`);
let nameInput = formElement.querySelector(`.popup__name`);
let jobInput = formElement.querySelector(`.popup__job`);
let sendInput = formElement.querySelector(`.popup__button`);

let profileCard = document.querySelector(`.profile`);
let editProfile = profileCard.querySelector(`.profile__edit-btn`);



let popupWindow = document.querySelector(`.popup`);
let closePopup = popupWindow.querySelector(`.popup__closer`);

function togglePopup() {
  
  popupWindow.classList.toggle(`popup_opened`)
}
editProfile.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

function closeClickOverlay(evt) {
  
  if (evt.target === evt.currentTarget) {
    togglePopup();
  }
}
popupWindow.addEventListener('click', closeClickOverlay)


let cards = document.querySelector(`.cards`);
let addPictureButton = profileCard.querySelector(`.profile__add-btn`);

function addNewPicture() {

  cards.insertAdjacentHTML('beforeend', `
                                        <li class="cards__item">
                                          <img src="./images/karachaevsk.jpg" alt="фотография карачаево-черкесск" class="cards__img">
                                          <div class="cards__nameplate">
                                            <h2 class="cards__title">Карачаево-Черкесск</h2>
                                            <div class="cards__feedback"></div>
                                          </div>  
                                        </li>
                                        `);
}

addPictureButton.addEventListener('click', addNewPicture);

/*
function formSubmitHandler (evt) {
evt.preventDefault();

return 
}
*/