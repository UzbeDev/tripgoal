import React from 'react'
import "./Location.css"
import Carusel from './carusel/Carusel'

export default function Location() {
    return (
        <section className='location-section'>
            <div className="container">
                <p className='sub-title'>Location</p>
                <p className="title">Suggested Location</p>
                <p className="desc">Travel is my life. Since 1999, I’ve been traveling around the world nonstop.<br />If you also love travel, you’re in the right place!
                </p>
                <Carusel />

            </div>
        </section>
    )
}
