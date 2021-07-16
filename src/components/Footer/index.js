import React from 'react'
import './index.css'

import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import whatsapp from '../../assets/icons/whatsapp.png'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <ul>
        <li>
          <a>
            <img height="40px" width="40px" src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a>
            <img height="40px" width="40px" src={youtube} alt="" />
          </a>
        </li>
        <li>
          <a>
            <img height="40px" width="40px" src={whatsapp} alt="" />
          </a>
        </li>
      </ul>
      <small>&#169; Elezzeta Productions. All rights reserved</small>
    </footer>
  )
}
