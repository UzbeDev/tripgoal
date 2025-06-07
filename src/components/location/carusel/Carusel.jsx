import React from 'react'
import rating from "./../../../img/rating 1.svg"
import "./Carusel.css"
import card1 from "./../../../img/card-card1.png"
import card2 from "./../../../img/card-card2.png"
import card3 from "./../../../img/card-card3.png"
export default function Carusel() {
    return (
        <div className='car-cards'>
            <div className="car-card">
                <img src={card1} alt="card image" className='card-image' />
                <div className="car-text">
                    <div className="text">
                        <p className="title">Bali Handara Gate</p>
                        <p className="country">Indonesia</p>
                    </div>
                    <div className="price">
                        <img src={rating} alt="rating" />
                        <p>$1200</p>
                    </div>
                </div>
            </div>
            <div className="car-card">
                <img src={card2} alt="card image" className='card-image' />
                <div className="car-text">
                    <div className="text">
                        <p className="title">Bali Handara Gate</p>
                        <p className="country">Indonesia</p>
                    </div>
                    <div className="price">
                        <img src={rating} alt="rating" />
                        <p>$1200</p>
                    </div>
                </div>
            </div>
            <div className="car-card">
                <img src={card3} alt="card image" className='card-image' />
                <div className="car-text">
                    <div className="text">
                        <p className="title">Bali Handara Gate</p>
                        <p className="country">Indonesia</p>
                    </div>
                    <div className="price">
                        <img src={rating} alt="rating" />
                        <p>$1200</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
