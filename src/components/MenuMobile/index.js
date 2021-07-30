import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function MenuMobile() {
  return (
    <ul className="menu-mobile">
      <li>
        <Link to={"/fotos"}>Fotografias</Link>
      </li>
      <li>
        <Link to={"/about"}>Videos</Link>
      </li>
      <li>
        <Link to={"/Loactions"}>Ubicación</Link>
      </li>
      <li>
        <Link to={"/cart"}>Contacto</Link>
      </li>
    </ul>
  );
}
