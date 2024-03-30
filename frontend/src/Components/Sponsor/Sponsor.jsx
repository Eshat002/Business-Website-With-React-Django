import React from 'react'
import './Sponsor.css'
import SponsorImage from '../../Img/sponsor.png'

const Sponsor = () => {
    return (
        <div className='sponsor'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src={SponsorImage} alt="sponsor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
