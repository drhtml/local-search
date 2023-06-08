import React from 'react'
import mainLogo from '../images/dd-log-10-years.png'
import LoginImg from '../images/leadership-skills.jpg'

export default function Login() {
  return (
    <>
        <section className="SignUp-container">
          <div className='SignUp-loginFormContainer'>
            <form className="SignUp-loginForm-form">
              <img src={mainLogo} alt='' />
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="SignUp-loginForm-buttonsContainer">
                <button type="submit" className="btn loginForm-button">Login</button>
              </div>
             <div className='check-forgot'>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">Remember me</label>
                </div> 
                <a href='#'>Forgot your password?</a>
             </div>
              <ul className="SignUp-loginForm-footer"> 
                <li>Don’t have an account? <a href='#'>Sign up now!</a></li>
              </ul>
            </form>
          </div>
          <div className="SignUp-presentationContainer">
            <div className='SignUp-presentationContainer-inner'>
              <div className="PromoteWhiteTheme-container">
                <h2>New DD Course: How to Clean Up and Manage Local Business Listings</h2>
              </div>
              <div className='login-videoWrapper'>
                <img src={LoginImg} alt='' />
              </div>
              <p className="PromoteWhiteTheme-whatsNew">
                <a data-hook-button="link" className="btn enroll-btn" href="#s" target="_blank">Enroll today</a>
              </p>
            </div>
          </div>
        </section>
    </>
  )
}
