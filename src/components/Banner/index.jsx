import styled from 'styled-components'
import colors from '../../utils/style/colors'
import PropTypes from 'prop-types'

const BannerWrapper = styled.div`
  border-radius: 25px;
  width: 90%;
  height: 223px;
  position: relative;
  overflow: hidden;
  margin: auto;
  @media (max-width: ${colors.breakpoint}) {
    height: 111px;
  }
`
const BannerWrapperAlternate = styled.div`
  border-radius: 25px;
  width: 90%;
  height: 223px;
  position: relative;
  overflow: hidden;
  margin: auto;
`
const Illustration = styled.img`
  filter: brightness(70%);
  height: 100%;
  width: 100%;
  transform-origin: 50% 50%;
  object-fit: cover;
`

const BannerQuote = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 500;
  color: ${colors.background};

  @media (max-width: ${colors.breakpoint}) {
    font-size: 24px;
    left: 16px;
    width: 50%;
    transform: translateY(-50%);
  }
`
function Banner({ quote, picture }) {
  if (quote.length !== 0) {
    return (
      <BannerWrapper>
        <Illustration src={picture} />
        <BannerQuote>{quote}</BannerQuote>
      </BannerWrapper>
    )
  } else {
    return (
      <BannerWrapperAlternate>
        <Illustration src={picture} />
      </BannerWrapperAlternate>
    )
  }
}
export default Banner

Banner.propTypes = {
  quote: PropTypes.string.isRequired,
}
