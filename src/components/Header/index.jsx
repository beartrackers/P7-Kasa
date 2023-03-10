import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/StyledLink'
import Logo from '../../assets/logo.png'
import colors from '../../utils/style/colors'
const HomeLogo = styled.img`
  height: 70px;
  @media (max-width: ${colors.breakpoint}) {
    height: 45px;
  }
`

const NavContainer = styled.nav`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLinkDiv = styled.div`
  font-size: 24px;
  font-weight: 500;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 12px;
  }
`
function Header() {
  const location = useLocation()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} alt="logo" />
      </Link>
      <NavLinkDiv>
        <StyledLink to="/" $isFullLink={location.pathname === '/'}>
          Accueil
        </StyledLink>
        <StyledLink
          to="/a-propos"
          $isFullLink={location.pathname === '/a-propos'}
        >
          A Propos
        </StyledLink>
      </NavLinkDiv>
    </NavContainer>
  )
}

export default Header
