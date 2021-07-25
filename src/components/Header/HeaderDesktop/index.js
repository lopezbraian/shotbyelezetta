import React from 'react'

import Menu from '../../Menu'

import './index.scss'

export default function Header({ typeMenuMini, ...props }) {
  const { category } = props.match.params || ''
  console.log(category)
  const style = {
    height: '250px',
    background: 'black',
  }
  return (
    <header style={typeMenuMini ? style : {}} className="header-desktop">
      <div className="header-desktop__container">
        <Menu />
      </div>
      {category && (
        <h2
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            letterSpacing: '10px',
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: '4rem',
          }}
        >
          {category}
        </h2>
      )}
    </header>
  )
}
