import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import Cookies from 'js-cookie';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const overlayRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
    document.documentElement.classList.toggle('is-lock');
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.documentElement.classList.remove('is-lock');
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  };

  useEffect(() => {
    const burgerBtn = burgerButtonRef.current;
    const overlay = overlayRef.current;

    if (burgerBtn && overlay) {
      if (isMenuActive) {
        burgerBtn.classList.add('is-active');
        overlay.classList.add('is-active');
      } else {
        burgerBtn.classList.remove('is-active');
        overlay.classList.remove('is-active');
      }
    }

    return () => {
      document.documentElement.classList.remove('is-lock');
    };
  }, [isMenuActive]);

  return (
    <header className="header">
      <div className="header__body">
        <div className="header__body-inner container">
          <NavLink to="/" aria-label="Home" className="header__logo logo" title="Home">
            <img src={logo} alt="Logo" width="179" height="50" className="logo__image" />
          </NavLink>
          <div className="header__overlay" ref={overlayRef}>
            <h2 className="visually-hidden">Navigering</h2>
            <nav className="header__menu" role="navigation" aria-label="Main Menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <NavLink
                    to="/"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? 'header__menu-link is-active' : 'header__menu-link'
                    }>
                    Hem
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink
                    to="/meny"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? 'header__menu-link is-active' : 'header__menu-link'
                    }>
                    Meny
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink
                    to="/kontakt"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? 'header__menu-link is-active' : 'header__menu-link'
                    }>
                    Kontakt
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink
                    to="/bokabord"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? 'header__menu-link is-active' : 'header__menu-link'
                    }>
                    Boka Bord
                  </NavLink>
                </li>
                {Cookies.get('token') && (
                  <>
                    <li className="header__menu-item">
                      <NavLink
                        to="/admin"
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                          isActive ? 'header__menu-link is-active' : 'header__menu-link'
                        }>
                        Admin Panel
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        Cookies.remove('token');
                        window.location.href = '/admin';
                        handleLinkClick();
                      }}
                      className="header__menu-item">
                      <NavLink className="header__menu-link">Logga ut</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
          <button
            aria-label="Open menu"
            title="Open menu"
            className="header__burger-button burger-button visible-mobile"
            onClick={toggleMenu}
            ref={burgerButtonRef}>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
