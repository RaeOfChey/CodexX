import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import LogoImage from '../assets/CodexX Logo.png';
import '../index.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/profile/:userId">
            <img src={LogoImage} alt="CodexX Logo" className="logo-image" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/wishlist">See Wishlist</Link>
          <Logout />
        </div>
      </div>
    </header>
  );
};

export default Header;
