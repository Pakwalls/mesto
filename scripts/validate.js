const configData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  Array.from(forms).forEach((form) => {
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    setEventListeners(form, config);
  });
};

function setEventListeners(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  toggleButtonCondidion(form);
  
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleErrorMessage(form, inputElement, config);
      toggleButtonCondidion(form);
    });
  });
};

function toggleErrorMessage(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  };
};

function showInputError(formElement, inputElement, config) {
  const {validationMessage} = inputElement;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = validationMessage;
  errorElement.classList.add(config.errorClass);
};

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
};

function hasInvalidInput(inputs) {
  return inputs.some((inputElement => !inputElement.validity.valid ))
};

export function toggleButtonCondidion(popupWindow) {
  const button = popupWindow.querySelector(configData.submitButtonSelector);
  const inputs = Array.from(popupWindow.querySelectorAll(configData.inputSelector));

  if (hasInvalidInput(inputs)) {
    button.classList.add(configData.inactiveButtonClass);
  } else {
    button.classList.remove(configData.inactiveButtonClass);
  };
}

enableValidation(configData); 