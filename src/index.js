import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </Provider>
  </React.StrictMode>
);

