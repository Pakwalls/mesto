export class Validator {
  

  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _setEventListeners = () => {
    const inputs = Array.from(this._form.querySelector(this._inputSelector));

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        toggleErrorMessage(this._form, inputElement, this._config);
        toggleButtonCondition(this._form);
      });
    })
  };

  _toggleErrorMessage = () => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, config);
    } else {
      hideInputError(formElement, inputElement, config);
    };
  };
  
  _showInputError = () => {

  };

  _hasInvalidInput = () => {

  };

  _hideInputError = () => {

  };

  toggleButtonCondition = () => {

  };

  enableValidation = () => {

  };
}
