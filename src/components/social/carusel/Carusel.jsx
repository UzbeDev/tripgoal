import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./../../../img/caruselmg1.png"
import img2 from "./../../../img/caruselmg2.png"
import img3 from "./../../../img/caruselmg3.png"
// Import Swiper styles
import "swiper/css";


export default function Carusel() {     
    return <div style={{ marginTop: "62px" }}>
        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
            <SwiperSlide><img src={img1} alt="img1"/></SwiperSlide>
            <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
        </Swiper>
    </div>

}
