import {combineReducers} from 'redux'
import auth from "./AuthReducer.js"
import token from "./TokenReducer.js"
import accounts from "./AccountReducer.js"

export default combineReducers({
    auth,
    token,
    accounts
})