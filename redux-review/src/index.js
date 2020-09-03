import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./redux/store";
import './scss/style.scss'


const state = store.getState();
console.log(state);


store.dispatch({
    type: '@@APP/UPDATE_STAET',
    props: {
        name: 'SHIN'
    }
});

const state2 = store.getState();
console.log(state2);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
