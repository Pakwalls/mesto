export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }, loadUserInfo) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._loadUserInfo = loadUserInfo
  }

  initUserData() {
    this._loadUserInfo().then((data) => {
      this.setUserInfo({name: data.name, job: data.about});
    })
  }

  getUserInfo() {
    return {
      nameContent: this._userName.textContent,
      jobContent: this._userJob.textContent,
    }
  }

  setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}