import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children, ...props }) {
  return (
    <>
      <Header />
      {React.cloneElement(children, { ...props })}
      <Footer />
    </>
  )
}
