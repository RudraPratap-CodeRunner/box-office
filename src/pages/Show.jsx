import React from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const {showId} = useParams();
   
  return (
    <div>Show pae for show {showId}</div>
  )
}

export default Show