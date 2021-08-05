import React, { useState } from "react";
import Modal from "../Modal";
import "./index.scss";

export default function ShowPhotos({ data }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="group-photos">
      <Modal data={data} open={open} setOpen={setOpen} indexDefault={index} />
      <div className="group-photos__container">
        {data.map((v, index) => {
          return (
            <img
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
              className="group-photos__container__item"
              src={v}
              key={index}
              alt="image1"
            />
          );
        })}
      </div>
    </div>
  );
}
