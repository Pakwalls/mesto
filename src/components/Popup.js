export default class Popup {
    constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._bindedEscCloseHandler = this._handleEscClose.bind(this);
  }
  
  // -------------------------------------------- метод закрытия на escape клавишу
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }; 
  }

  // -------------------------------------------- метод закрытия попапа кликом на оверлей (исключая контейнер)
  _handleCurrentTarget = (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains(`popup__closer`)) {
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
    this._popupElement.addEventListener('mousedown', (e) => this._handleCurrentTarget(e));
  }
}