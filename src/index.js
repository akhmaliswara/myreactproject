import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

/*
  Fitur-fitur yang ada di project ini antara lain
  - Home, menunjukkan berapa kali mengklik link menuju page ini
  - Converter, melakukan konversi sudut (radian dan derajat)
  - Input Profile, berisi form untuk melakukan input profile
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
