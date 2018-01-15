
import * as type from 'managers/type.js';

const KEY_ARTICLE = 'key_article_';
const KEY_ARTICLE_LIST = 'key_list_article';
const KEY_IS_AUTHENTICATED = 'key_is_authenticated';

// isAuthenticated

export const setIsAuthenticated = (value) => {
  return sessionStorage.setItem(KEY_IS_AUTHENTICATED, value);
}

export const getIsAuthenticated = (value) => {
  return sessionStorage.getItem(KEY_IS_AUTHENTICATED) || false;
}

// articles

export const setArticle = (value) => {
  const item = JSON.stringify(value);
  if (type.isString(value.slug)) {
    sessionStorage.setItem(KEY_ARTICLE + value.slug, item);
  }
  return sessionStorage.setItem(KEY_ARTICLE + value.id, item);
}

export const getArticle = (id) => {
  const item = sessionStorage.getItem(KEY_ARTICLE + id);
  return JSON.parse(item) || {};
}

export const setArticleList = (value) => {
  for (let article of value) {
    setArticle(article);
  }
  const item = JSON.stringify(value);
  return sessionStorage.setItem(KEY_ARTICLE_LIST, item);
}

export const getArticleList = () => {
  const item = sessionStorage.getItem(KEY_ARTICLE_LIST);
  return JSON.parse(item) || [];
}
