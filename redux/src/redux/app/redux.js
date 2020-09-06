const initalState = {
    Sidebar: false,
    popup: {
        title: '',
        descirption: ''
    }
}


export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        GET_USER: 'GET_USER'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getUser: (payload) => ({
            type: Action.Types.GET_USER,
            payload
        })

    }
}

export const reducer = function(state = initalState, action) {
    switch (action.type) {
        default: return state;

        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default reducer;
