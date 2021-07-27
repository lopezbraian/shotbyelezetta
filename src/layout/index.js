import React, { useState } from "react";
import "./index.scss";

import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function Home({ children }) {
  const [visible, setVisible] = useState(true);
  const [moveLayout, setMoveLayout] = useState(false);
  function click() {
    setVisible(!visible);
    setTimeout(() => {
      setMoveLayout(!moveLayout);
    }, 1500);
  }
  return (
    <section className="layout">
      <div
        className="container-left-bar"
        style={!visible ? { transform: "translate(-150px)" } : {}}
      >
        <LeftBar />
        <div
          className="container-left-bar__button-hidde"
          style={!visible ? { transform: "rotate(0deg)" } : {}}
          onClick={click}
        ></div>
      </div>
      <div
        className="layout__main"
        style={
          !visible
            ? {
                transform: "translate(-150px)",
                width: "100vw",
              }
            : {}
        }
      >
        <Header />
        <div className="layout__main__content">{children}</div>
      </div>
    </section>
  );
}
