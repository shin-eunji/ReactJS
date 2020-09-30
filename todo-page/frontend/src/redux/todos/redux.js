const initialState = {
    list: []
}

const Action = {
    Types: {
        UPDATE_STATE: 'TODO/UPDATE_STATE',
        GET_TODOS: 'GET_TODOS',
        ADD_TODO: 'ADD_TODO'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getTodos: () => ({
            type: Action.Types.UPDATE_STATE,
        }),
    }
}

const reducer = (state=initialState, action) => {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
        default: return state
        case Action.Types.UPDATE_STATE: {
            console.log("updateState", state);
            return {
                ...state,
                ...action.payload
            }
        }
        case Action.Types.GET_TODOS: {
            return {
                ...state,
                ...action
            }
        }
    }
}

export {reducer, Action}