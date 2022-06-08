export class Validator {
  _config;
  _form;

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputElements = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
  }

  _setEventListeners = () => { 
    this.toggleButtonCondition();
    
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        //переключение видимости ошибки
        this._toggleErrorMessage(inputElement)
        //переключение состояни кнопки
        this.toggleButtonCondition()
      })
    })
  };

  _toggleErrorMessage = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    };
  };
  
  _showInputError = (inputElement) => {
    const { validationMessage } = inputElement;
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.errorClass);
  };

  _hasInvalidInput = () => {
  // проверять не все елементы
    return this._inputElements.some((inputElement => !inputElement.validity.valid ))
  };

  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton = () => {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  toggleButtonCondition = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}
  