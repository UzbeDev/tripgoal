import React from 'react'
import about1 from "./../../img/about1.png"
import about2 from "./../../img/about2.png"
import "./About.css"
export default function About() {
    return (
        <div className="container">
            <section className='about-section'>
                <div className="about-main">
                    <p className="sub-title">About Us</p>
                    <p className="title">The Perfect Travel Place For<br />You & Your Family</p>
                    <p className="desc">how travel can be one of the best tools for personal growth. We share<br />
                        some of the life lessons we've learned on the road that has provided<br />
                        us insight into empathy, mindfulness, meditation, comfort zones,<br />
                        two-way storytelling, being present, connection and more.</p>
                    <div className="about-cards">
                        <div className="card">
                            <p className='number'>10M+</p>
                            <p className="name">Visitors</p>
                        </div>
                        <div className="card">
                            <p className='number'>109</p>
                            <p className="name">Hotels</p>
                        </div>
                        <div className="card">
                            <p className='number'>29</p>
                            <p className="name">Food Shop</p>
                        </div>
                        <div className="card">
                            <p className='number'>29</p>
                            <p className="name">Food Shop</p>
                        </div>
                        
                    </div>
                </div>
                <div className="about-img">
                    <img src={about1} alt="about img 1" className='img1' />
                    <img src={about2} alt="about img 2" className='img2' />
                </div>
            </section>
            <div className="clearfix"></div>
        </div>
    )
}
