const initialState = {
    isLoggedIn: false,
    info: null
}
const Action = {
    Types: {
        UPDATE_STATE: '@@USER/UPDATE_STATE'
    },
    Creaters: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        })
    }
}

Action.Creaters.updateState();
// {type: '@@APP/UPDATE_STATE'}
const reducer =  (state = initialState, action) => {
    switch(action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}

export {reducer, Action}