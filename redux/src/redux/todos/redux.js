const initalState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: '@TODOS/UPDATE_STATE',
        GET_TODOS: 'GET_TODOS',
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getTodos: () => ({
            type: Action.Types.GET_TODOS
        })
    }
}

export const reducer = function(state = initalState, action) {
    console.log("action", action);
    switch (action.type) {
        default: return state;

        case Action.Types.UPDATE_STATE: {
            
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default reducer;


