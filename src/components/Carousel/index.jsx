/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 415px;
  position: relative;
  border-radius: 25px;
  overflow: hidden;
`
const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 80px;
  cursor: pointer;
  left: 0;
`

const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 80px;
  cursor: pointer;
  right: 0;
`
const CarouselCounter = styled.div`
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

const CarouselImg = styled.img`
  height: 100%;
  width: 100%;
  transform-origin: 50% 50%;
  object-fit: cover;
`

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
    <CarouselDiv>
      {images.length > 1 && (
        <>
          <ButtonLeft onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonLeft>
          <CarouselImg
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
          />
          <ButtonRight onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonRight>
          <CarouselCounter>
            {currentIndex + 1} / {images.length}
          </CarouselCounter>
        </>
      )}

      {images.length === 1 && (
        <CarouselImg src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      )}
    </CarouselDiv>
  )
}

export default Carousel
