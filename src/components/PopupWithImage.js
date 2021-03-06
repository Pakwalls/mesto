import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageElement = this._popupElement.querySelector(`.popup__img`);
    this._imageFigcaption = this._popupElement.querySelector(`.popup__figcaption`);    
  }

  open({ name, link }) {
    this._imageElement.alt = name;
    this._imageElement.src = link;
    this._imageFigcaption.textContent = name;
    
    super.open();
  }
}