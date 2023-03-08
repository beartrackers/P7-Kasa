import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: ${colors.breakpoint}) {
    gap: 5px;
  }
`

const StarIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 15px;
  }
`

function RatingStars({ rating }) {
  const maxRating = 5
  const filledStars = rating
  const emptyStars = maxRating - rating

  const filledStarIcons = Array.from({ length: filledStars }).map(
    (_, index) => (
      <StarIcon
        key={`filled-star-${index}`}
        icon={faStar}
        color={colors.primary}
      />
    )
  )

  const emptyStarIcons = Array.from({ length: emptyStars }).map((_, index) => (
    <StarIcon key={`empty-star-${index}`} icon={faStar} color="#E3E3E3" />
  ))

  return (
    <StarWrapper>
      {filledStarIcons}
      {emptyStarIcons}
    </StarWrapper>
  )
}

export default RatingStars
