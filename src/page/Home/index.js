import React from "react";
import "./index.scss";
import Category from "../../components/Category";

import imageCategoryUrban from "../../assets/album/image1.jpg";
import imageCategoryPortrait from "../../assets/album/image53.jpg";
import Tecnologies from "../../components/Tecnologies";

export default function Home(props) {
  console.log(props);
  return (
    <section className="home">
      <h1 className="title-elezetta home__title-elezetta">Elezetta</h1>
      <div className="home-container">
        <div className="home-container_left">
          <Category
            image={imageCategoryUrban}
            text="Fotografias Urbana"
            linkto="/photos/urbano"
          ></Category>
          <Category
            text="Fotografias Retrato"
            image={imageCategoryPortrait}
            linkto="/photos/retrato"
          ></Category>
        </div>
        <div className="home-container_right">
          <h2>Capturando</h2>
          <h2>Momentos</h2>
          <p>Fotografo profesional para todo tipo de eventos</p>
        </div>
      </div>
      <div className="home__main__footer">
        <div className="footer__other"></div>
        <div className="footer__news"></div>
        <div className="footer__last">
          <Tecnologies></Tecnologies>
        </div>
      </div>
    </section>
  );
}
