import React from 'react'
import TextSection from '../../components/TextSection'
import TitleSection from '../../components/TitleSection'

import './index.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <TitleSection text={'Capturando Momentos'} />
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
      <div className="home-container">
        <Link to="/photos/portrait" className="home-category portrait">
          <p>Fotografia retrato</p>
        </Link>
        <Link to="/photos/urban" className="home-category urban">
          <p>Fotografia urbana</p>
        </Link>
      </div>
    </section>
  )
}
