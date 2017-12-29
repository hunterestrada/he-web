import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/App.js';
import registerServiceWorker from './main/registerServiceWorker';

import * as element from 'constants/element.js'

import './index.css';

ReactDOM.render(
  (<App />),
  document.getElementById(element.ID_ROOT)
);
registerServiceWorker();
