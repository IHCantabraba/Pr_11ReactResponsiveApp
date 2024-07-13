import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <>
      <section className='home-page'>
        <h1 className='home'>Welcome to Rick & Morty's Home Page</h1>
        <img
          className='home-page-img'
          src='Rick_Morty.jfif'
          alt='landingImage'
        />
        <span>
          <h4>Visit Characters and Episodes Page</h4>
        </span>
        <div className='home-links'>
          <Link to='characters'>Characters</Link>
          <Link to='episodes'>Episodes</Link>
        </div>
      </section>
    </>
  )
}

export default Home
