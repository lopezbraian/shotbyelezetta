import React, { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import "./index.scss";

export default function Photography(props) {
  const { category } = props.match.params;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
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
    <>
      {!loading && (
        <div className="group-photos">
          <Modal
            data={images}
            open={open}
            setOpen={setOpen}
            indexDefault={index}
          />
          <h2 className="group-photos-h2">{category}</h2>
          <div className="group-photos__container">
            {images.map((v, index) => {
              return (
                <img
                  onClick={() => {
                    setOpen(true);
                    setIndex(index);
                  }}
                  // loading="lazy"
                  width="340px"
                  height="420px"
                  className="group-photos__container__item"
                  src={v}
                  key={index}
                  alt="image1"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
