import React from 'react'
//import { Link } from 'react-router-dom';

import mainLogo from '../images/dd-log-10-years.png'

export default function Header() {
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"><img src={mainLogo} alt='' /></a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Explore</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Listings Management</a> 
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link">Solutions</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pricing</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Book a Demo</a> 
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link">Insights</a> 
                        </li> 
                    </ul> 
                </div>
                <ul className="top-nav-right">
                    <li className="nav-item">
                        <a className="nav-link">Login</a> 
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
