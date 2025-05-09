    // src/components/Footer.js
    import React from 'react';
    import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
    import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
    import '../styles/Footer.css';

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-grid">
            <div className="footer-col">
                <h3>Sirohi Clothing</h3>
                <p>Elevating style through minimalist black and white fashion since 2015.</p>
                <div className="social-links">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaPinterest /></a>
                </div>
            </div>
            
            <div className="footer-col">
                <h4>Shop</h4>
                <ul>
                <li><a href="/shop/men">Men's Collection</a></li>
                <li><a href="/shop/women">Women's Collection</a></li>
                <li><a href="/shop/summer">Summer Collection</a></li>
                <li><a href="/shop/winter">Winter Collection</a></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h4>Help</h4>
                <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h4>Contact</h4>
                <ul className="contact-info">
                <li><FiMail /> contact@sirohi_clothing.com</li>
                <li><FiPhone /> +91-9568259784</li>
                <li><FiMapPin /> Uttam Nagar East, Delhi</li>
                </ul>
            </div>
            </div>
            
            <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sirohi Clothing. All rights reserved.</p>
            <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;