import React from 'react'
import mainLogo from '../images/dd-log-10-years.png'

export default function Header() {
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={mainLogo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Listings Management</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#">Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Book a Demo</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Insights</a>
                        </li> 
                    </ul> 
                </div>
                <ul className="top-nav-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn try-btn" type="submit">Try it free</button>
                    </li> 
                </ul>
            </div>
            </nav>
        </header>
    </>
  )
}
