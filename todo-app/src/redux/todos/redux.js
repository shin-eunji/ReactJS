const initalState = {
    Sidebar: false
}

export const Action = {
    Types: {
        UPDATE_STATE: 'TODO/UPDATE_STATE'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }
}

export const reducer = function (state = initalState, action) {
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

export default reducer;

