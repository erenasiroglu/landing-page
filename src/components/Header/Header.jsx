import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import MenuIcon from '../../assets/icons/menu-scale.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 968) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerInner}`}>
        <div className={`${styles.title}`}>
          Collers
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className={`${styles.menuLink}`}>Products</a>
          <a href="#" className={`${styles.menuLink}`}>Solutions</a>
          <a href="#" className={`${styles.menuLink}`}>Pricing</a>
          <a href="#" className={`${styles.menuLink}`}>Resources</a>
          <a href="#" className={`${styles.menuLink}`}>Log In</a>
          <button className={`${styles.button} `}>Sign up Now</button>
        </div>
      </div>
      {menuOpen && (
        <div className={`${styles.mobileMenu}`}>
          <a href="#" className={`${styles.menuLink}`}>Products</a>
          <a href="#" className={`${styles.menuLink}`}>Solutions</a>
          <a href="#" className={`${styles.menuLink}`}>Pricing</a>
          <a href="#" className={`${styles.menuLink}`}>Resources</a>
          <a href="#" className={`${styles.menuLink}`}>Log In</a>
          <button className={`${styles.menuScale}`}>
            <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
