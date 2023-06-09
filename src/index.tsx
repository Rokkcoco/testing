import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWords} from "./01-hello-tests/01";
import {User} from "./06-callbacks/06";

// const result = splitIntoWords("hello");
// const sentense = "Hello my friends!";
// console.log(result);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
