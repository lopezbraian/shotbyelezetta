import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Category({ image, linkto, text }) {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        textAlign: "center",
      }}
      className="category-container"
    >
      <Link to={linkto}>{text}</Link>
    </div>
  );
}
