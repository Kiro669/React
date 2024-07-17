// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Home</Link>
        <Link to="/new-video" className={location.pathname === '/new-video' ? 'selected' : ''}>Nuevo Video</Link>
      </nav>
    </header>
  );
};

export default Header;
