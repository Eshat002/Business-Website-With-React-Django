import React, { useState, useEffect } from 'react'
import './ServiceCompo.css'
import { Link } from 'react-router-dom'

const ServiceCompo = ({ name, img, type, description }) => {
    // Empty dependency array means this effect runs once after the component mounts

    return (
        <div className='service-compo'>
            <div className="image-container">
                <img src={img} alt="service-image" />
            </div>
            <div className='text-btn-container'>
                <div className="details-container">
                    <h4 className='service-name'>{name}</h4>
                    <p className='service-type'>{type}</p>
                    <p className='service-description'>{description}</p>
                </div>
                <div className="btn-container">
                    <Link to="/contact">
                        <button className="call-us-btn">
                            Call Us
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ServiceCompo
