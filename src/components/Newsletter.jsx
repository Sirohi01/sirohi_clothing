    // src/components/Newsletter.js
    import React, { useState } from 'react';
    import { FiMail } from 'react-icons/fi';
    import '../styles/Newsletter.css';

    const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <section className="newsletter">
        <div className="container">
            <div className="newsletter-content">
            <div className="newsletter-text">
                <FiMail className="icon" />
                <h3>Subscribe to Our Newsletter</h3>
                <p>Get the latest updates on new products and upcoming sales</p>
            </div>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit" className="btn">Subscribe</button>
            </form>
            </div>
        </div>
        </section>
    );
    };

    export default Newsletter;