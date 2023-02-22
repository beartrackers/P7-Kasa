import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorIllustration from '../../assets/404.svg'
import { StyledLink } from '../../utils/style/StyledLink'

const ErrorWrapper = styled.div`
  height: calc(100vh - 350px);
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorSubtitle = styled.h2`
  color: ${colors.primary};
  font-weight: 300;
`

const Illustration = styled.img`
  max-width: 800px;
`
// const ErrorReturn = styled.a`
//   color: ${colors.primary};
//   font-weight: 300;
// `
function Error() {
  return (
    <ErrorWrapper>
      <Illustration src={ErrorIllustration} />
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
