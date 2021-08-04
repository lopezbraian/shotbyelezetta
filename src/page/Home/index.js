import React from "react";
import "./index.scss";
import Category from "../../components/Category";

import imageCategoryUrban from "../../assets/album/image1.jpg";
import imageCategoryPortrait from "../../assets/album/image53.jpg";

export default function Home(props) {
  return (
    <>
      <div className="home-container">
        <div className="home-container_left">
          <Category
            image={imageCategoryUrban}
            text="Urbanas"
            linkto="/photos/urbano"
          ></Category>
          <Category
            text="Retratos"
            image={imageCategoryPortrait}
            linkto="/photos/retrato"
          ></Category>
        </div>
        <div className="home-container_right">
          <h1 className="title-elezetta">Elezetta</h1>
          <h2>Capturando</h2>
          <h2>Momentos</h2>
          <p>Fotografo profesional para todo tipo de eventos</p>
        </div>
      </div>
    </>
  );
}
