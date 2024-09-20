import React, { useState } from 'react'
import '../Assets/globals.css'; 
import useLoginHook from '../hooks/useLoginHook';
import googleIcon from '../Assets/images/google.svg'
import logo from '../Assets/images/logo.png'

const Login = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useLoginHook();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin(name, email, password);
    };

  return (
    <div className="App">
        <div className='left-section'>
       <h2 className='form-title'>Welcome back</h2>
       <p className='form-header'>Welcome back! Please enter your details</p>

       <form className='login-form'>
       <label className='input-label'>Name</label>
        <div className="input-wrapper">
          
            <input type='text' value={name} placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)} className='input-field' required/>
        </div>
        <label className='input-label'>Email</label>
        <div className="input-wrapper">
          
            <input type='email' value={email} placeholder='Enter your email'  onChange={(e)=>setEmail(e.target.value)} className='input-field'  required/>
        </div>
        <label className='input-label'>Password</label>
        <div className="input-wrapper">
            <input type='password' value={password} placeholder='password' autoComplete="new-password" onChange={(e)=>setPassword(e.target.value)} className='input-field' required/>
        </div>
        <div className="remember-forgot-wrapper">
            <div className="remember-section">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>
            <a href="#" className="forgot-pass-link">Forgot Password?</a>
          </div>

        <button onClick={handleSubmit} className='login-button'>Sign In</button>
        <div className='social-login'>
        <button className='social-button'>
            <img src={googleIcon}  alt='google' className='social-icon'/>
            Sign in with google
        </button>
       </div>
       <p className="signup-text">Don't have an account?<a href="#">Signup Now</a></p>
      
  
       </form>

       </div>
       <div className='right-section'>
       <img src={logo}  alt='semi-circle' className='semi-circle'/>
       </div>
       </div>
  )
}

export default Login