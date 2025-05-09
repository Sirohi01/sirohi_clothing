    // src/pages/Account.js
    import React, { useState } from 'react';
    import { FiUser, FiShoppingBag, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
    import '../styles/Account.css';

    const Account = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="account-page">
        <div className="container">
            <h1 className="page-title">My Account</h1>
            
            <div className="account-container">
            <div className="account-sidebar">
                <div className="account-info">
                <div className="account-avatar">
                    <FiUser />
                </div>
                <h3>Manish Sirohi</h3>
                <p>sirohimanish@hmail.com</p>
                </div>
                
                <nav className="account-menu">
                <button 
                    className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                >
                    <FiUser /> Dashboard
                </button>
                <button 
                    className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    <FiShoppingBag /> Orders
                </button>
                <button 
                    className={`menu-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    <FiHeart /> Wishlist
                </button>
                <button 
                    className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                >
                    <FiSettings /> Account Settings
                </button>
                <button className="menu-item logout">
                    <FiLogOut /> Logout
                </button>
                </nav>
            </div>
            
            <div className="account-content">
                {activeTab === 'dashboard' && (
                <div className="dashboard-tab">
                    <h2>Dashboard</h2>
                    <p>Hello Manish Sirohi (not John Doe? <a href="#">Log out</a>)</p>
                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                </div>
                )}
                
                {activeTab === 'orders' && (
                <div className="orders-tab">
                    <h2>Orders</h2>
                    <p>No order has been made yet.</p>
                    <Link to="/shop" className="btn">Browse Products</Link>
                </div>
                )}
                
                {activeTab === 'wishlist' && (
                <div className="wishlist-tab">
                    <h2>Wishlist</h2>
                    <p>No products added to wishlist yet.</p>
                    <Link to="/shop" className="btn">Browse Products</Link>
                </div>
                )}
                
                {activeTab === 'settings' && (
                <div className="settings-tab">
                    <h2>Account Settings</h2>
                    <form className="account-form">
                    <div className="form-row">
                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text" defaultValue="John" />
                        </div>
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" defaultValue="Doe" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="form-group">
                        <label>Current Password (leave blank to leave unchanged)</label>
                        <input type="password" />
                    </div>
                    
                    <div className="form-group">
                        <label>New Password (leave blank to leave unchanged)</label>
                        <input type="password" />
                    </div>
                    
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input type="password" />
                    </div>
                    
                    <button type="submit" className="btn">Save Changes</button>
                    </form>
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Account;