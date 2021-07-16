import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/logo/logo.png'
import IconMenu from '../../../assets/icons/menu.png'

import { useSpring, animated } from 'react-spring'

import './index.css'

export default function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 500,
    },
    reset: true,
  })
  return (
    <div className="header-mobile">
      <div className="header-mobile__container">
        <div onClick={() => setOpenMenu(true)} className="header-mobile__icon">
          <img src={IconMenu} alt="menu-icon" />
        </div>
        <div className="header-mobile__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
      {openMenu && (
        <animated.div style={props} className="header-mobile__menu">
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
        </animated.div>
      )}
    </div>
  )
}
