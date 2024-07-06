import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './SelectedEpisode.css'
/* definir el fetch */

/* obtener info del episodio */
const episodeData = async (episodioId) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodioId.id}`
  )
  const data = await response.json()

  data.Personajes = []

  data.characters.map((character) => {
    fetch(character)
      .then((response) => response.json())
      .then((response) => {
        data.Personajes.push(response.image)
      })
  })
  console.log(data.Personajes)
  return data
}
const SelectedEpisode = () => {
  const episodioId = useParams()
  let [episode, setEpisode] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    episodeData(episodioId).then((response) => setEpisode(response))
  }, [])

  return (
    <>
      {episode && (
        <>
          <section className='single-episode'>
            <img
              className='back-to-episodes'
              src='../redcross.png'
              alt='closeBtn'
              onClick={() => {
                navigate('/episodes')
              }}
            />
            <div className='epi-page'>
              <div className='episode-area'>
                <div className='char-container'>
                  <img
                    className='person-img Rick'
                    src='../Morty_2.webp'
                    alt='RickImage'
                  />
                </div>
                <img className='arrow' src='../arrow.png' alt='arrowImg' />
                <div className='watch-episode'>
                  <h1 className='episode-title'>
                    {episode.name + ' ' + episode.episode}
                  </h1>
                  <h4 className='watch'>Watch Now!</h4>
                </div>
                <img
                  className='arrow arrow-Morty'
                  src='../arrow.png'
                  alt='arrowImg'
                />

                <div className='char-container'>
                  <img
                    className='person-img Morty'
                    src='../Rick_2.webp'
                    alt='MortyImage'
                  />
                </div>
              </div>
              <section className='Episode-charac-Section'>
                {console.log(episode.Personajes)}
                {episode.Personajes.forEach((personaje, index) => (
                  <img key={index} src={personaje} alt='imagenPersonaje' />
                ))}
              </section>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default SelectedEpisode
