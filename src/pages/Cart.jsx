    // src/pages/Cart.js
    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import CartItem from '../components/CartItem';
    import '../styles/Cart.css';

    // Sample data with actual image URLs
    const cartItems = [
    {
        id: 1,
        name: 'Black Slim Fit Jeans',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        quantity: 1,
        size: 'M'
    },
    {
        id: 2,
        name: 'White Cotton Shirt',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        quantity: 2,
        size: 'L'
    },
    ];

    const Cart = () => {
    const [items, setItems] = useState(cartItems);

    const updateQuantity = (id, newQuantity) => {
        setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const total = subtotal + shipping;

    return (
        <div className="cart-page">
        <div className="container">
            <h1 className="page-title">Your Shopping Cart</h1>
            
            {items.length === 0 ? (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <Link to="/shop" className="btn">Continue Shopping</Link>
            </div>
            ) : (
            <div className="cart-container">
                <div className="cart-items">
                {items.map(item => (
                    <CartItem 
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    />
                ))}
                </div>
                
                <div className="cart-summary card-3d">
                <h3>Order Summary</h3>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="btn checkout-btn">Proceed to Checkout</Link>
                <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
                </div>
            </div>
            )}
        </div>
        </div>
    );
    };

    export default Cart;