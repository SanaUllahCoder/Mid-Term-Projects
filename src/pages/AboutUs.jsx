import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg';

const AboutUs = () => {
    return (
        <div className="about-us">
            <img src={aboutImage} alt="About Us" className="about-image" />
            <h1>About Us</h1>
            <p>Welcome to HOTELIER! We have been providing the best hotel services since 1990.</p>
            <p>Our mission is to ensure our guests have the most comfortable and enjoyable stay possible. We offer a variety of rooms, top-notch amenities, and exceptional customer service.</p>
            <p>Our team is dedicated to making your stay memorable. Thank you for choosing HOTELIER!</p>
        </div>
    );
};

export default AboutUs;
