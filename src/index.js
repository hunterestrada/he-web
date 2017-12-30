import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './main/App.js';
import registerServiceWorker from './main/registerServiceWorker';

import './index.css';

const ID_ROOT = 'root';

ReactDOM.render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ),
  document.getElementById(ID_ROOT)
);
registerServiceWorker();
