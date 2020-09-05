import store from "../store";

const initialState = {
    openSidebar: false,
    popup: {
        title: '',
        description: ''
    }
}


const Action = {
    Types: {
        UPDATE_STATE: 'updateState',
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