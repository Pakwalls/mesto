export default class Popup {
  _popupElement;

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(`button_closer`);
    //навесить Бинд на свойство
  }
  
  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }; 
  }

  _handleCurrentTarget = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    };
  }
  
  open = () => {
    this._popupElement.classList.add(`popup_opened`);
    document.addEventListener('keydown',_handleEscClose().bind(this));
  }

  close = () => {
    this._popupElement.classList.remove(`popup_opened`);
    document.removeEventListener('keydown',_handleEscClose().bind(this));
  }

  setEventListeners = () => {
    this._popupElement.addEventListener('click', (e) => {
      if (e.target === e.currentTarget || e.target.classList.contains(`popup_closer`)) {
        this.close();
      }
    });
  }
}