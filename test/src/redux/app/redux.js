const initialState = {
    openSidebar: false
}


const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
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
    }
}

const reducer1 = (state, action) => {
    //현재 state와 action 을 가지고 있으며 case을 바꿈
    switch(action.type) {
        case 'UPDATE_STATE': {
            return {
                ...state,
                openSidebar: action.props
            }
        }
        default: return state;
    }

}

export {reducer, Action}