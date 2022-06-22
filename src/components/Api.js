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

  patchAvatar(avatar) {
    return fetch(this._api + "/users/me/avatar", {
      method: 'PATCH',
      headers: {
        "Authorization": this._token,
        "Content-type": this._contentType,
      },
      body: JSON.stringify({
        avatar
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
    return fetch(this._api + "/cards", {
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

  postCard({name, link}) {
    return fetch(this._api + "/cards", {
      method: 'POST',
      headers: {
        "Authorization": this._token,
        "Content-type": this._contentType,
      },
      body: JSON.stringify({
        name,
        link,
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Возник Error');
      })
  }

  updateLikes(cardID) {
  }



  deleteCard(avatar) {


  }
}
