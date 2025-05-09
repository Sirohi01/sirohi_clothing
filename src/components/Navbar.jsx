
    import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';
    import '../styles/Navbar.css';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
            <Link to="/" className="logo">Sirohi Clothing</Link>
            
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <div className="dropdown">
                <span>Shop <span className="arrow">▼</span></span>
                <div className="dropdown-content">
                <Link to="/shop/men">Men's Collection</Link>
                <Link to="/shop/women">Women's Collection</Link>
                <Link to="/shop/summer">Summer Collection</Link>
                <Link to="/shop/winter">Winter Collection</Link>
                </div>
            </div>
            <Link to="/contact">Contact</Link>
            <Link to="/account">Account</Link>
            </div>
            
            <div className="nav-icons">
            <FiSearch className="icon" />
            <Link to="/account"><FiUser className="icon" /></Link>
            <Link to="/cart"><FiShoppingBag className="icon" /></Link>
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;