export default class Popup {
  _popupSelector;

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
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
    this._popupSelector.classList.add(`popup_opened`);
    this.setEventListeners();
  }

  close = () => {
    this._popupSelector.classList.remove(`popup_opened`);
  }

  setEventListeners = (e) => {
    this._popupSelector.addEventListener('click', this._close());
    this._popupSelector.addEventListener('click', this._handleCurrentTarget(e));
    document.addEventListener('keydown', this._handleEscClose(e));

  }
}