import React from 'react'
import './Works.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import worksSwiperImage1 from '../../Img/worksSwiperImage1.png'


const Works = () => {

    return (
        <div className='works mb-5'>
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-lg"></div> */}
                    <div className="col-lg-12 text-center">
                        <h5 className="generic-sub-headline">Our Work</h5>
                        <h2 className='generic-headline works-headline'>Previous work report</h2>
                        <div className="swiper-container">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={{ clickable: true }}
                                navigation={true}

                            >
                                <SwiperSlide>
                                    <div className="single-slide">
                                        <div className="image-container">
                                            <img src={worksSwiperImage1} alt="works-image" />
                                        </div>
                                        <div className="details-container">
                                            <h2 className='generic-headline works-single-slide-headline'>Shifting & Demolition</h2>
                                            <p className='generic-text'>Worked for Bank of Baroda Navi Mumbai branch, the work included shifting of branch from Navi Mumbai Branch to Regional Branch. We also did demolition work properly with the given period.</p>
                                            <button className='custom-primary-btn'>See More</button>
                                        </div>

                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-slide">
                                        <div className="image-container">
                                            <img src={worksSwiperImage1} alt="works-image" />
                                        </div>
                                        <div className="details-container">
                                            <h2 className='generic-headline works-single-slide-headline'>Shifting & Demolition</h2>
                                            <p className='generic-text'>Worked for Bank of Baroda Navi Mumbai branch, the work included shifting of branch from Navi Mumbai Branch to Regional Branch. We also did demolition work properly with the given period.</p>
                                            <button className='custom-primary-btn'>See More</button>
                                        </div>

                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-slide">
                                        <div className="image-container">
                                            <img src={worksSwiperImage1} alt="works-image" />
                                        </div>
                                        <div className="details-container">
                                            <h2 className='generic-headline works-single-slide-headline'>Shifting & Demolition</h2>
                                            <p className='generic-text'>Worked for Bank of Baroda Navi Mumbai branch, the work included shifting of branch from Navi Mumbai Branch to Regional Branch. We also did demolition work properly with the given period.</p>
                                            <button className='custom-primary-btn'>See More</button>
                                        </div>

                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-slide">
                                        <div className="image-container">
                                            <img src={worksSwiperImage1} alt="works-image" />
                                        </div>
                                        <div className="details-container">
                                            <h2 className='generic-headline works-single-slide-headline'>Shifting & Demolition</h2>
                                            <p className='generic-text'>Worked for Bank of Baroda Navi Mumbai branch, the work included shifting of branch from Navi Mumbai Branch to Regional Branch. We also did demolition work properly with the given period.</p>
                                            <button className='custom-primary-btn'>See More</button>
                                        </div>

                                    </div>

                                </SwiperSlide>

                            </Swiper>

                            {/* <div className="prev-btn-container">
                                <a onClick={handlePrevBtn}>
                                    <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id='works-custom-prev-svg' d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2" stroke="#A8B4E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                            <div className="next-btn-container">
                                <a onClick={handleNextBtn}>
                                    <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17" stroke="#A8B4E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div> */}


                        </div>

                    </div>
                    {/* <div className="col-lg"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Works
