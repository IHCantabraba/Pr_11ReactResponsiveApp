import React from 'react'
import { useParams } from 'react-router-dom'
const EpisodePage = () => {
  const { episode } = useParams()
  return <div>{episode}</div>
}

export default EpisodePage
