import React from 'react'

import video from '../../assets/video/video.mp4'
import photo from '../../assets/logo/photoshop.png'
import illus from '../../assets/logo/illustrator.png'
import premier from '../../assets/logo/premier.png'
import lightroom from '../../assets/logo/lightroom.png'
import sony from '../../assets/logo/sony.png'

import './index.scss'

export default function About() {
  return (
    <section className="about-container">
      <div className="container-text">
        <h2 className="title-section">
          Usando las mejores tecnologías del mercado
        </h2>
        <p className="text-section">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          esse dolorum illum magnam, velit unde animi. Libero expedita natus
        </p>
      </div>
      <div className="quality-container">
        <div className="quality-container__video">
          <video src={video} loop width="100%" autoPlay muted></video>
        </div>
        <div className="quality-container__tecnologias">
          <div className="box-tec">
            <img width="100px" height="100px" src={photo} alt="" />
            <p>Adobe Photoshop</p>
          </div>
          <div className="box-tec">
            <img width="100px" height="100px" src={illus} alt="" />
            <p>Adobe Illustrator</p>
          </div>
          <div className="box-tec">
            <img width="100px" height="100px" src={lightroom} alt="" />
            <p>Adobe Lightroom</p>
          </div>
          <div className="box-tec">
            <img width="100px" height="100px" src={premier} alt="" />
            <p>Adobe Premiere</p>
          </div>
          <div className="box-tec">
            <img width="100px" height="100px" src={sony} alt="" />
            <p>Sony A7 III</p>
          </div>
        </div>
      </div>
    </section>
  )
}
