import React from "react";
import "./index.scss";
import imageLogo from "../assets/logo/logo-bg.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import whatsapp from "../assets/icons/whatsapp.png";
import SwitchCategoy from "../components/SwitchCategory";

export default function Home({ children }) {
  return (
    <section className="layout">
      <div className="layout__left">
        <div className="left__image">
          <img src={imageLogo} alt="logo-elezetta" />
        </div>
        <SwitchCategoy categories={["urbano", "retrato", "eventos"]} />
        <div className="left__social">
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
      </div>
      <div className="layout__main">
        <div className="layout__main__top">
          <h1>Elezetta</h1>
          <ul className="layout__main__menu">
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
        <div className="layout__main__content">{children}</div>
      </div>
    </section>
  );
}
