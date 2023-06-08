import React from 'react'
//import mainLogo from '../images/dd-log-10-years.png' 
import Countries from '../API/countries.json';

export default function Signup() {
  return (
    <>
      <section className="SignUp-container SignUp-bg">
          <div className='SignUp-loginFormContainer'>
            <form className="SignUp-loginForm-form">
              {/* <img src={mainLogo} alt='' /> */}
              <h2>Try DD Local Search free for 14 days</h2>
              <p>Every feature. Unlimited access. No credit card required.</p>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="NameInput" placeholder="Full Name" />
                <label for="NameInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="CompanyInput" placeholder="Company Name" />
                <label for="CompanyInput">Company Name</label>
              </div>
              <div className="form-floating mb-3">
                <select className="form-select" id="SelectCountry" key={ Countries.name }>  
                    {
                        Countries.map( Countries => {
                            return(
                                <option value={Countries.name}>{Countries.name}</option>
                            )
                        })
                    }  
                </select> 
                <label htmlFor="SelectCountry">Country</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="SignUp-loginForm-buttonsContainer">
                <button type="submit" className="btn loginForm-button">Get Started</button>
              </div>
              <div className='check-forgot'>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">I agree to the <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a></label>
                </div>  
              </div>
              <ul className="SignUp-loginForm-footer"> 
                <li>Already a customer? <a href='#'>Login now!</a></li>
              </ul>
            </form>
          </div> 
        </section>
    </>
  )
}
