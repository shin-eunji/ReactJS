const initalState = {
    list: []
}

const Action = {
    Types: {
        UPDATE_STATE: 'APP/UPDATE_STATE',
        GET_TODOS: 'GET_TODOS'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getTodos: () => ({
            type: Action.Types.GET_TODOS
        })
    }
}

const reducer = function (state = initalState, action) {
    switch(action.type) {
        default: return state

        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export {reducer, Action}