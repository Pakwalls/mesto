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
  _delCardClickHandler() {

  }

  //функция колбэк для лайка карточки
  _handleFeedback() {

  }

  _getCard() {
    this._cardExample = this._template.cloneNode(true).querySelector(`.article`);
    this._cardExample.querySelector(`.article__title`).textContent = this._title;
    this._cardExample.querySelector(`.article__img`).src = this._image;
    this._cardExample.querySelector(`.article__img`).alt = `Фотография ${this._title}`;

    this._cardExample.querySelector(`.article__del-btn`).addEventListener('click' () => {
      //функция колбэк для удаления карточки
    })

    this._cardExample.querySelector(`.article__feedback`).addEventListener('click' () => {
      //функция колбэк для лайка карточки
    })

    return this._cardExample;
  }
}