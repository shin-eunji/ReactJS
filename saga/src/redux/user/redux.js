const initialState = {
    login: false
}

const Action = {
    Types: {
        UPDATE_STATE: 'USER/UPDATE_STATE',
        GET_USERS: 'USER/GET_USERS'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload

        }),
        getUsers: () => ({
            type: Action.Types.GET_USERS
        })
    }
}

const reducer = (state = initialState, action) => {
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

export {Action, reducer}