import React from 'react'
import HeadlineCompo from './HeadlineCompo/HeadlineCompo'
import ServiceCompo from './ServiceCompo/ServiceCompo'
import './ServicePage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ServicePage = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/customer-services/');
                setServices(response.data);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []);

    return (
        <div className='service-page'>
            <HeadlineCompo subTitle="we buy & sell" title="All Services" />
            <div className="container-fluid service-compo-container mt-5">
                <div className="row">
                    {services.map(service => (
                        <div key={service.name} className="col-lg-4 col-md-6">
                            <ServiceCompo img={service.img} name={service.name} type={service.type} description={service.description} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default ServicePage
