export default class Popup {
  _popupElement;

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(`button_closer`);
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
    this.setEventListeners();
  }

  close = () => {
    this._popupElement.classList.remove(`popup_opened`);
    this.removeEventListeners();
  }

  setEventListeners = () => {
    this._closeButton.addEventListener('click', () => this._close());
    this._popupElement.addEventListener('click', (e) => this._handleCurrentTarget(e));
    document.addEventListener('keydown', this._handleEscClose(e));
  }

  removeEventListeners = () => {
    document.removeEventListener('keydown', this._handleEscClose(e));
  }
}