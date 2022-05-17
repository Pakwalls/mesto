class Card {
  _title;
  _image;
  _template;
  _cardExample;


  constructor(title, image, template) {
    this._title = title;
    this._image = image;
    this._template = template;
  }

  //функция колбэк для удаления карточки
  _deleteCardHandler() {

  };

  //функция колбэк для лайка карточки
  _likeCardHandler() {

  };

  _getCard() {
    this._cardExample = this._template.cloneNode(true).querySelector(`.article`);
    this._cardExample.querySelector(`.article__title`).textContent = this._title;
    this._cardExample.querySelector(`.article__img`).src = this._image;
    this._cardExample.querySelector(`.article__img`).alt = `Фотография ${this._title}`;

    this._cardExample.querySelector(`.article__del-btn`).addEventListener('click', () => {
      //колбэк для удаления карточки
      this._deleteCardHandler();
    });

    this._cardExample.querySelector(`.article__feedback`).addEventListener('click', () => {
      //колбэк для лайка карточки
      this._likeCardHandler()
    });

    return this._cardExample;
  }
}