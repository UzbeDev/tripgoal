import React from 'react'
import logo from "./../../img/logo.svg"
import "./Navbar.css"
export default function Navbar() {
    return (
        <section className='nav-section'>
            <div className="container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <div className="nav-paths">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="button">
                    <button type='button' className='blue-button'>Register </button>
                </div>
            </div>
        </section>
    )
}
