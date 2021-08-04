import React, { useEffect, useState } from "react";
import "./index.scss";
import ShowPhotos from "../../components/ShowPhotos";
import Loading from "../../components/Loading";

export default function Photo() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let images = [];
    import("../../imagesUrban").then(({ arrayUrban }) => {
      images = arrayUrban;
      import("../../imagesPortrait").then(({ arrayPortrait }) => {
        images = [...images, ...arrayPortrait];
        images = images.sort(() => Math.random() - 0.5);
        setImages(images);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="photo-container">
      <div className="photo-container">
        <h2 className="title-page">Colección de fotos</h2>
        <>
          {!loading ? (
            <ShowPhotos data={images} />
          ) : (
            <div className="wrap-loading">
              <Loading />
            </div>
          )}
        </>
      </div>
    </div>
  );
}
