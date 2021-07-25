import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import './index.css'

export default function Header({ typeMenuMini, ...props }) {
  return (
    <>
      <HeaderDesktop typeMenuMini={typeMenuMini} {...props} />
      <HeaderMobile />
    </>
  )
}
