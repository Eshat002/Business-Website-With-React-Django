import React from 'react'
import "./SwiperCompo.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'swiper/modules';


const SwiperCompo = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/customer/api/review-list/'); // Replace 'https://api.example.com/data' with your API endpoint
                setReviews(response.data);
                console.log("review", reviews)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []); // Empty dependency array means this effect runs once after the component mounts

    const breakpoints = {

        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 1.5,
        },

    };





    return (

        <div>
            <Swiper
                spaceBetween={50}
                // slidesPerView={1.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={breakpoints}
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className='swiper-compo-card'>
                            <div className="swiper-body">
                                <p>{review.body}</p>

                            </div>
                            <div className='d-flex justify-content-center'>
                                <img src={`http://127.0.0.1:8000${review.customer_avatar_url}`} alt="customer-image" />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default SwiperCompo
