const initalState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: '@TODOS/UPDATE_STATE',
        GET_TODOS: 'GET_TODOS',
        ADD_TODO: 'ADD_TODO'
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        getTodos: () => ({
            type: Action.Types.GET_TODOS
        }),
        addTodo: (payload) => ({
            type: Action.Types.ADD_TODO,
            payload
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


