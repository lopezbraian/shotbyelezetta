import React, { useEffect, useState } from 'react'

import Modal from '../../components/Modal'
import './index.css'
export default function Photography(props) {
  const { category } = props.match.params
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (category === 'urban') {
      import('../../imagesUrban').then(({ arrayUrban }) => {
        setImages(arrayUrban)
      })
    } else {
      import('../../imagesPortrait').then(({ arrayPortrait }) => {
        setImages(arrayPortrait)
      })
    }
  }, [category])
  return (
    <>
      <h2 style={{ textTransform: 'capitalize', textAlign: 'center' }}>
        {category}
      </h2>
      <Modal data={images} open={open} setOpen={setOpen} indexDefault={index} />
      <div className="group-photos__container">
        {images.map((v, index) => {
          return (
            <img
              onClick={() => {
                setOpen(true)
                setIndex(index)
              }}
              loading="lazy"
              className="group-photos__container__item"
              src={v}
              key={index}
              alt="image1"
            />
          )
        })}
      </div>
    </>
  )
}
