const initialState = {
    openSidebar: false,
    popup: false
}


const Action = {
    Types: {
        UPDATE_STATE: '@@APP/updateState',
        HANDLE_SIDEBAR: 'handleSidebar'
    },

    Creators: {
        updateState: props => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        handleSidebar: props => ({
            type: Action.Types.HANDLE_SIDEBAR,
            props
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