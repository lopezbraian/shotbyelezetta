import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function SwitchCategoy({ categories }) {
  const [selected, setSelected] = useState(0);
  function click(e) {
    setSelected(e);
  }

  return (
    <div className="switch-category-container">
      <ul className="switch-category-container__ul">
        {categories.map((v, index) => {
          return (
            <li
              className="switch-category-container__ul-li"
              style={
                index === selected ? { color: "white", fontSize: "1.6rem" } : {}
              }
              key={index}
              onClick={() => click(index)}
            >
              <Link to={`/photos/${v}`}>{v}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}