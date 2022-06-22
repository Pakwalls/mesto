export default class Card {

  constructor(cardData, profileId, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._alt = this._name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = cardData.likes || [];
    this._likeCount = cardData.likes ? cardData.likes.length : 0;
    this._isOwner = profileId === cardData.owner._id;
    this._isLiked = this._likes.some((like) => {
      return like.id === profileId;
    });
  };

  _getTemplate = () => {
    return  document.querySelector(this._templateSelector)
    .content
    .querySelector(`.article`)
    .cloneNode(true);
  };
  
  _deleteCard = () => {
    this._element.remove();
    this._element = null;
  };
  
  _likeCard = () => {
    this.likeBtn.classList.toggle(`article__feedback_active`);
  };
  
  _setEventListeners = () => {

    this.cardImage.addEventListener('click', this._handleCardClick);
    this.likeBtn.addEventListener('click', this._likeCard); 
    if (this._isOwner) {
      this.delBtn.addEventListener('click', this._deleteCard);
    }
    
  };

  _createCard = () => {
    this._element = this._getTemplate();
    this.cardName = this._element.querySelector(`.article__title`);
    this.cardImage = this._element.querySelector(`.article__img`);
    this.likeBtn = this._element.querySelector(`.article__feedback`);
    this.delBtn = this._element.querySelector(`.article__del-btn`)
    if (!this._isOwner) {
      this.delBtn.style.display = "none";
    }
    this.likeCount = this._element.querySelector(`.article__like-counter`)
    
    this.cardName.textContent = this._name;

    this.cardImage.src = this._link;
    this.cardImage.alt = this._alt;


    this.likeCount.textContent = this._likeCount;

    this._setEventListeners();
  };

  showElement = () => {
    this._createCard();
    return this._element;
  }
}
