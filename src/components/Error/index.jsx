import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/StyledLink'

const ErrorWrapper = styled.div`
  height: calc(100vh - 350px);
  gap: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorSubtitle = styled.h2`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 36px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 18px;
  }
`

const Number = styled.div`
  color: ${colors.primary};
  font-weight: 700;
  font-size: 288px;
  @media (max-width: ${colors.breakpoint}) {
    font-size: 98px;
  }
`
function Error() {
  return (
    <ErrorWrapper>
      <Number>404</Number>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <StyledLink to="/" $isFullLink>
        Retourner sur la page d'accueil
      </StyledLink>
    </ErrorWrapper>
  )
}

export default Error
