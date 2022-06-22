export default class UserInfo {
  constructor(userNameSelector, userAboutSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._profileImage = document.querySelector(".profile__img");
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

  setUserInfo({ name, about, _id}) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userId = _id;
  }

  setAvatar(avatar) {
    this._profileImage.setAttribute('src', avatar);
  }

  makeVisible() {
    this._profileImage.style.visibility = 'visible';  
  }
}