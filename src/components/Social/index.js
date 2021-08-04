import React from "react";
import "./index.scss";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import whatsapp from "../../assets/icons/whatsapp.png";

export default function Social() {
  return (
    <div className="left-bar__social">
      <ul>
        <li>
          <a href="#instagra">
            <img height="40px" width="40px" src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#instagra">
            <img height="40px" width="40px" src={youtube} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=34690653624&text=Hola%20quisiera%20saber%20m%C3%A1s"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40px" width="40px" src={whatsapp} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
