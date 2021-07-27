import React from "react";

import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>Elezetta</h1>
      <ul className="header__menu">
        <li>
          <a href="#home">layout</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Loactions">Locations</a>
        </li>
        <li>
          <a href="#cart">Cart</a>
        </li>
      </ul>
    </div>
  );
}
