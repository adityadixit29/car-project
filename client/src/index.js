import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Importing Google Fonts

// Importing favicon
import "./assets/logo/favicon.png";

// Importing font-awesome.min.css
import "./assets/css/font-awesome.min.css";

// Importing linear icon css
import "./assets/css/linearicons.css";

// Importing flaticon.css
import "./assets/css/flaticon.css";

// Importing animate.css
import "./assets/css/animate.css";

// Importing owl.carousel.css and owl.theme.default.min.css
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";

// Importing bootstrap.min.css
import "./assets/css/bootstrap.min.css";

// Importing bootsnav.css
import "./assets/css/bootsnav.css";

// Importing style.css
import "./assets/css/style.css";

// Importing responsive.css
import "./assets/css/responsive.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
