import React, { useState } from "react";
import "./index.scss";

import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function Layout({ children, ...props }) {
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
        className={
          visible
            ? "container-left-bar"
            : "container-left-bar container-left-bar--move"
        }
      >
        <LeftBar {...props} />
        <div className="container-left-bar__button-hidde" onClick={click}></div>
      </div>
      <div
        className={visible ? `layout__main` : `layout__main layout__main--move`}
      >
        <Header {...props} />
        <div className="layout__main__content">{children}</div>
      </div>
    </section>
  );
}
