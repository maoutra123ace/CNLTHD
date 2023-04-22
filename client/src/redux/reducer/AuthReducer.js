import ACTIONS from '../actions/'

const initialState = {
    account: [],
    isLogged: false,
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
            return {
                ...state,
                account: action,
                isLogged: true
            }
        case ACTIONS.GET_ACCOUNT:
            return {
                ...state,
                account: action.payload.account,
                isAdmin: action.payload.isAdmin
            }
        default:
            return state
    }
}

export default authReducer