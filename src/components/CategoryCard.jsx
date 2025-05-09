    // src/components/CategoryCard.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import '../styles/CategoryCard.css';

    const CategoryCard = ({ category }) => {
    return (
        <Link to={category.link} className="category-card">
        <div className="category-image">
            <img src={category.image} alt={category.name} />
        </div>
        <div className="category-overlay">
            <h3>{category.name}</h3>
            <span>Shop Now</span>
        </div>
        </Link>
    );
    };

    export default CategoryCard;