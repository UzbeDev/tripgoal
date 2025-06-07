import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import qushtirnoq from "./../../../img/qushtirnoq.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carusel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={qushtirnoq} alt="qushtirnoq img" />
                        <p className="text">
                            I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                        </p>
                        <p className="name">Adam L. Brian</p>
                        <p className="job">Traveller</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
