import React, { useState } from 'react'
import back from "./../../img/startnow.png"
import map from "./../../img/map.png"
import "./Start.css"
import pattern from "./../../img/pattern.svg"
import compas from "./../../img/kompas.png"
import play from "./../../img/play.svg"
import Video from "./video/Video"
export default function Start() {
    const [playVideo, setPlayVideo] = useState(false)
    return (
        <>
            <section className='start-section'>
                <div className="start-video">
                    {playVideo ?
                        <video src={"http://media.w3.org/2010/05/sintel/trailer.mp4"} controls autoPlay={playVideo} className='back' ></video>
                        :
                        <img src={back} alt="back img" className='back' width={854} height={480} />
                    }
                    <img src={map} alt="map img" className='img2' />
                    {!playVideo ?
                        <img src={play} alt="play img" className='play' onClick={() => { setPlayVideo(prev => !prev) }} style={{ cursor: "pointer" }} />
                        : ''}
                </div>
                <div classNam="start-main">
                    <div className="start-text">
                        <p className="sub-title">Take a Tour</p>
                        <p className="title">Discover Our Travel Guideline</p>
                        <p className="desc">For curious travelers who want to connect locally and go<br />deeper into a place. Our Experiential Travel Guides highlight<br />offbeat and local experiences that help you.</p>
                        <button className='blue-button'>Start Now</button>
                        {/* <img src={pattern} alt="pattern" className='pattern' /> */}
                    </div>
                </div>
                <img src={compas} alt="compas" className='compas' />
            </section>
        </>
    )
}
