import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading";
import ShowPhotos from "../../components/ShowPhotos";

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

  return (
    <div className="photography-container">
      {!loading ? (
        <div className="photo-category-container">
          <h2 className="title-page">Categoria {category}</h2>
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
