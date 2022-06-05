export default class Popup {
  _popupElement;

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

    this._closeButton = this._popupElement.querySelector(`button_closer`);
    this._bindEscCloseHandler = this._handleEscClose.bind(this);
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
    document.addEventListener('keydown', this._bindEscCloseHandler);
  }

  close = () => {
    this._popupElement.classList.remove(`popup_opened`);
    document.removeEventListener('keydown', this._bindEscCloseHandler);
  }

  setEventListeners = () => {
    this._popupElement.addEventListener('click', this._handleCurrentTarget);
    this._closeButton.addEventListener('click', this.close);
  }
}