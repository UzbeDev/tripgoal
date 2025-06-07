import React from 'react'
import "./Intro.css"
import intoImg1 from "./../../img/intro-img-1.png"
import intoImg2 from "./../../img/intro-img-2.png"
import calendar from "./../../img/calendar.svg"
export default function Intro() {
    return (
        <section className='intro-section'>
            <div className="container">
                <div className="intro-img">
                    <img src={intoImg1} alt="intro img 1" className='img1' />
                    <img src={intoImg2} alt="intro img 2" className='img2' />
                </div>
                <div className="intro-main">
                    <p className="intro-book">Book Now</p>
                    <div className="intro-title">
                        <h1>Let’s Enjoy Your Trip<br />with TripGoal</h1>
                    </div>
                    <div className="intro-desc">
                        Thinking of taking a break from every day's busy life? Planning to go<br />out of the country with your loved ones to have some fun and quality<br />time in a cost-effective way?
                    </div>
                    <button className='blue-button'>Start Now</button>
                </div>
            </div>
            <div className="intro-box">
                <div className="intro-box__select">
                    <select>
                        <option value="1">Location</option>
                    </select>
                    <p className='selected-info'>Select</p>
                </div>
                <div className="intro-box__select">
                    <select>
                        <option value="">Your Category</option>
                    </select>
                    <p className='selected-info'>Select</p>
                </div>
                <div className="intro-box__select">
                    <select>
                        <option value="">Total Person</option>
                    </select>
                    <p className='selected-info'>Select</p>
                </div>
                <div className="intro-box__book">
                    <img src={calendar} alt="calendar" />
                    <p>Book Now</p>
                </div>
            </div>
        </section>
    )
}
