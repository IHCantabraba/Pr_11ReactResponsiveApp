import Character from '../Character/Character'
import PageNav from '../PageNav/PageNave'
import './Characters.css'
import React, { useState, useEffect } from 'react'

const Characters = () => {
  /* se usa hook useState y se inicaliza "characters como un array vacio" */
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  /* use Effect para que,
       al montar el componente en el DOM,
          se haga la petición a la API */
  useEffect(() => {
    /* función para hacer el fetch */
    const getCharacters = async () => {
      const serieCharacters = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      /* parsear la respuesta para tener un objeto */
      const serieCharactersJSON = await serieCharacters.json()
      /* usar la función del hook useState para insertar esos personajes obtenidos en el fetch */
      setCharacters(serieCharactersJSON.results)
    }
    /* ejecutar la función getCharacetrs */
    getCharacters()
  }, [page])
  return (
    /* contenedor para mostar personahes */
    <div className='characters-container'>
      {/* Paginación para ver todos los personajes. */}
      <PageNav page={page} setPage={setPage} />
      <div className='row'>
        {characters.map((character) => (
          <div className='columns' key={character.id}>
            <Character character={character} />
          </div>
        ))}
      </div>
      <PageNav page={page} setPage={setPage} />
    </div>
  )
}

export default Characters
