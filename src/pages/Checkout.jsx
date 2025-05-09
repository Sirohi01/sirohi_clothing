    // src/pages/Checkout.js
    import React, { useState } from 'react';
    import { FiCreditCard, FiTruck, FiLock } from 'react-icons/fi';
    import '../styles/Checkout.css';

    const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: ''
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
        console.log('Checkout submitted', formData);
        alert('Order placed successfully!');
    };

    return (
        <div className="checkout-page">
        <div className="container">
            <h1 className="page-title">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-row">
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                    />
                </div>
                </div>
                
                <div className="form-group">
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                </div>
                
                <div className="form-group">
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    required 
                />
                </div>
                
                <div className="form-row">
                <div className="form-group">
                    <label>City</label>
                    <input 
                    type="text" 
                    name="city" 
                    value={formData.city}
                    onChange={handleChange}
                    required 
                    />
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input 
                    type="text" 
                    name="zipCode" 
                    value={formData.zipCode}
                    onChange={handleChange}
                    required 
                    />
                </div>
                </div>
                
                <div className="form-group">
                <label>Country</label>
                <select 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                </select>
                </div>
            </div>
            
            <div className="form-section">
                <h2>Payment Method</h2>
                <div className="payment-methods">
                <div 
                    className={`payment-option ${paymentMethod === 'credit-card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('credit-card')}
                >
                    <FiCreditCard />
                    <span>Credit Card</span>
                </div>
                <div 
                    className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('paypal')}
                >
                    <FiLock />
                    <span>PayPal</span>
                </div>
                </div>
                
                {paymentMethod === 'credit-card' && (
                <div className="credit-card-form">
                    <div className="form-group">
                    <label>Card Number</label>
                    <input 
                        type="text" 
                        name="cardNumber" 
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required 
                    />
                    </div>
                    
                    <div className="form-row">
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input 
                        type="text" 
                        name="cardExpiry" 
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required 
                        />
                    </div>
                    <div className="form-group">
                        <label>CVC</label>
                        <input 
                        type="text" 
                        name="cardCvc" 
                        value={formData.cardCvc}
                        onChange={handleChange}
                        placeholder="123"
                        required 
                        />
                    </div>
                    </div>
                </div>
                )}
                
                {paymentMethod === 'paypal' && (
                <div className="paypal-info">
                    <p>You will be redirected to PayPal to complete your payment.</p>
                </div>
                )}
            </div>
            
            <div className="form-section">
                <h2>Order Summary</h2>
                <div className="order-summary">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>$149.97</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span>$5.99</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>$155.96</span>
                </div>
                </div>
                
                <button type="submit" className="btn place-order-btn">
                Place Order
                </button>
                
                <div className="secure-checkout">
                <FiLock />
                <span>Secure Checkout</span>
                </div>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default Checkout;