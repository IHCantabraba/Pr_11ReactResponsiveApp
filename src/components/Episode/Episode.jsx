import './Episode.css'
import React from 'react'

const Episode = ({ epi }) => {
  const season = epi.episode.split('E')[0]
  const episodio = epi.episode.split('E')[1]
  console.log(season, episodio)
  let img
  {
    season === 'S0' ? (img = './season1.jpg') : (img = './season2.jpg')
  }
  return (
    <>
      <div className='container'>
        <img className='Season-Img' src={img}></img>
        <h4>E{episodio}</h4>
        <h4 key={epi.episode}>Temporada {season}</h4>
        <h4 key={epi.name}>{epi.name}</h4>
      </div>
    </>
  )
}

export default Episode
