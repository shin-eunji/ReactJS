import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./redux/store";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HISTORY } from './Helpers/History'
import './scss/style.scss'

import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router History={HISTORY}>
                <Router>
                    <Route path={"/"} component={Main}></Route>
                    <Route path={"/about"} component={About}></Route>
                    <Route path={"/service"} component={Service}></Route>
                    <Route path={"/contact"} component={Contact}></Route>
                    <App/>
                </Router>
            </Router>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
