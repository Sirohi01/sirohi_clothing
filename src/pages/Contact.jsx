    import React, { useState } from 'react';
    import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
    import '../styles/Contact.css';

    const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
        });
    };

    return (
        <div className="contact-page">
        <div className="container">
            <h1 className="page-title">Contact Us</h1>
            
            <div className="contact-container">
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Have questions about our products or need assistance with your order? Reach out to us!</p>
                
                <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                    <h3>Email</h3>
                    <p>contact@sirohi_clothing.com</p>
                </div>
                </div>
                
                <div className="info-item">
                <FiPhone className="info-icon" />
                <div>
                    <h3>Phone</h3>
                    <p>+91 9568259784</p>
                </div>
                </div>
                
                <div className="info-item">
                <FiMapPin className="info-icon" />
                <div>
                    <h3>Address</h3>
                    <p>Uttam Nagar East, Delhi</p>
                </div>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                <label>Your Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
                </div>
                
                <div className="form-group">
                <label>Your Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                </div>
                
                <div className="form-group">
                <label>Subject</label>
                <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                />
                </div>
                
                <div className="form-group">
                <label>Message</label>
                <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
                </div>
                
                <button type="submit" className="btn submit-btn">
                <FiSend className="icon" /> Send Message
                </button>
            </form>
            </div>
            
            <div className="map-container">
            <iframe 
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179042!2d-73.9878449241643!3d40.74844097138998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            </div>
        </div>
        </div>
    );
    };

    export default Contact;