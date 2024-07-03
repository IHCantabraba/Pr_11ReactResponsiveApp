import React, { useState } from 'react'
import './Character.css'
function Character({ character }) {
  return (
    <>
      <div className='container'>
        <h4 key={character.name}>{character.name}</h4>
        <img src={character.image} alt={character.name}></img>
        <p>
          {character.origin.name != 'unknown'
            ? character.origin.name
            : 'Origin Not Available'}
        </p>
      </div>
    </>
  )
}

export default Character
