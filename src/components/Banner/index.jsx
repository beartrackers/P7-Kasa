import styled from 'styled-components'
import colors from '../../utils/style/colors'

const BannerWrapper = styled.div`
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
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 500;
  color: ${colors.background};

  @media (max-width: ${colors.breakpoint}) {
    text-align: start;
    font-size: 24px;
  }
`
function Banner({ quote, picture }) {
  return (
    <BannerWrapper>
      <Illustration src={picture} />
      <BannerQuote>{quote}</BannerQuote>
    </BannerWrapper>
  )
}
export default Banner
