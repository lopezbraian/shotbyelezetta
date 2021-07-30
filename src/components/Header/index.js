import React from "react";

import "./index.scss";
import { Link } from "react-router-dom";
import useGetPath from "../../hooks/useGetPath";

export default function Header(props) {
  const active = useGetPath(props.location);

  const activeStyle = {
    color: "#DBC18D",
    borderBottom: "1px solid #DBC18D",
  };
  return (
    <div className="header">
      <h1 className="title-elezetta">Elezetta</h1>
      <ul className="header__menu">
        <li style={active === "fotos" ? activeStyle : {}}>
          <Link to={"/fotos"}>Fotografias</Link>
        </li>
        <li style={active === "videos" ? activeStyle : {}}>
          <Link to={"/videos"}>Videos</Link>
        </li>
        <li style={active === "location" ? activeStyle : {}}>
          <Link to={"/location"}>Ubicación</Link>
        </li>
        <li style={active === "about" ? activeStyle : {}}>
          <Link to={"/about"}>Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
