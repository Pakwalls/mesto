import Popup from './Popup.js';
import { configData } from '../utils/data.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    
    this._formElement = this._popupElement.querySelector(configData.formSelector);
    this._inputElements = this._formElement.querySelectorAll(configData.inputSelector);
    this._submitFunction = submitFunction;
    this._submitBtn = this._formElement.querySelector(configData.submitButtonSelector);
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
      e.preventDefault();
      const btnText = this._submitBtn.textContent;
      this._submitBtn.textContent = 'Сохранение...';

      this._submitFunction(this._getInputValues())
        .then(() => {
          this.close();
        })
        .catch((err) => console.error(err))
        .finally(() => {
          this._submitBtn.textContent = btnText;
        });
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  getForm() {
    return this._formElement;
  }
}