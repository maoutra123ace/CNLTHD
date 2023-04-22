import ACTIONS from './index'
import axios from 'axios'

export const fetchAllAccounts = async (token) => {
    const res = await axios.get('/account/all_infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllAccounts = (res) => {
    return {
        type: ACTIONS.GET_ALL_ACCOUNTS,
        payload: res.data
    }
}