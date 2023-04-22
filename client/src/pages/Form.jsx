import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignIn from '../components/Form/SignIn';
import SignUp from '../components/Form/SignUp';
//import axios from 'axios'
//import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
//import {dispatchLogin} from '../../../redux/actions/authAction'
//import {useDispatch} from 'react-redux'



const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function Form() {
  // const [user, setUser] = useState(initialState)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const {email, password, err, success} = user

  // const handleChangeInput = e => {
  //     const {name, value} = e.target
  //     setUser({...user, [name]:value, err: '', success: ''})
  // }


  // const handleSubmit = async e => {
  //     e.preventDefault()
  //     try {
  //         const res = await axios.post('/user/login', {email, password})
  //         setUser({...user, err: '', success: res.data.msg})

  //         localStorage.setItem('firstLogin', true)

  //         dispatch(dispatchLogin())
  //         navigate('/')

  //     } catch (err) {
  //         err.response.data.msg && 
  //         setUser({...user, err: err.response.data.msg, success: ''})
  //     }
  // }

  // const responseGoogle = async (response) => {
  //     try {
  //         const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

  //         setUser({...user, error:'', success: res.data.msg})
  //         localStorage.setItem('firstLogin', true)

  //         dispatch(dispatchLogin())
  //         navigate('/')
  //     } catch (err) {
  //         err.response.data.msg && 
  //         setUser({...user, err: err.response.data.msg, success: ''})
  //     }
  // }

  // const responseFacebook = async (response) => {
  //     try {
  //         const {accessToken, userID} = response
  //         const res = await axios.post('/user/facebook_login', {accessToken, userID})

  //         setUser({...user, error:'', success: res.data.msg})
  //         localStorage.setItem('firstLogin', true)

  //         dispatch(dispatchLogin())
  //         navigate('/')
  //     } catch (err) {
  //         err.response.data.msg && 
  //         setUser({...user, err: err.response.data.msg, success: ''})
  //     }
  // }
  // const handle_SignIn_to_SignUp () => {

  // }

  const containerRef = useRef(null);
  const toggleSignIn = () => {
    containerRef.current.classList.remove("right-panel-active");

  }
  const toggleSignUp = () => {
    containerRef.current.classList.add("right-panel-active");
    console.log(containerRef);
  }

  return (
    //   <div className="wrapper">
    //     <form className="login">
    //       <p className="title">Sign In</p>
    //       <input type="text" placeholder="Username" autofocus/>
    //       <i className="fa fa-user"></i>
    //       <input type="password" placeholder="Password" />
    //       <i className="fa fa-key"></i>
    //       <Link to="/forgot_password">Forgot your password?</Link>
    //       <p>New Customer? <Link to="/SignUp">Sign Up</Link></p>
    //       <button>
    //         <i className="spinner"></i>
    //         <span className="state">Sign In</span>
    //       </button>
    //     </form>
    // </div>

    <>
      <div className="signIn">
        <div className="container" ref={containerRef}>
          <SignUp/>
          <SignIn/>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <Link to="/SignIn"><button className="ghost" id="signIn" onClick={toggleSignIn}>Sign In</button></Link>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <Link to="/SignUp"><button className="ghost" id="signUp" onClick={toggleSignUp}>Sign Up</button></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Form