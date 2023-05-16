import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';
import '@styles/css/reset.css';

import rootReducer from './store/index';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

const element = (
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(element);