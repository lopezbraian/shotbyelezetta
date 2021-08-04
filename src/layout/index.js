import React from "react";
import "./index.scss";

import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

export default function Layout({ children, ...props }) {
  return (
    <section className="layout">
      <LeftBar />
      <div className="layout-container">
        <Header {...props} />
        <section className="wrap-section">{children}</section>
      </div>
    </section>
  );
}
