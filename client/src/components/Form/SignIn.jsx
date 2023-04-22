import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from "react-redux";
import {dispatchLogin} from "../../redux/actions/AuthAction";

import { showErrMsg, showSuccessMsg } from "../../utils/Notification";

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  err: '',
  success: ''
}

function SignIn() {
  const [account, setAccount] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name, email, password, err, success } = account

  const handleChangeInput = e => {
    const { name, value } = e.target
    setAccount({ ...account, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/account/login", { email, password })
      setAccount({ ...account, err: '', success: res.data.msg })
      console.log(res.data.data)
      localStorage.setItem('firstLogin', true)
      localStorage.setItem('id', res.data.data._id)
      localStorage.setItem('name', res.data.data.name)
      localStorage.setItem('email', res.data.data.email)

      initialState.id = res.data.data.id;
      initialState.name = res.data.data.name;
      initialState.email = res.data.data.email;
      //initialState.password = '123456';
      initialState.err = 'fail';
      initialState.success = 'success';
      dispatch(dispatchLogin(initialState))
      navigate('/')

    } catch (err) {
      err.response.data.msg &&
        setAccount({ ...account, err: err.response.data.msg, success: '' })
    }
  }
  return (
    <div className="form-container sign-in-container">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" value={email} name="email" onChange={handleChangeInput} />
        <input type="password" placeholder="Password" value={password} name="password" onChange={handleChangeInput} />
        <Link to="/forgot_password">Forgot your password?</Link>
        <button type="submit" >Sign In</button>
      </form>
    </div>
  )
}

export default SignIn