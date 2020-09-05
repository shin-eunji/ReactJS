import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./redux/store";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HISTORY } from './Helpers/History'
import './scss/style.scss'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router History={HISTORY}>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
