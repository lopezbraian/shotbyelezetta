import React, { useState } from "react";
import Modal from "../../components/Modal";
import TextSection from "../../components/TextSection";
import TitleSection from "../../components/TitleSection";

import "./index.css";

export default function Home({ data }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="group-photos">
      <TitleSection text={"Capturando Momentos"} />
      <TextSection
        text={`
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        esse dolorum illum magnam, velit unde animi. Libero expedita natus
        voluptatem velit. Quae magnam ut dolorum. Sint unde nobis ullam ab.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        minus consectetur rem a dolorem vero deleniti repudiandae eaque corrupti
        perferendis mollitia sit, ducimus animi optio culpa, similique assumenda
        suscipit quos?
      `}
      />
      <div className="group-photos__container">
        <Modal data={data} open={open} setOpen={setOpen} indexDefault={index} />
        {data.map((v, index) => {
          return (
            <img
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
              loading="lazy"
              className="group-photos__container__item"
              src={v}
              key={index}
              alt="image1"
            />
          );
        })}
      </div>
    </section>
  );
}
