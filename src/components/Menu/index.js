import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import './index.css'

export default function Menu() {
  return (
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
        <a href="https://billdu.me/elezetta-producciones">CONTACTO</a>
      </li>
    </ul>
  )
}