import {createActions, createReducer} from "reduxsauce";

const initialState = {
    openSidebar: false,
    popconfirm: {
        title: ''
    }
}

export const Action = createActions({
    updateState: ['state'],
    handlePopconfirm: ['title']
},{prefix: 'APP'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
    [Action.Types.HANDLE_POPCONFIRM]: (state, {title}) => ({
        ...state,
        popconfirm: {
            title
        }
    })
})
