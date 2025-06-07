import React from 'react'
import "./Footer.css"
import logo from "./../../img/logo.svg"
import facebook from "./../../img/facebook.svg"
import instagram from "./../../img/instagram.svg"
import discord from "./../../img/discord.svg"
import dumaloq from "./../../img/dumaloq.png"
export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-items">
                    <img src={logo} alt="logo" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div className="social-media">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
                <div className="line"></div>
                <p className='copy-right'> © 2021. All copyrights reserved by RH Agency</p>
            </div>
        </footer>
    )
}
