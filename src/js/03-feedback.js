import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_INPUT_KEY = 'feedback-form-state';

function onInput(e) {
  // let userDetails = JSON.parse(localStorage.getItem(STORAGE_INPUT_KEY)) || {};
  // userDetails[e.target.name] = e.target.value;

  let userDetails = JSON.parse(localStorage.getItem(STORAGE_INPUT_KEY)) || {};
  userDetails[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(userDetails));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_INPUT_KEY);
}

const saveLocalItems = localStorage.getItem(STORAGE_INPUT_KEY);
const parsSaveLocalItems = JSON.parse(saveLocalItems);

function getLocalStorageItems() {
  if (saveLocalItems) {
    !parsSaveLocalItems.email
      ? ''
      : (refs.email.value = parsSaveLocalItems.email);
    !parsSaveLocalItems.message
      ? ''
      : (refs.message.value = parsSaveLocalItems.message);
  }
}

getLocalStorageItems();
