export default class Popup {
    constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    
    this._closeButton = this._popupElement.querySelector(`.popup__closer`);
    this._bindedEscCloseHandler = this._handleEscClose.bind(this);
  }
  
  // -------------------------------------------- метод закрытия на escape клавишу
  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }; 
  }

  // -------------------------------------------- метод закрытия попапа кликом на оверлей (исключая контейнер)
  _handleCurrentTarget = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    };
  }

  open() {
    this._popupElement.classList.add(`popup_opened`);
    document.addEventListener('keydown', this._bindedEscCloseHandler);
  }

  close() {
    this._popupElement.classList.remove(`popup_opened`);
    document.removeEventListener('keydown', this._bindedEscCloseHandler);
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (e) => this._handleCurrentTarget(e));
    this._closeButton.addEventListener('click', () => this.close());
  }
}