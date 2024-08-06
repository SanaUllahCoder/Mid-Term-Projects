import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '../pages/AboutUs'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar">
            <div>
                <p className="brand-name">HOTELIER</p>
            </div>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Rooms</li>
                <li 
                    className="nav-item dropdown" 
                    onMouseEnter={() => setShowDropdown(true)} 
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    Pages <span className="dropdown-arrow">▼</span>
                    {showDropdown && <DropdownMenu />}
                </li>
                <li className="nav-item">Contact</li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
