import './Episodes.css'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Episode from '../Episode/Episode'

const Episodes = () => {
  const [filter, setFilter] = useState('')
  const [filteredEpisode] = useDebounce(filter, 500)
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    const getEpisodesFiltered = async () => {
      let activeFilter = `https://rickandmortyapi.com/api/episode/?name=${filter}`
      const episodes = await fetch(activeFilter)
      const EpisodesJSON = await episodes.json()

      return EpisodesJSON.results
    }
    getEpisodesFiltered().then((episodes) => setEpisodes(episodes))
  }, [filteredEpisode])
  return (
    <div className='episodes-container'>
      <section className='filterSection'>
        <h4>Filtra por Nombre </h4>
        <input
          className='filter-input'
          placeholder='Meeseeks and Destroy'
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </section>

      <section className='episodes-section'>
        {episodes.map((episode) => (
          <div className='episode-row' key={episode.id}>
            <Episode epi={episode} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Episodes
