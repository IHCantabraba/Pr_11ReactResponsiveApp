import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './SelectedEpisode.css'
import EpisodeCharacters from '../../api/EpisodeCharacters'
const SelectedEpisode = () => {
  const episodioId = useParams()
  const [episode, setEpisode] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const episodeData = async () => {
      let imgList = []
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodioId.id}`
      )
      const data = await response.json()
      console.log(`data is: ${data.characters}`)
      setEpisode(data)
    }
    episodeData()
  }, [])

  return (
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
        <h1 className='episode-title'>
          {episode.name + ' ' + episode.episode}
        </h1>
        <div className='personajesEpisodio'>
          <EpisodeCharacters reqPath={episode.characters} />
          {/* {episode.characters.map((character) => (
            <div>{character}</div>
          ))} */}
          {/* {Object.keys(episode.characters).map((i) => (
            <div key={i}>{episode.characters[i]}</div>
          ))} */}
        </div>
      </section>
    </>
  )
}

export default SelectedEpisode
