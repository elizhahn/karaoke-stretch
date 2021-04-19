import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const applyRouter = <BrowserRouter>
  <App />
</BrowserRouter>;

ReactDOM.render(applyRouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();