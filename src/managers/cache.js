
const KEY_IS_AUTHENTICATED = 'key_is_authenticated';

export const setIsAuthenticated = (value) => {
  return localStorage.setItem(KEY_IS_AUTHENTICATED, value);
}

export const getIsAuthenticated = (value) => {
  return localStorage.getItem(KEY_IS_AUTHENTICATED) || false;
}
