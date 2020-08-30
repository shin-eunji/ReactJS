const initialState = {
    openSidebar: false,
    popup: {
        title: '',
        description: ''
    },
    docs: []
}

export const Action = {
    Types: {
        HANDLE_SIDEBAR: 'handleSidebar',
        UPDATE_STATE: 'updateState'
    },

    Creators: {
        handleSidebar: (payload) => {
            return {
                type: Action.Types.HANDLE_SIDEBAR,
                payload
            }
        },
        updateState: (props) => ({
            type:Action.Types.UPDATE_STATE,
                props
        })
    }
}

function reducer(state= initialState, action) {
    console.log("action", action);
    switch (action.type) {
        default: return state;
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                openSidebar: action.payload
            }
        }
        case Action.Types.UPDATE_STATE: {
            console.log("action.props", action.props);
            return {
                ...state,
                ...action.props
            }
        }
    }
}


export default reducer;