import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Login from "./components/Login";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
