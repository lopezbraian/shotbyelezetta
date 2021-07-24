import React, { useEffect, useState } from 'react'
import './index.css'

export default function Modal({ data = [], open, setOpen, indexDefault = 0 }) {
  if (!open) return ''
  const [src, setSrc] = useState('')
  const [index, setIndex] = useState(indexDefault)

  const updatePicture = (i) => {
    const lengthMax = data.length - 1
    if (i > lengthMax) {
      setSrc(data[0])
      setIndex(0)
    } else if (i < 0) {
      setSrc(data[lengthMax])
      setIndex(lengthMax)
    } else {
      setSrc(data[i])
      setIndex(i)
    }
  }

  function next() {
    updatePicture(index + 1)
  }

  function prev() {
    updatePicture(index - 1)
  }

  function close() {
    setOpen(false)
  }

  function pressButton(e) {
    console.log(e.keyCode)
    if (e.keyCode === 39) {
      next()
    }
    if (e.keyCode === 37) {
      prev()
    }
    if (e.keyCode === 27) {
      close()
    }
  }

  useEffect(() => {
    setSrc(data[index])
    document.body.addEventListener('keydown', pressButton)
    return () => {
      document.body.removeEventListener('keydown', pressButton)
    }
  }, [index])

  return (
    <div id="modal">
      <div className="contain-modal">
        <img src={src} alt="image"></img>
        <span className="close" onClick={close}>
          x
        </span>
        <div className="next" onClick={next}></div>
        <div className="prev" onClick={prev}></div>
      </div>
    </div>
  )
}
