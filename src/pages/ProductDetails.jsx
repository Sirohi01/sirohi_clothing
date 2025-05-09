    // src/pages/ProductDetails.js
    import React, { useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { FiHeart, FiShoppingBag, FiArrowLeft, FiShare2 } from 'react-icons/fi';
    import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
    import '../styles/ProductDetails.css';

    const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState(0);
    
    // In a real app, you would fetch this data based on the id
    const product = {
        id: 1,
        name: 'Minimalist Black Tee',
        price: 29.99,
        description: 'Our signature minimalist black t-shirt made from 100% organic cotton. Perfect for any occasion, this timeless piece features a tailored fit and reinforced stitching for durability.',
        details: [
        '100% Organic Cotton',
        'Reinforced stitching',
        'Tailored fit',
        'Machine wash cold'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'White'],
        images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'men'
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
        alert('Please select a size');
        return;
        }
        // Add to cart logic
        console.log('Added to cart:', {
        ...product,
        size: selectedSize,
        quantity
        });
        alert('Added to cart!');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="product-details-page">
        <div className="container">
            <button onClick={goBack} className="back-link">
            <FiArrowLeft /> Back to Shop
            </button>
            
            <div className="product-details-grid">
            <div className="product-images">
                <div className="main-image">
                <img src={product.images[currentImage]} alt={product.name} />
                </div>
                <div className="thumbnail-images">
                {product.images.map((img, index) => (
                    <img 
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className={currentImage === index ? 'active' : ''}
                    onClick={() => setCurrentImage(index)}
                    />
                ))}
                </div>
            </div>
            
            <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <span className="product-price">${product.price.toFixed(2)}</span>
                
                <div className="product-meta">
                <span>Category: {product.category}</span>
                <span>Availability: In Stock</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-options">
                <div className="option-group">
                    <label>Size</label>
                    <div className="size-options">
                    {product.sizes.map(size => (
                        <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                </div>
                
                <div className="option-group">
                    <label>Quantity</label>
                    <div className="quantity-selector">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
                </div>
                
                <div className="product-actions">
                <button className="btn add-to-cart" onClick={handleAddToCart}>
                    <FiShoppingBag /> Add to Cart
                </button>
                <button className="wishlist-btn">
                    <FiHeart /> Add to Wishlist
                </button>
                </div>
                
                <div className="product-share">
                <span>Share:</span>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaPinterest /></a>
                <a href="#"><FiShare2 /></a>
                </div>
            </div>
            </div>
            
            <div className="product-tabs">
            <div className="tab">
                <input type="radio" id="tab1" name="tabs" defaultChecked />
                <label htmlFor="tab1">Details</label>
                <div className="tab-content">
                <ul>
                    {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                    ))}
                </ul>
                </div>
            </div>
            
            <div className="tab">
                <input type="radio" id="tab2" name="tabs" />
                <label htmlFor="tab2">Shipping & Returns</label>
                <div className="tab-content">
                <p>Free shipping on all orders over $50. Returns accepted within 30 days of purchase.</p>
                </div>
            </div>
            
            <div className="tab">
                <input type="radio" id="tab3" name="tabs" />
                <label htmlFor="tab3">Reviews</label>
                <div className="tab-content">
                <p>No reviews yet. Be the first to review this product!</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ProductDetails;