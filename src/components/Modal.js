import React, { useEffect } from "react";
import RenderDom from "react-dom";

const modal = document.getElementById("modal");

export default function Modal({ children, setSrc }) {
  if (!children) return false;
  const el = document.createElement("div");
  modal.style.display = "block";
  const span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "&times;";
  el.appendChild(span);
  function close() {
    setSrc("");
    modal.style.display = "none";
    modal.removeChild(el);
  }
  useEffect(() => {
    modal.appendChild(el);
    span.addEventListener("click", () => {
      close();
    });
    return () => {
      span.removeEventListener("click", () => {
        close();
      });
      modal.removeChild(el);
    };
  }, [children]);
  return RenderDom.createPortal(children, el);
}
