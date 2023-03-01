/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="carousel">
      {images.length > 1 && (
        <>
          <button
            className="carousel__button carousel__button--left"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="carousel__button carousel__button--right"
            onClick={handleNext}
          >
            &gt;
          </button>
        </>
      )}
      <img
        className="carousel__image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
      />
    </div>
  )
}

export default Carousel
