

const initialState = {
    openSidebar: false,
    popup: {
        title: '',
        text: ''
    }
}


export const Action = {
    Types: {
        UPDATE_STATE: "updateState",
        HANDLE_SIDEBAR: 'handleSidebar'
    },

    Creators: {
        updateState: (payload) => ({
            return: {
                type: Action.Types.UPDATE_STATE,
                payload
            }
        }),

        handleSidebar: (payload) => ({
            return: {
                type: Action.Types.HANDLE_SIDEBAR,
                payload
            }
        })
    }
}


function reducers(state = initialState, action) {
    switch (action.type) {
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                openSidebar: action.payload
            }
        }
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state;
    }
}
export default reducers;