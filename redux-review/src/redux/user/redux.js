 const initialState = {

}


const Action = {
    Types: {
        UPDATE_STATE: '@@USER/updateState',
        GET_USERS: 'GET_USERS'
    },

    Creators: {
        updateState: props => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        handleSidebar: props => ({
            type: Action.Types.HANDLE_SIDEBAR,
            props
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
                ...action.props
            }
        }
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                openSidebar: action.props
            }
        }
    }
}

export {reducer, Action}