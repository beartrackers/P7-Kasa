import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/StyledLink'
import Logo from '../../assets/logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/A-Propos">A Propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
