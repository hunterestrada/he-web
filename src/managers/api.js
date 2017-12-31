
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const ENDPOINT_BASE = 'http://127.0.0.1:2250/';
const ENDPOINT_ARTICLE_LIST = ENDPOINT_BASE + 'articles/';
const ENDPOINT_SIGN_IN = ENDPOINT_BASE + 'sign-in/';
const ENDPOINT_SIGN_UP = ENDPOINT_BASE + 'sign-up/';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';

/*
  Wraps underlying 'fetch' provided by React for syntactic sugar.
 */
const fetchJSON = (endpoint, method = METHOD_GET, data) => {
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
    ENDPOINT_ARTICLE_LIST
  )
}

export const putArticle = (id) => {
  return fetchJSON(
    ENDPOINT_ARTICLE_LIST,
    METHOD_PUT,
    {
      id: id
    }
  )
}

export const postSignInToken = (email, password) => {
  return fetchJSON(
    ENDPOINT_SIGN_IN,
    METHOD_POST,
    {
      email: email,
      password: password
    }
  )
}

export const postSignUpToken = (email, password) => {
  return fetchJSON(
    ENDPOINT_SIGN_UP,
    METHOD_POST,
    {
      email: email,
      password: password
    }
  )
}
