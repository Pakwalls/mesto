import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {

  setSubmitAction(act) {
    this._action = act;
  }

  setEventListeners() {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      
      this._action();
    })
    super.setEventListeners();
  }
}