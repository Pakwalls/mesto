export class Validator {
  

  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _setEventListeners = () => {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        //переключение видимости ошибки
        this._toggleErrorMessage(formElement, inputElement)
        //переключение состояни кнопки
        this.toggleButtonCondition()
      })
    })
  };

  _toggleErrorMessage = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement);
    } else {
      this._hideInputError(formElement, inputElement);
    };
  };
  
  _showInputError = (formElement, inputElement) => {
    const {validationMessage} = inputElement;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hasInvalidInput = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };

  _hideInputError = () => {
    return this._inputElements.some((inputElement => !inputElement.validity.valid ))
  };

  toggleButtonCondition = () => {
    if (this._hideInputError) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  enableValidation = () => {

  };
}
