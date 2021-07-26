import React from "react";
import photo from "../../assets/logo/photoshop.png";
import illus from "../../assets/logo/illustrator.png";
import premier from "../../assets/logo/premier.png";
import lightroom from "../../assets/logo/lightroom.png";
import sony from "../../assets/logo/sony.png";

import "./index.scss";

export default function Tecnologies() {
  return (
    <div className="quality-container__tecnologies">
      <div className="box-tec">
        <img width="120px" height="120px" src={lightroom} alt="" />
      </div>
      <div className="box-tec">
        <img width="120px" height="120px" src={premier} alt="" />
      </div>
      <div className="box-tec">
        <img width="120px" height="120px" src={photo} alt="" />
      </div>
      <div className="box-tec">
        <img width="120px" height="120px" src={illus} alt="" />
      </div>
      <div className="box-tec">
        <img width="120px" height="120px" src={sony} alt="" />
      </div>
    </div>
  );
}
