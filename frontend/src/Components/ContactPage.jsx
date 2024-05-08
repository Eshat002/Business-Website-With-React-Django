import React from 'react'
import HeadlineCompo from './HeadlineCompo/HeadlineCompo'
import './ContactPage.css'
import ContactForm from './ContactForm/ContactForm'

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
                            <div className="headline-container mb-5 text-center">
                                <h2 className='headline'>Get In Touch</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 contact-form-container">
                                    <ContactForm />
                                </div>
                                <div className="col-lg-6 address-container">address</div>
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
