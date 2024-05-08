import './ContactForm.css'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        message: ''
    });

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
            if (response.ok) {
                // Handle successful form submission (e.g., show success message)
            } else {
                // Handle form submission error (e.g., show error message)
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
            <form onSubmit={handleSubmit}>
                <div className="name-container">
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="email-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='form-control'

                    />
                </div>
                <div className="text-area-container">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className='form-control'
                    />
                </div>
                <div className="submit-btn-container">
                    <button className='btn btn-primary pt-2 pb-2' type="submit">Send</button>
                </div>
            </form>
        </div>


    );
};

export default ContactForm;

