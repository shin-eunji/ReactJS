import {createStore} from "redux";


function counter(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 1
        }
        case 'DECREMENT': {
            return state + 1
        }
        default: return state
    }
}


export const store = createStore(counter);


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'INCREMENT'}) // 1
store.dispatch({type: 'INCREMENT'}) // 2
store.dispatch({type: 'DECREMENT'}) // 1
