
const initialState = {
    toggle: false,
    counter: 0
}

function reducer(state= initialState, action) {
    switch(action.type) {
        default:
            return state

        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }

    }
}

export default reducer;