import {profileImage} from '../utils/data.js'

export default class UserInfo {
  constructor(userNameSelector, userAboutSelector, loadUserInfo) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._loadUserInfo = loadUserInfo
  }

  initUserData() {
    this._loadUserInfo().then((data) => {
      this.setUserInfo(data);
      profileImage.setAttribute('src', data.avatar);
    })
  }

  getId() {
      return this._userId;
  }

  getUserInfo() {
    return {
      nameContent: this._userName.textContent,
      aboutContent: this._userAbout.textContent,
    }
  }

  setUserInfo({ name, about, _id }) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userId = _id;
  }
}