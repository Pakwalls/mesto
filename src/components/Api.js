import { token } from '../utils/data.js';

fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
  method: 'GET',
  headers: token,
})
  .then((res) => res.json())
  .then((data) => console.log(data))