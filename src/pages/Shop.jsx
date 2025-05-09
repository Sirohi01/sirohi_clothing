    // src/pages/Shop.js
    import React, { useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import ProductCard from '../components/ProductCard';
    import '../styles/Shop.css';

    // Sample data with actual image URLs
    const allProducts = [
    // Men's Collection
    {
        id: 1,
        name: 'Black Slim Fit Jeans',
        price: 59.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'White Cotton Shirt',
        price: 39.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    // Women's Collection
    {
        id: 3,
        name: 'Black Midi Dress',
        price: 79.99,
        category: 'women',
        image: 'https://www.lulus.com/images/product/xlarge/4534390_876562.jpg'
    },
    {
        id: 4,
        name: 'White Wide Leg Pants',
        price: 49.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    // Summer Collection
    {
        id: 5,
        name: 'Black Linen Shirt',
        price: 45.99,
        category: 'summer',
        image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'White Sundress',
        price: 65.99,
        category: 'summer',
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    // Winter Collection
    {
        id: 7,
        name: 'Black Wool Coat',
        price: 199.99,
        category: 'winter',
        image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 8,
        name: 'White Knit Sweater',
        price: 89.99,
        category: 'winter',
        image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    ];

    const Shop = () => {
    const { category } = useParams();
    const [sortOption, setSortOption] = useState('default');
    
    // Filter products by category
    const filteredProducts = category 
        ? allProducts.filter(product => product.category === category)
        : allProducts;

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price-low') return a.price - b.price;
        if (sortOption === 'price-high') return b.price - a.price;
        if (sortOption === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <div className="shop-page">
        <div className="container">
            <div className="shop-header">
            <h1 className="page-title">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : 'All Products'}
            </h1>
            <div className="sort-options">
                <label htmlFor="sort">Sort by:</label>
                <select 
                id="sort" 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                </select>
            </div>
            </div>
            
            <div className="products-grid">
            {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default Shop;