import React from 'react'
import Chat from "./../../img/Chat.svg"
import Calendar from "./../../img/Calendar-card.svg"
import Star from "./../../img/Star.svg"
import "./Steps.css"
export default function Steps() {
  return (
    <div className="container">
      <section className='steps-section'>
        <p className="sub-title">3 steps for the perfect trip</p>
        <h1 className="title">Find travel perfection</h1>
        <p className="desc">Naturally head of the class whenit comes to luxury travel  planning, because<br />
          we do more homework than anyone else</p>
        <div className="cards">
          <div className="card">
            <img src={Chat} alt="card img" />
            <p className="card-title">Tell us what you want to do</p>
            <p className="card-desc">Fill out a 2-minute questionnaire<br />about how you like to travel</p>
          </div>
          <div className="card">
            <img src={Calendar} alt="card img" />
            <p className="card-title">Share your travel preference</p>
            <p className="card-desc">Fill out a 2-minute questionnaire<br />about how you like to travel</p>
          </div>
          <div className="card">
            <img src={Star} alt="card img" />
            <p className="card-title">We’ll give you recommendations</p>
            <p className="card-desc">Fill out a 2-minute questionnaire<br />about how you like to travel</p>
          </div>
        </div>
      </section>
    </div>
  )
}
