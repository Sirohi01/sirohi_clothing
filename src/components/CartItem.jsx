    // src/components/CartItem.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FiTrash2 } from 'react-icons/fi';
    import '../styles/CartItem.css';

    const CartItem = ({ item, updateQuantity, removeItem }) => {
    return (
        <div className="cart-item card-3d">
        <div className="item-image">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="item-details">
            <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
            <span className="item-size">Size: {item.size}</span>
            <span className="item-price">${item.price.toFixed(2)}</span>
        </div>
        <div className="item-quantity">
            <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            >
            -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <div className="item-total">
            ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button className="remove-item" onClick={() => removeItem(item.id)}>
            <FiTrash2 />
        </button>
        </div>
    );
    };

    export default CartItem;