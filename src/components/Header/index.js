import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo/logo.png'
import IconMenu from '../../assets/icons/menu.png'

import './index.scss'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="header">
      <div className="header-desktop">
        <ul className="header-menu">
          <li className="header-menu__item__img">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </li>
          <li className="header-menu__item">
            <Link to="/about">SOBRE MÍ</Link>
          </li>
          <li className="header-menu__item">
            <Link to="/videos">VIDEOCLIPS</Link>
          </li>
          <li className="header-menu__item">
            <a href="#footer">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="header-mobile">
        <div className="header-mobile__container">
          <div
            onClick={() => setOpenMenu(true)}
            className="header-mobile__icon"
          >
            <img src={IconMenu} alt="menu-icon" />
          </div>
          <div className="header-mobile__logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        {openMenu && (
          <div className="header-mobile__menu">
            <span
              onClick={() => setOpenMenu(false)}
              className="header-mobile__close"
            >
              X
            </span>
            <ul>
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/about">SOBRE MÍ</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link to="/videos">VIDEOCLIPS</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <a href="#footer">CONTACTO</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
