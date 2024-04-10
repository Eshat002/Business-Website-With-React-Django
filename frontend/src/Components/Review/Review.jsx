import React from 'react'
import './Review.css'
import SwiperCompo from '../SwiperCompo/SwiperCompo'

const Review = () => {
    return (
        <div className='review'>
            <div className="custom-container-fluid">
                <div className="row">
                    <div className="col-lg-6 first-col">
                        <h5 className="generic-sub-headline">TESTIMONIALS</h5>
                        <h2 className="generic-headline review-headline">Customer review’s</h2>
                        <p className="review-text">Our customer varies from the singular party to enterprise level.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="swiper-container">
                            <SwiperCompo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
