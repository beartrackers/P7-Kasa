import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LogoDark from '../../assets/LOGOFooter.svg'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: bottom;
  padding-top: 60px;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: -8px;

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
