import React, {useState} from "react";
import axios from 'axios'
import { isEmpty, isMatch, isEmail, isLength, isPhoneNumber } from "../../utils/Validation";
import { showErrMsg, showSuccessMsg } from "../../utils/Notification.js";
import API_URL from "../../url/url";

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  phone: '',
  address: '',
  err: '',
  success: ''
}

function SignUp() {
  const [account, setAccount] = useState(initialState)

  const { name, email, password, cf_password, phone, address, err, success } = account


  const handleChangeInput = e => {
    const { name, value } = e.target
    setAccount({ ...account, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (isEmpty(name) || isEmpty(password)||isEmpty(address)||isEmpty(phone))
      return setAccount({ ...account, err: "Please fill in all fields.", success: '' })

    if (!isEmail(email))
      return setAccount({ ...account, err: "Invalid emails.", success: '' })

    if (isLength(password))
      return setAccount({ ...account, err: "Password must be at least 6 characters.", success: '' })

    if (!isMatch(password, cf_password))
      return setAccount({ ...account, err: "Password did not match.", success: '' })

    if(!isPhoneNumber(phone)){
      return setAccount({ ...account, err: "Invalid phone number.", success: '' })
    }
    try {
      const res = await axios.post("/account/register", {
        name, email, password, phone, address
      })

      setAccount({ ...account, err: '', success: res.data.msg })

    } catch (err) {
      err.response.data.msg &&
        setAccount({ ...account, err: err.response.data.msg, success: '' })
    }
  }
  return (
    <div className="form-container sign-up-container">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" value={name} name="name" onChange={handleChangeInput} />
        <input type="email" placeholder="Email" value={email} name="email" onChange={handleChangeInput} />
        <input type="password" placeholder="Password" value={password} name="password" onChange={handleChangeInput} />
        <input type="password" placeholder="Confirm Password" value={cf_password} name="cf_password" onChange={handleChangeInput} />
        <input type="text" placeholder="Phone Number" value={phone} name="phone" onChange={handleChangeInput} />
        <input type="text" placeholder="Address" value={address} name="address" onChange={handleChangeInput} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp