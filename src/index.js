// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainPage from './MainPage/MainPage.js';
import MainButton from './MainPage/MainButton.js';
import reportWebVitals from './reportWebVitals';
//import './MainPage/TopNav.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainButton></MainButton>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
