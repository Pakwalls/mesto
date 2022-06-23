export default class Card {

  constructor(cardData, profileId, templateSelector, handleCardClick, handleRemoveCard, handleLikeCard) {
    this._name = cardData.name;
    this._alt = this._name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._hendleRemoveCard = handleRemoveCard;
    this._likeCount = cardData.likes ? cardData.likes.length : 0;
    this._isOwner = profileId === cardData.owner._id;
    this._isLiked = cardData.likes.some((like) => {
      return like._id === profileId;
    });
    this._handleLikeCard = handleLikeCard;
  };

  _getTemplate = () => {
    return  document.querySelector(this._templateSelector)
    .content
    .querySelector(`.article`)
    .cloneNode(true);
  };
  
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };
  
  likeCard = () => {
    this._likeBtn.classList.toggle(`article__feedback_active`);
    this._isLiked = !this._isLiked;
  };
  
  _setEventListeners = () => {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._likeBtn.addEventListener('click', this._handleLikeCard);
    
    if (this._isOwner) {
      this._delBtn.addEventListener('click', this._hendleRemoveCard);
    }
  };

  _createCard = () => {
    this._element = this._getTemplate();
    this._cardName = this._element.querySelector(`.article__title`);
    this._cardImage = this._element.querySelector(`.article__img`);

    this._likeBtn = this._element.querySelector(`.article__feedback`);
    if (this._isLiked) {
      this._likeBtn.classList.add(`article__feedback_active`);
    }

    this._delBtn = this._element.querySelector(`.article__del-btn`)
    if (!this._isOwner) {
      this._delBtn.style.display = "none";
    }
    
    this._likeCounter = this._element.querySelector(`.article__like-counter`)
    
    this._cardName.textContent = this._name;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._likeCounter.textContent = this._likeCount;

    this._setEventListeners();
  };

  getIsLiked() {
    return this._isLiked;
  }

  updateLikes(count) {
    this._likeCounter.textContent = count
  }

  showElement = () => {
    this._createCard();
    return this._element;
  }
}
