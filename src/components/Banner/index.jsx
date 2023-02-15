import styled from 'styled-components'
import colors from '../../utils/style/colors'
import BannerImg from '../../assets/IMGBanner.svg'

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
`
function Banner() {
  return (
    <BannerWrapper>
      <Illustration src={BannerImg} />
      <BannerQuote>Chez vous, partout et ailleurs</BannerQuote>
    </BannerWrapper>
  )
}
export default Banner
