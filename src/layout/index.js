import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../assets/logo/logo.png";
import IconMenu from "../assets/icons/menu.png";

export default function Layout({ children, ...props }) {
  return (
    <>
      <header className="header">
        <div className="header-desktop">
          <ul className="header-menu">
            <li className="header-menu__item__img">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </li>
            <li className="header-menu__item">
              <Link to="/sobre-mi">SOBRE MÍ</Link>
            </li>
            <li className="header-menu__item">
              <Link to="/videos">VIDEOCLIPS</Link>
            </li>
            <li className="header-menu__item">
              <Link to="/contact">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div className="header-mobile">
          <div className="header-mobile__container">
            <div className="header-mobile__menu">
              <img src={IconMenu} alt="menu-icon" />
            </div>
            <div className="header-mobile__logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
