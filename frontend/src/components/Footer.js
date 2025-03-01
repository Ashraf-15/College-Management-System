import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} College Management System. All rights reserved.</p>
                <p>Developed by Ajay Duddi</p>
            </div>
        </footer>
    );
};

export default Footer;