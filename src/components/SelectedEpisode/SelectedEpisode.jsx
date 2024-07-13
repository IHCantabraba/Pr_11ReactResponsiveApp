import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { episodeData } from '../../services/getEpisodeByID'
import './SelectedEpisode.css'

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
