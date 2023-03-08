import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: ${({ space }) => space}px;
  font-size: ${({ size }) => size}px;
`

const RatingStars = ({ rating, size = 30, space = 15 }) => {
  const maxRating = 5
  const filledStars = rating
  const emptyStars = maxRating - rating

  const filledStarIcons = Array.from({ length: filledStars }).map(
    (_, index) => (
      <StarIcon
        key={`filled-star-${index}`}
        icon={faStar}
        color={colors.primary}
        size={size}
        space={space}
      />
    )
  )

  const emptyStarIcons = Array.from({ length: emptyStars }).map((_, index) => (
    <StarIcon
      key={`empty-star-${index}`}
      icon={faStar}
      color="#E3E3E3"
      size={size}
      space={space}
    />
  ))

  return (
    <StarWrapper>
      {filledStarIcons}
      {emptyStarIcons}
    </StarWrapper>
  )
}

export default RatingStars
