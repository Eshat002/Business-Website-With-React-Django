import React from 'react'
import HeadlineCompo from './HeadlineCompo/HeadlineCompo'
import ServiceCompo from './ServiceCompo/ServiceCompo'

const ServicePage = () => {
    return (
        <div className='service-page'>
            <HeadlineCompo subTitle="we buy & sell" title="All Services" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <ServiceCompo />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServicePage
