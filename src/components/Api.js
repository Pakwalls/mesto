import { token } from '../utils/data.js';

export default class Api {
  constructor() {
    this._token = token;
    this._api = "https://mesto.nomoreparties.co/v1/cohort-43";
    this._contentType = "application/json";
  }

  fetchUserInfo() {
    return fetch(this._api + "/users/me", {
      method: 'GET',
      headers: {
        "Authorization": this._token,
        "Content-type": this._contentType,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Возник Error');
      })
  }

  patchUserInfo(name, about) {
    return fetch(this._api + "/users/me", {
      method: 'PATCH',
      headers: {
        "Authorization": this._token,
        "Content-type": this._contentType,
      },
      body: JSON.stringify({
        name,
        about,
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Возник Error');
      })
  }

  fetchCardsList() {
  }

  updateLikes(cardID) {
  }

  updateAvatar(avatar) {
  }

  deleteCard(avatar) {


  }
}

// fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
//   method: 'GET',
//   headers: this._token,
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))