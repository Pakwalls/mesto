import { openPopupWindow } from './utils.js';
import {popupZoom,
        imageZoom,
        captionZoom,} from './data.js';
        
export default class Card {
  _name;
  _link;
  _template;

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
  
  _zoomImage = () =>{
    imageZoom.src = this._link;
    captionZoom.textContent = this._name;
    imageZoom.alt = this._alt;
    openPopupWindow(popupZoom);
  };
  
  _deleteCard = () => {
    this._element.remove();
  };
  
  _likeCard = () => {
    this.likeBtn.classList.toggle(`article__feedback_active`);
  };
  
  _setEventListeners = () => {

    this.cardImage.addEventListener('click', this._zoomImage);
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
