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
                                <p>Get the latest local SEO news, research, and tactical advice sent to your inbox.</p>
                            </div>
                            <form action="#" method="post" id="" name="" class="newsletter-subscribe" target="">
                                <input type="email" value="" name="EMAIL" class="form-control" id="" placeholder="Enter your email address" required="" />
                                <input type="submit" value="Subscribe" name="subscribe" class="btn signup-submit" id=""  />
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
                                <p>Join the community of like-minded professionals, and stay up-to-date on all things local.</p>
                            </div>
                            {/* <ul>
                                <li>
                                    <a href='#' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col footer-btm'>
                        <img src={mainLogo} />
                        <p>© 2023 Dignitas Digital Pvt. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
