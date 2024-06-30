import { Outlet } from 'react-router-dom'
import './Main.css'
import React from 'react'

const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default Main
