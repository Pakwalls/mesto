import Popup from './Popup.js';
import { configData } from '../utils/data.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    
    this._formElement = this._popupElement.querySelector(configData.formSelector);
    this._inputElements = this._formElement.querySelectorAll(configData.inputSelector);
    this._submitFunction = submitFunction;

  }

  _getInputValues = () => {
    const inputsValue = {};

    this._inputElements.forEach(input => { 
      inputsValue[input.name] = input.value; 
    });

    return inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
      this._submitFunction(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}