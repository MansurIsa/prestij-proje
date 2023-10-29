import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css'
import './css/responsive.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);





