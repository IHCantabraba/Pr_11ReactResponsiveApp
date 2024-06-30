import './Episode.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Episode = ({ epi }) => {
  const season = epi.episode.split('E')[0]
  const episodio = epi.episode.split('E')[1]

  let img
  {
    season === 'S01' ? (img = './season1.jpg') : (img = './season2.jpg')
  }
  return (
    <>
      <div className='container'>
        <img className='Season-Img' src={img}></img>
        <h4>E{episodio}</h4>
        <h4 key={epi.episode}>Temporada {season}</h4>
        <h4 className='episode-link' key={epi.name}>
          <Link to={`${epi.id}`}>Episodio {epi.name}</Link>
        </h4>
      </div>
    </>
  )
}

export default Episode
