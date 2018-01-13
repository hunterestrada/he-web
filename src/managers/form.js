
export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';
export const TYPE_BUTTON = 'button';
export const TYPE_INPUT_EMAIL = 'email';
export const TYPE_INPUT_PASSWORD = 'password';
export const TYPE_INPUT_TEXT = 'text';
export const TYPE_INPUT_SUBMIT = 'submit';

const LENGTH_MIN_PASSWORD = 6;
const LENGTH_MAX_PASSWORD = 50;
const REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const didValidateEmail = (email) => {
  return REGEXP_EMAIL.test(email);
}

export const didValidatePassword = (password) => {
  if (password.length < LENGTH_MIN_PASSWORD) {
    return false;
  }
  if (password.length > LENGTH_MAX_PASSWORD) {
    return false;
  }
  return true;
}
