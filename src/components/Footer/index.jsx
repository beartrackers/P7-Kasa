import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LogoDark from '../../assets/LOGOFooter.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: bottom;
  padding-top: 66px;
  margin-top: 35px;
  background-color: ${colors.black};
`

const Illustration = styled.img`
  max-width: 800px;
  margin-bottom: 20px;
  background-color: ${colors.black};
`
const FooterText = styled.div`
  color: ${colors.background};
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 12px;
  }
`
function Footer() {
  return (
    <FooterContainer>
      <Illustration src={LogoDark} />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  )
}

export default Footer
