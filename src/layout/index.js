import React, { useState } from "react";
import "./index.scss";

import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function Layout({ children, ...props }) {
  const [active, setActive] = useState(false);
  return (
    <section className="layout">
      <LeftBar active={active} setActive={setActive} />
      <div className="layout-container">
        <Header {...props} />
        <section className="wrap-section">{children}</section>

        <small style={{ textAlign: "right", padding: "0 5px" }}>
          Elezzeta Productions {new Date().getFullYear()}. &#169; All rights
          reserved
        </small>
      </div>
    </section>
  );
}
