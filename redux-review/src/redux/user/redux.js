const initialState = {
    isLoggedIn: false,
    info: {}
}

const Action = {
    Types: {
        UPDATE_STATE: '@@USER/UPDATE_STATE'
    },

    Creator: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        })
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        default: return state
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.type
            }
        }
    }
}

export {reducer, Action}