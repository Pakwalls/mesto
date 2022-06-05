import Popup from './Popup.js';
import { configData } from '../utils/data.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);

    this._formElement = this._popupElement.querySelector(configData.formSelector);
    this._submitFunction = submitFunction;
  }

  _getInputValues() {
    this._inputElements = this._formElement.querySelectorAll(configData.inputSelector);
    const inputValues = {};

    this._inputElements.forEach(input => { 
      inputValues[input.name] = input.value; 
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListeners('submit', () => {
      this._submitFunction(this._getInputValues());
      this.close();
    });
  }

  close() {
    super();
    this._formElement.reset();
  }
}