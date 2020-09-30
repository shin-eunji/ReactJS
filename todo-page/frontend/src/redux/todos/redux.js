const initialState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
        GET_TODOS: 'GET_TODOS',
        ADD_TODO: 'ADD_TODO'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        default: return state
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}