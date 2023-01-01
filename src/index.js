import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import './css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './config/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);