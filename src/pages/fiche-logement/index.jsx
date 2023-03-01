import React from 'react'
import Carousel from '../../components/Carousel'

const images = [
  'https://via.placeholder.com/500x300.png?text=Image+1',
  'https://via.placeholder.com/500x300.png?text=Image+2',
  'https://via.placeholder.com/500x300.png?text=Image+3',
]

function FicheLogement() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  )
}

export default FicheLogement
