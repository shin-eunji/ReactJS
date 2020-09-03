const initialState = {
    openSidebar: false,
    popup: {}
};

const Action = {
    Types: {
        UPDATE_STATE: '@@APP/UPDATE_STATE',
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state;
    }
}

export {reducer, Action}
