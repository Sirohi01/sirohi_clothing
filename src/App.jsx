
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import Shop from './pages/Shop';
    import ProductDetails from './pages/ProductDetails';
    import Cart from './pages/Cart';
    import Checkout from './pages/Checkout';
    import Account from './pages/Account';
    import Contact from './pages/Contact';
    import NotFound from './pages/NotFound';
    import './styles/global.css';

    const App = () => {
    return (
        <Router>
        <div className="app">
            <Navbar />
            <main className="main-content">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </main>
            <Footer />
        </div>
        </Router>
    );
    };

    export default App;