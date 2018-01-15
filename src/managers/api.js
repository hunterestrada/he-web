
import * as cache from 'managers/cache.js'

const HEADERS = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

const ENDPOINT_BASE = 'http://127.0.0.1:2250/';
const ENDPOINT_ARTICLE_LIST = ENDPOINT_BASE + 'articles/';
const ENDPOINT_SIGN_IN = ENDPOINT_BASE + 'sign-in/';
const ENDPOINT_SIGN_UP = ENDPOINT_BASE + 'sign-up/';

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_DELETE = 'DELETE';

/*
  Wraps underlying 'fetch' provided by React for syntactic sugar.
 */
const fetchJSON = (endpoint, method, data) => {
  return fetch(
    endpoint,
    {
      method: method,
      body: JSON.stringify(data),
      headers: HEADERS
    }
  ).then(
    response => response.ok ?
      response.json() : Promise.reject(response)
  );
};

// ENDPOINT_ARTICLE_LIST

export const getArticleList = () => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST,
    METHOD_GET
  ).then(json => {
    cache.setArticleList(json.data);
    return json;
  });
}

export const getArticle = (id) => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST + id,
    METHOD_GET
  ).then(json => {
    cache.setArticle(json.data);
    return json;
  });
}

export const postArticle = (data) => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST,
    METHOD_POST,
    data
  ).then(json => {
    cache.setArticle(json.data);
    return json;
  });
}

export const putArticle = (id, data) => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST + id,
    METHOD_PUT,
    data
  ).then(json => {
    cache.setArticle(json.data);
    return json;
  });
}

export const deleteArticle = (id) => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST + id,
    METHOD_DELETE
  );
}

export const postSignInToken = (email, password) => {
  return fetchJSON(
    ENDPOINT_SIGN_IN,
    METHOD_POST,
    {
      email: email,
      password: password
    }
  ).then(json => {
    cache.setIsAdminAuthenticated(true);
    return json;
  });
}

export const postSignUpToken = (email, password) => {
  return fetchJSON(
    ENDPOINT_SIGN_UP,
    METHOD_POST,
    {
      email: email,
      password: password
    }
  ).then(json => {
    cache.setIsAdminAuthenticated(true);
    return json;
  });
}
