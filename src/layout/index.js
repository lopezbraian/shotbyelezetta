import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children, typeMenuMini, ...props }) {
  return (
    <>
      <Header typeMenuMini={typeMenuMini} {...props} />
      {children}
      <Footer />
    </>
  )
}
