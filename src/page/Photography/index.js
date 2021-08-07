import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading";
import ShowPhotos from "../../components/ShowPhotos";
import headerImage from "../../assets/images/header.jpg";

import "./index.scss";

export default function Photography(props) {
  const { category } = props.match.params;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "urbano") {
      import("../../imagesUrban").then(({ arrayUrban }) => {
        setImages(arrayUrban);
        setLoading(false);
      });
    } else {
      import("../../imagesPortrait").then(({ arrayPortrait }) => {
        setImages(arrayPortrait);
        setLoading(false);
      });
    }
  }, [category]);

  const styleHeader = {
    background: `url(${headerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  };

  return (
    <div className="photography-container">
      {!loading ? (
        <div className="photo-category-container">
          <div style={styleHeader} className="photo-category-header">
            <h2 style={{ zIndex: "2" }} className="title-page">
              Categoria {category}
            </h2>
          </div>
          <ShowPhotos data={images} />
        </div>
      ) : (
        <div className="wrap-loading">
          <Loading />
        </div>
      )}
    </div>
  );
}
