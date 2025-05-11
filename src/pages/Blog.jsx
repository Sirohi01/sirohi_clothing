    import React from 'react';
    import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
    const Blog = () => {
    const posts = [
        {
        id: 1,
        title: 'The Art of Monochrome Dressing',
        excerpt: 'Discover how to master the black and white color palette in your everyday wardrobe.',
        date: 'June 15, 2023',
        author: 'Sarah Johnson',
        image: 'blog-1.jpg',
        category: 'Styling'
        },
        {
        id: 2,
        title: 'Minimalist Fashion Trends for 2023',
        excerpt: 'Explore the top minimalist fashion trends dominating this year.',
        date: 'May 22, 2023',
        author: 'Michael Chen',
        image: 'blog-2.jpg',
        category: 'Trends'
        },
        {
        id: 3,
        title: 'Sustainable Black and White Fashion',
        excerpt: 'How to build an eco-friendly wardrobe with timeless monochrome pieces.',
        date: 'April 10, 2023',
        author: 'Emma Wilson',
        image: 'blog-3.jpg',
        category: 'Sustainability'
        },
        {
        id: 4,
        title: 'Accessorizing Monochrome Outfits',
        excerpt: 'The best accessories to complement your black and white looks.',
        date: 'March 5, 2023',
        author: 'David Kim',
        image: 'blog-4.jpg',
        category: 'Styling'
        },
        {
        id: 5,
        title: 'The History of Black in Fashion',
        excerpt: 'Tracing the significance of black clothing through fashion history.',
        date: 'February 18, 2023',
        author: 'Lisa Rodriguez',
        image: 'blog-5.jpg',
        category: 'History'
        },
        {
        id: 6,
        title: 'Capsule Wardrobe: Black & White Edition',
        excerpt: 'How to create a versatile capsule wardrobe using only black and white pieces.',
        date: 'January 30, 2023',
        author: 'James Peterson',
        image: 'blog-6.jpg',
        category: 'Styling'
        }
    ];

    const categories = ['All', 'Styling', 'Trends', 'Sustainability', 'History'];

    return (
        <div className="blog-page">
        <div className="container">
            <h1 className="page-title">Journal</h1>
            <p className="page-subtitle">Fashion insights, styling tips, and industry trends</p>
            
            <div className="blog-categories">
            {categories.map(category => (
                <button key={category} className="blog-category-btn">
                {category}
                </button>
            ))}
            </div>
            
            <div className="blog-grid">
            {posts.map(post => (
                <article key={post.id} className="blog-card advanced-3d-card">
                <div className="blog-card-image">
                    <img src={`/images/${post.image}`} alt={post.title} />
                    <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                    <div className="blog-meta">
                    <span><FiCalendar /> {post.date}</span>
                    <span><FiUser /> {post.author}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="read-more">
                    Read More <FiArrowRight />
                    </a>
                </div>
                </article>
            ))}
            </div>
            
            <div className="blog-newsletter">
            <h3>Subscribe to Our Fashion Journal</h3>
            <p>Get the latest articles and style guides delivered to your inbox</p>
            <form className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit" className="btn btn-3d">Subscribe</button>
            </form>
            </div>
        </div>
        </div>
    );
    };

    export default Blog;