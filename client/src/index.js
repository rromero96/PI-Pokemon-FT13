import React from 'react';
/* import {Provider} from 'react-redux'; */

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import Store from "./Redux/Store/index";
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3000/"


ReactDOM.render(
    <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
