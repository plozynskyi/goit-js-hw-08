import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
// refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

// refs.form.addEventListener('input', onInput);
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_INPUT_KEY = 'feedback-form-state';

function onInput(e) {
  let {
    elements: { email, message },
  } = e.currentTarget;

  let userDetails = { email: email.value, message: message.value };

  localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(userDetails));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  let submitDetails = { email: email.value, message: message.value };

  e.currentTarget.reset();

  console.log(submitDetails);

  localStorage.removeItem(STORAGE_INPUT_KEY);
}

const saveLocalItems = localStorage.getItem(STORAGE_INPUT_KEY);
const parsSaveLocalItems = JSON.parse(saveLocalItems);

function getLocalStorageItems() {
  if (saveLocalItems) {
    refs.email.value = parsSaveLocalItems.email;
    refs.message.value = parsSaveLocalItems.message;
  }
}

getLocalStorageItems();
