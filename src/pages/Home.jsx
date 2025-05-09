    // src/pages/Home.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FiArrowRight } from 'react-icons/fi';
    import CategoryCard from '../components/CategoryCard';
    import ProductCard from '../components/ProductCard';
    import Newsletter from '../components/Newsletter';
    import '../styles/Home.css';

    // Sample data with actual image URLs
    const featuredProducts = [
    {
        id: 1,
        name: 'Minimalist Black Tee',
        price: 29.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'White Oversized Shirt',
        price: 49.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Black Leather Jacket',
        price: 199.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'White Silk Dress',
        price: 129.99,
        category: 'women',
        image: 'https://tse1.explicit.bing.net/th/id/OIP.hg0PCsEvyvxJ_JGpPS7B8gAAAA?cb=iwp1&rs=1&pid=ImgDetMain'
    },
    ];

    const categories = [
    {
        id: 1,
        name: 'Men',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: '/shop/men'
    },
    {
        id: 2,
        name: 'Women',
        image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: '/shop/women'
    },
    {
        id: 3,
        name: 'Summer',
        image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: '/shop/summer'
    },
    {
        id: 4,
        name: 'Winter',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: '/shop/winter'
    },
    ];

    const Home = () => {
    return (
        <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
            <div className="hero-content">
            <h1>ELEGANCE IN Sirohi Clothing</h1>
            <p>Discover our timeless black and white collection</p>
            <Link to="/shop" className="btn">Shop Now</Link>
            </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
            <div className="container">
            <h2 className="section-title">Our Collections</h2>
            <div className="categories-grid">
                {categories.map(category => (
                <CategoryCard key={category.id} category={category} />
                ))}
            </div>
            </div>
        </section>

        {/* Featured Products */}
        <section className="featured-section">
            <div className="container">
            <div className="section-header">
                <h2 className="section-title">Featured Products</h2>
                <Link to="/shop" className="view-all">
                View All <FiArrowRight />
                </Link>
            </div>
            <div className="products-grid">
                {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>
        </section>

        {/* Banner */}
        <section className="banner">
            <div className="container">
            <div className="banner-content">
                <h2>SUMMER SALE</h2>
                <p>Up to 50% off selected items</p>
                <Link to="/shop/summer" className="btn btn-outline">Shop Sale</Link>
            </div>
            </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
        </div>
    );
    };

    export default Home;