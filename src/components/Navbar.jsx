import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <h1 className="brand-name">HOTELIER</h1>
            </div>
            <ul className='nav-list' >
                <li className="nav-item">Home</li>
                <li className="nav-item"><Link className='about' to="/about">About</Link></li>
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
