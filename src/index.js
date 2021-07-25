import React from 'react'
import RenderDom from 'react-dom'
import App from './App'
window.addEventListener('load', (e) => {
  let open = false
  setTimeout(() => {
    const billdu = document.getElementById('billdu-widget-main-container')
    billdu.addEventListener('click', () => {
      open = !open
    })
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 50) {
        billdu.style.opacity = '1'
      } else if (window.scrollY < 50 && !open) {
        billdu.style.opacity = '0'
      }
    })
  }, 500)
})
RenderDom.render(<App />, document.getElementById('main'))
