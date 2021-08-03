import React from 'react'
import './index.css'
import TitleSection from '../../components/TitleSection'
import TextSection from '../../components/TextSection'

export default function Video({ data }) {
  return (
    <section className="page_video-container">
      <div className="container-text">

        <TitleSection text={'Producciones Videoclips'} />
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
      </div>
      <div className="group-video__container">
        <div className="video_item">
          <iframe
            width="100%"
            loading="lazy"
            height="100%"
            src="https://www.youtube.com/embed/KNkiHqbuCGI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video_item">
          <iframe
            width="100%"
            loading="lazy"
            height="100%"
            src="https://www.youtube.com/embed/P8ldzQ1ETrE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video_item">
          <iframe
            width="100%"
            loading="lazy"
            height="100%"
            src="https://www.youtube.com/embed/NnddojF_HFo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video_item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9k_983klYbg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
