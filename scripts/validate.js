
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
  const buttonElement = form.querySelector(config.submitButtonSelector);
  
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleErrorMessage(form, inputElement, config);
      toggleButton(inputs, buttonElement, config);
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

function toggleButton(inputs, buttonElement, config) {
  if (hasInvalidInput(inputs)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  };
};


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 