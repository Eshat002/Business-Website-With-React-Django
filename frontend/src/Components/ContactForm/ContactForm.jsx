import './ContactForm.css'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/contact/api/create-contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json()

            if (response.ok) {
                setIsSubmitted(true)
                setFormErrors({})
                setFormData({
                    full_name: '',
                    email: '',
                    message: ''
                })

            } else {
                setFormErrors(responseData)
                setIsSubmitted(false)

            }

        } catch (error) {
            console.error('Error submitting form:', error);

        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-form-div">

            <h2 className='form-title'>Let’s talk</h2>
            {isSubmitted && <div className='success-message'><p style={{ fontWeight: 500, fontSize: "14px" }}>Form submitted successfully</p></div>}
            <form onSubmit={handleSubmit}>
                <div className="name-container">
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className='form-control'
                        style={{ border: formErrors.full_name ? "2px solid red" : "" }}
                    />
                    {formErrors.full_name && (
                        <p className="error">{formErrors.full_name}</p>
                    )}
                </div>
                <div className="email-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='form-control'
                        style={{ border: formErrors.email ? "2px solid red" : "" }}

                    />
                    {formErrors.email && (
                        <p className="error">{formErrors.email}</p>
                    )}
                </div>
                <div className="text-area-container">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className='form-control'
                        style={{ border: formErrors.message ? "2px solid red" : "" }}
                    />
                    {formErrors.message && (
                        <p className="error">{formErrors.message}</p>
                    )}
                </div>

                <div className="submit-btn-container">
                    <button className='btn btn-primary pt-2 pb-2' type="submit">Send</button>
                </div>
            </form>
        </div>


    );
};

export default ContactForm;

