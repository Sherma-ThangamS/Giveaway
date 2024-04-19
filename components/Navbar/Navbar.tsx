import React from 'react';
import './navbar.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="navbar-content">
        <div className="logo-section">
          <a href="/">
            <img
              src="https://giveawayhopper.com/assets/images/logo_giveawayhopper.svg"
              alt="Giveawayhopper logo"
            />
          </a>
        </div>
        <nav className="nav-menu">
          <div className="menu-list">
            <div className="menu-item">
              <a href="#">Features</a>
            </div>
            <div className="menu-item">
              <a href="#">Resources</a>
            </div>
            <div className="menu-item">
              <a href="#">Pricing</a>
            </div>
          </div>
          <div className='nav-right'>
            <div className='item'>
                EN
            </div>
            <div className='item'>
                Log In
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
