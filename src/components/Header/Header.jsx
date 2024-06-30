import { NavLink } from 'react-router-dom'
import './Header.css'
import React from 'react'

// activeClassName='active'
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/episodes'>Episodes</NavLink>
            <NavLink to='/episode/:id'>Episode</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
