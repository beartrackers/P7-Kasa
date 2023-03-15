/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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
  @media (max-width: ${colors.breakpoint}) {
    height: 255px;
  }
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
  left: 24px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 24px;
  }
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
  right: 24px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 24px;
  }
`
const CarouselCounter = styled.div`
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${colors.breakpoint}) {
    display: none;
  }
`

const CarouselImg = styled.img`
  height: 100%;
  width: 100%;
  transform-origin: 50% 50%;
  object-fit: cover;
`

function Carousel({ images }) {
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
