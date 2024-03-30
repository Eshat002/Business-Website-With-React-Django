import React from 'react'
import './Info.css'
import Team2Image from '../../Img/team2.png'

const Info = () => {
    return (
        <div className='info'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className='generic-sub-headline'>We are one of the leading company  In</h5>
                        <h2 className='generic-headline info-headline'>Scrap & Shifting </h2>
                        <p className='info-text generic-text mb-5'>AK Enterprises is an established family run business in the heart of Mumbai City dealing in all types of scrap metals. We have strong commercial traders in India enabling us to pay the best price possible. This means that we pay higher than our competitors 99% of the time.</p>
                        <button className="custom-primary-btn our-service-btn">Our Services</button>
                        <button className="custom-primary-btn connect-btn">Connect with us</button>

                    </div>
                    <div className="col-lg-6 text-end">
                        <img src={Team2Image} alt="info-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
