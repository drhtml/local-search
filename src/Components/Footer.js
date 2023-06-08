import React from 'react'
import mainLogo from '../images/dd-log-10-years.png'

export default function Footer() {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='footer-col'>
                            <div className='footer-head'>
                                <h3>Sign Up For Our Newsletter</h3>
                            </div>
                            <div className='footer-subhead'>
                                <h4>Join 55,000+ savvy marketers</h4>
                            </div>
                            <div className='footer-text'>
                                <p>Be it the latest SEO news, analysis, or strategic advice, get everything right in your inbox!</p>
                            </div>
                            <form action="#" method="post" id="" name="" className="newsletter-subscribe" target="">
                                <input type="email" name="EMAIL" className="form-control" id="" placeholder="Enter your email address" required="" />
                                <button type="button" name="subscribe" className="btn signup-submit" id="">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='footer-col'>
                            <div className='footer-head'>
                                <h3>Connect With Us</h3>
                            </div>
                            <div className='footer-subhead'>
                                <h4>Follow us on social and be part of the conversation</h4>
                            </div>
                            <div className='footer-text'>
                                <p>Become a part of our community and stay in the loop with the latest happenings in the digital world!</p>
                            </div>
                            <ul>
                                <li>
                                    <a href='#s' target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col footer-btm'>
                        <img src={mainLogo} alt='' />
                        <p>© 2023 Dignitas Digital Pvt. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
