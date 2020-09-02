import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./redux/store";

const state = store.getState();
console.log("state", state);
console.log("store", store);

store.dispatch({
    type: '@@APP/UPDATE_STATE',
    prop: {
        name: 'koo'
    }
})

const state2 = store.getState();
console.log("after dispatch Action", state2);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
