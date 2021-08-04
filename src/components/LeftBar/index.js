import React, { useState } from "react";
import "./index.scss";

import imageLogo from "../../assets/logo/logo-bg.png";
import MenuMobile from "../MenuMobile";

import SwitchCategoy from "../SwitchCategory";
import { Link } from "react-router-dom";
import Social from "../Social";
export default function LeftBar() {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={
        visible
          ? "container-left-bar"
          : "container-left-bar container-left-bar--move"
      }
    >
      <div className="left-bar">
        <Link to="/">
          <div className="left-bar__image">
            <img src={imageLogo} alt="logo-elezetta" />
          </div>
        </Link>
        <SwitchCategoy categories={["urbano", "retrato"]} />
        <div className="left-bar__menu-mobile">
          <MenuMobile></MenuMobile>
        </div>
        <Social />
      </div>
      <div
        className={`container-left-bar-btn ${!visible ? "button-inside" : ""} `}
        onClick={() => setVisible(!visible)}
      ></div>
    </div>
  );
}
