import React, { useState } from 'react'
import './Character.css'
function Character({ character }) {
  // const [rotate, setRotation] = useState(false)

  return (
    <>
      <div className='container'>
        <h4 key={character.name}>{character.name}</h4>
        <img
          src={character.image}
          alt={character.name}
          // className={rotate ? 'rotate-180 rounded-pill' : 'rounded-pill'}
          // onClick={() => setRotation(!rotate)}
        ></img>

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
