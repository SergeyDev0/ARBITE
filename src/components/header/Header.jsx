import React from "react";
import Logo from "../../svg/logo.svg";
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img src={Logo} className="header__logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list__item">
            <a href="#catalog" className="header__nav-list__item--link">Каталог</a>
          </li>
          <li className="header__nav-list__item">
            <a href="#reviews" className="header__nav-list__item--link">Отзывы</a>
          </li>
          <li className="header__nav-list__item">
            <a href="#footer" className="header__nav-list__item--link">Как с нами связаться?</a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
