import React from "react";

import Menu from "../../Menu";

import "./index.scss";

export default function Header({ typeMenuMini, ...props }) {
  const style = {
    height: "100px",
    background: "black",
  };
  return (
    <header style={typeMenuMini ? style : {}} className="header-desktop">
      <div className="header-desktop__container">
        <Menu />
      </div>
    </header>
  );
}
