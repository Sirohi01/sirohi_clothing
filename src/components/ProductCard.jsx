    // src/components/ProductCard.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FiHeart, FiShoppingBag } from 'react-icons/fi';
    import '../styles/ProductCard.css';

    const ProductCard = ({ product }) => {
    return (
        <div className="product-card card-3d">
        <div className="product-image">
            <img src={product.image} alt={product.name} />
            <div className="product-actions">
            <button className="wishlist-btn">
                <FiHeart />
            </button>
            <button className="add-to-cart-btn">
                <FiShoppingBag />
            </button>
            </div>
        </div>
        <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">${product.price.toFixed(2)}</span>
            <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
        </div>
        </div>
    );
    };

    export default ProductCard;