import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './SelectedEpisode.css'
/* definir el fetch */
const charInfo = async (char, data) => {
  const res = await fetch(char)
  const resData = await res.json()
  data.Personajes.push(resData.image)
}
/* obtener info del episodio */
const episodeData = async (episodioId) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodioId.id}`
  )
  const data = await response.json()
  /* crear una key nueva al objeto episodio 
      para añadir las rútas a las imágenes de cada personaje que existe en
      data.characters */
  // data.Personajes = []
  // /* para cada ruta en data.characters
  //     obtener la ruta a la imagen del personaje */
  // data.characters.map((char) => {
  //   /* ejecutar el fetch */
  //   charInfo(char, data)
  // })
  /* actualizar el episodio  */
  // setEpisode(data)

  return data
}
const SelectedEpisode = () => {
  const episodioId = useParams()
  let [episode, setEpisode] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    episodeData(episodioId).then((response) => {
      setEpisode(response)
    })
  }, [])

  return (
    <>
      {console.log(episode)}
      <section className='single-episode'>
        <img
          className='back-to-episodes'
          src='../redcross.png'
          alt='closeBtn'
          onClick={() => {
            navigate('/episodes')
          }}
        />
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

        {/* <div>{episode.Personajes}</div> */}
      </section>
    </>
  )
}

export default SelectedEpisode
