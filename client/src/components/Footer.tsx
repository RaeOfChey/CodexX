import React from 'react';
import logo from '../assets/CodexX Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="CodexX Logo" style={{ width: '100px', height: 'auto' }} />
        <p className="footer-text">
          Content copyright &copy; {new Date().getFullYear()} by CodexX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
