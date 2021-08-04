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
        <li style={active === "photos" ? activeStyle : {}}>
          <Link to={"/photos"}>FOTOGRAFIAS</Link>
        </li>
        <li style={active === "videos" ? activeStyle : {}}>
          <Link to={"/videos"}>VIDEOCLIPS</Link>
        </li>
        <li style={active === "location" ? activeStyle : {}}>
          <Link to={"/location"}>UBICACIÓN</Link>
        </li>
        <li style={active === "about" ? activeStyle : {}}>
          <Link to={"/about"}>SOBRE MÍ</Link>
        </li>
      </ul>
    </div>
  );
}
