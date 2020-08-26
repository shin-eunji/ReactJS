const initialState = {
    openSidebar: false,
    popup: false
}

const Action = {
    Types: {
        UPDATE_STATE: '@@APP/UPDATE_STATE'
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        })
    }
}

Action.Creators.updateState();
// type: Action.Types.UPDATE_STATE = '@@APP/UPDATE_STATE'

const reducer = (state = initialState, action) => {
    // state 현재 state
    // action 액션
    switch (action.type) {

        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        default: return state;
    }

}

export {reducer, Action}