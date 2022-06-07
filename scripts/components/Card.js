import { openPopupWindow } from '../utils/utils.js';
import {popupZoom,
        imageZoom,
        captionZoom,} from '../utils/data.js';
import PopupWithImage from './PopupWithImage.js';

        
export default class Card {

  constructor(config, templateSelector) {
    this._name = config.name;
    this._alt = `Фотография ${this._name}`
    this._link = config.link;
    this._templateSelector = templateSelector;
    this._createCard();
  };

  _getTemplate = () => {
    const cardClone = 
    document.querySelector(this._templateSelector).
    content.querySelector(`.article`).
    cloneNode(true);

    return cardClone;
  };
  
  _deleteCard = () => {
    this._element.remove();
  };
  
  _likeCard = () => {
    this.likeBtn.classList.toggle(`article__feedback_active`);
  };
  
  _setEventListeners = () => {

    this.cardImage.addEventListener('click', () => {
      const popup = new PopupWithImage(`.popup_type_show`);
      popup.open({
        name: this._name,
        link: this._link,
      })
    });
    this.likeBtn.addEventListener('click', this._likeCard);   
    this.delBtn.addEventListener('click', this._deleteCard);
  };

  _createCard = () => {
    this._element = this._getTemplate();
    this.cardName = this._element.querySelector(`.article__title`);
    this.cardImage = this._element.querySelector(`.article__img`);
    this.likeBtn = this._element.querySelector(`.article__feedback`);
    this.delBtn = this._element.querySelector(`.article__del-btn`);
    
    this.cardName.textContent = this._name;

    this.cardImage.src = this._link;
    this.cardImage.alt = this._alt;

    this._setEventListeners();
  };

  showElement = () => {
    return this._element;
  }
}
