import React from 'react'
import './Interest.css'


const Interest = () => {
    return (
        <div className='interest pb-4'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                        <h5 className='generic-sub-headline interest-sub-headline'>We buy & sell</h5>
                        <h1 className="generic-headline interest-headline">We are interested</h1>
                        <p className="generic-text interest-text">
                            Items include all types of metals like aluminium, copper, steel, brass and many more. We also deal with old furniture items which inlcude, office furnitures, tables, chairs, home furnitures and many more.
                        </p>
                        <div className="button-container">
                            <button className="custom-primary-btn interest-see-more-btn">See More</button>
                            <button className="custom-primary-btn interest-connect-btn">Let’s connect</button>

                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>

        </div>
    )
}

export default Interest
