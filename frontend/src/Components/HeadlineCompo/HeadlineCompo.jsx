import React from 'react'
import './HeadlineCompo.css'

const HeadlineCompo = ({ title, subTitle }) => {
    return (
        <div className='headline-compo'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                        <h5 className='headline-compo-sub-title'>{subTitle}</h5>
                        <h2 className='headline-compo-title'> {title}</h2></div>
                    <div className="col-lg-2"></div>
                </div>
            </div>


        </div>
    )
}

export default HeadlineCompo
