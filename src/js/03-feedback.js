import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

// refs.form.addEventListener('submit', onFormSumbit);
// refs.form.addEventListener('input', throttle(onInput, 500));
