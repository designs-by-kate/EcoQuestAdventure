import React from 'react'
import Logo from '../assets/logo.png'
import './style.css'

function Header() {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={Logo} alt="Logo image" />
      </div>
      <div className="headerTitle">
        <h1>Eco Quest Adventure</h1>
      </div>
    </div>
  )
}

export default Header