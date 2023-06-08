import React from 'react'
//import { Link } from 'react-router-dom';

import mainLogo from '../images/dd-log-10-years.png'

export default function Header() {
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href='LocationSearch' className="navbar-brand"><img src={mainLogo} alt='' /></a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href='About' className="nav-link active" aria-current="page">About</a> 
                        </li>
                        <li className="nav-item">
                            <a href='Services' className="nav-link">Services</a> 
                        </li> 
                        <li className="nav-item">
                            <a href='Contact' className="nav-link">Contact</a> 
                        </li>
                        <li className="nav-item">
                            <a href='Blog' className="nav-link">Blog</a> 
                        </li> 
                    </ul> 
                </div>
                <ul className="top-nav-right">
                    <li className="nav-item">
                        <a href='Login' className="nav-link">Login</a> 
                    </li>
                    <li className="nav-item">
                        <a href='Signup' className="btn try-btn" type="submit">Try it free</a>
                    </li> 
                </ul>
            </div>
            </nav>
        </header>
    </>
  )
}
