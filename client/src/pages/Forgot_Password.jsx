import React, {useState} from "react";


const initialState = {
    email: '',
    err: '',
    success: ''
}

function Forgot_Password(){
    // const [data, setData] = useState(initialState)

    // const {email, err, success} = data

    // const handleChangeInput = e => {
    //     const {name, value} = e.target
    //     setData({...data, [name]:value, err: '', success: ''})
    // }

    // const forgotPassword = async () => {
    //     if(!isEmail(email))
    //         return setData({...data, err: 'Invalid emails', success: ''})
    //     try {
    //         const res = await axios.post('/user/forgot', {email})
    //         return setData({...data, err: '', success: res.data.msg})
    //     } catch (err) {
    //         err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
    //     }
    // }
    return (
        <div className="fg_pass">
            <h2>Forgot Your Password?</h2>

            <div className="row">
                {/* {err && showErrMsg(err)}
                {success && showSuccessMsg(success)} */}

                <label htmlFor="email">Enter your email address</label>
                <input type="email" name="email" id="email" />
                <button>Verify your email</button>
            </div>
        </div>
    )
}

export default Forgot_Password;