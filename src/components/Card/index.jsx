import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/carré.svg'
import { Link } from 'react-router-dom'

const CardTitle = styled.div`
  color: ${colors.background};
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 25%;
  position: absolute;
  bottom: 6%;
  left: 6%;
`

const CardImage = styled.img`
  height: 340px;
  width: 340px;
  border-radius: 10px;
  position: absolute;
`
const CardGradient = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 10px;
`

const CardWrapper = styled.div`
  margin: 60px;
  background-color: ${colors.background};
  position: relative;
  border-radius: 10px;
  width: 340px;
  height: 340px;
  &:hover {
    cursor: pointer;
  }
`

function Card({ id, title, picture }) {
  return (
    <Link to={`/fiche-logement/${id}`}>
      <CardWrapper>
        <CardImage src={picture} alt="logement" />
        <CardGradient />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Titre de la location',
  picture: DefaultPicture,
}

export default Card
