const initialState = {
    isLoggedIn: false,
    info: null,
}


const Action = {
    Types: {
        UPDATE_STATE: '@@USER/UPDATE_STATE'
    },

    Creators: {
        updateState: (payload) =>({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }
}

// Action.Creators.updateState();
// {
//  type: '@@APP/UPDATE_STATE'
// }

const reducer = (state = initialState, action) => {
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

export {reducer, Action}