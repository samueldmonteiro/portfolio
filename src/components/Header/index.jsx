import React, { useEffect } from 'react';
import MenuOpenIcon from "../../assets/icons/ham-menu.svg";
import MenuCloseIcon from "../../assets/icons/ham-menu-close.svg";

const Header = () => {
  useEffect(() => {
    const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
    const smallMenu = document.querySelector('.header__sm-menu');
    const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
    const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
    const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');
    const headerLogoContainer = document.querySelector('.header__logo-container');

    const toggleMenu = () => {
      smallMenu.classList.toggle('header__sm-menu--active');
      headerHamMenuBtn.classList.toggle('d-none');
      headerHamMenuCloseBtn.classList.toggle('d-none');
    };

    const closeMenu = () => {
      smallMenu.classList.remove('header__sm-menu--active');
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    };

    const redirectToHome = () => {
      window.location.href = '/';
    };

    hamMenuBtn?.addEventListener('click', toggleMenu);
    headerSmallMenuLinks.forEach(link => link.addEventListener('click', closeMenu));
    headerLogoContainer?.addEventListener('click', redirectToHome);

    return () => {
      hamMenuBtn?.removeEventListener('click', toggleMenu);
      headerSmallMenuLinks.forEach(link => link.removeEventListener('click', closeMenu));
      headerLogoContainer?.removeEventListener('click', redirectToHome);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <span className="header__logo-sub">Samuel Davi</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper"><a href="./" className="header__link">Home</a></li>
            <li className="header__link-wrapper"><a href="./#about" className="header__link">Sobre</a></li>
            <li className="header__link-wrapper"><a href="./#projects" className="header__link">Projetos</a></li>
            <li className="header__link-wrapper"><a href="./#footer" className="header__link">Contato</a></li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img src={MenuOpenIcon} alt="hamburger menu" className="header__main-ham-menu" />
            <img src={MenuCloseIcon} alt="hamburger menu close" className="header__main-ham-menu-close d-none" />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link"><a href="./">Home</a></li>
            <li className="header__sm-menu-link"><a href="./#about">Sobre</a></li>
            <li className="header__sm-menu-link"><a href="./#projects">Projetos</a></li>
            <li className="header__sm-menu-link"><a href="./#footer">Contato</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
