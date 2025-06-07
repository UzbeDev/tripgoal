import React from 'react'
import dotmap from "./../../img/dotmap.svg"
import "./Test.css"
import person1 from "./../../img/person1.png"
import person2 from "./../../img/person2.png"
import person3 from "./../../img/person3.png"
import person4 from "./../../img/person4.png"
import person5 from "./../../img/person5.png"
import person6 from "./../../img/person6.png"
import person7 from "./../../img/person7.png"
import person8 from "./../../img/person8.png"
import Carusel from './Carusel/Carusel'
export default function Test() {
    return (
        <section className='test-section'>
            <div className="container">
                <p className="sub-title">Testimonials</p>
                <p className="title">What Our Customer Say About Us</p>
                <p className="desc">What customers says about our service and guideline. Customers compliment<br />is most important to upgradation of bussiness service </p>
                <div className="test-main">
                    <img src={dotmap} alt="dot map" />
                    <div className="carusel">
                        <Carusel />
                    </div>
                    <img src={person1} alt="person img" className='person1' />
                    <img src={person2} alt="person img" className='person2' />
                    <img src={person3} alt="person img" className='person3' />
                    <img src={person4} alt="person img" className='person4' />
                    <img src={person5} alt="person img" className='person5' />
                    <img src={person6} alt="person img" className='person6' />
                    <img src={person7} alt="person img" className='person7' />
                    <img src={person8} alt="person img" className='person8' />
                </div>
            </div>
        </section>
    )
}
