import React from 'react'
import HeadlineCompo from './HeadlineCompo/HeadlineCompo'
import './ContactPage.css'
import ContactForm from './ContactForm/ContactForm'
import Location from './SVG/Location'
import Phone from './SVG/Phone'
import Email from './SVG/Email'

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className="headline-compo-container">
                <HeadlineCompo subTitle="You have something" title="Contact Us " />
            </div>
            <div className="contact-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="headline-container mb-5 pb-4 text-center">
                                <h2 className='headline'>Get In Touch</h2>
                            </div>
                            <div className="row gx-5">
                                <div className="col-lg-6 contact-form-container">
                                    <ContactForm />
                                </div>
                                <div className="col-lg-6">
                                    <div className="address-container d-flex mb-2">
                                        <div className="icon-container me-3">
                                            <Location />
                                        </div>
                                        <div className='text-container'><p>1 Hacker Wy, Menlo Park, CA 94025, United States</p></div>
                                    </div>
                                    <div className="phone-container d-flex mb-2">
                                        <div className="icon-container me-3">
                                            <Phone />
                                        </div>
                                        <div className='text-container'><p>555-123-4567</p></div>
                                    </div>

                                    <div className="email-container d-flex">
                                        <div className="icon-container me-3">
                                            <Email />
                                        </div>
                                        <div className='text-container'><p>johndoe@gmail.com</p></div>
                                    </div>
                                    <div className="map-container mt-4">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9683615731274!2d-122.1508573240922!3d37.48507297205973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64979e438bf4e3a5!2sMeta%20Headquarters!5e0!3m2!1sen!2sbd!4v1715261961393!5m2!1sen!2sbd" style={{ width: "100%", height: "205px", border: 0, borderRadius: "5px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage
