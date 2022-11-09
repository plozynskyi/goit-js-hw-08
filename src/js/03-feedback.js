import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', onInput);
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_INPUT_KEY = 'feedback-form-state';

function onInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  let userDetails = { email: email.value, message: message.value };

  localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(userDetails));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  const userEmail = email.value;
  const userMessage = message.value;

  const saveEmail = localStorage.getItem(
    STORAGE_INPUT_KEY,
    JSON.stringify(userEmail)
  );

  const saveMessage = localStorage.getItem(
    STORAGE_INPUT_KEY,
    JSON.stringify(userMessage)
  );

  e.currentTarget.reset();
  console.log(saveEmail);
  console.log(saveMessage);
  localStorage.removeItem(STORAGE_INPUT_KEY);
}
