import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store'
import { Provider } from 'react-redux';
import './basicConfig.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
