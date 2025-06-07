import React from 'react'
import "./Social.css"
import woman from "./../../img/contact-woman.png"
import Carusel from './carusel/Carusel'
export default function Social() {
    return (
        <section className='social-section'>
            <div className="container">
                <div className="info-side">
                    <div className="text">
                        <p className="sub-title">Social Feed</p>
                        <p className="title">Check Our Instagram<br />Profile</p>
                    </div>
                    <div className="btn">
                        <button className="blue-button">Follow Us</button>
                    </div>
                </div>
                <div className="social-pictures">
                    <Carusel/>
                </div>
                <div className="contact-box">
                    <div className="box-text">
                        <div className="sub-title">Contact Us</div>
                        <div className="title">Do You Have Any <br />Questions?</div>
                        <div className="blue-button">Contact Us</div>
                    </div>
                    <div className="box-img">
                        <img src={woman} alt="woman img with bug" />
                    </div>
                </div>
            </div>
        </section>
    )
}
