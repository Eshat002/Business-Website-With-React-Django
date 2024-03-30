import React from 'react';
import './Hero.css';
import Team from "../../Img/team.png";


const Hero = () => {
    return (
        <div className='hero'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-col">
                        <h5 className='generic-sub-headline'>Welcome to</h5>
                        <h2 className="generic-headline"><span className='ak-span'>AK</span> Enterprises Solution </h2>
                        <p className="generic-text">We are a trusted dealer of scrap materials, electronic scraps, wooden scraps, furniture, and provide efficient shifting and demolition services.</p>
                        <button className='custom-primary-btn'>Learn more</button>
                    </div>
                    <div className="col-lg-6 text-end right-col">
                        <img src={Team} alt="team" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
