import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = (account) => {
    return {
        type: ACTIONS.LOGIN,
        payload: account,
    }
}

export const fetchAccount = async (token) => {
    const res = await axios.get('account/infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAccount = (res) => {
    return {
        type: ACTIONS.GET_ACCOUNT,
        payload: {
            account: res.data,
            isAdmin: res.data.role === "1" ? true : false
        }
    }
}
