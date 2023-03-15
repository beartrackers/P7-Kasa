import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, Helvetica, sans-serif;
    }

    body {
        margin: 0;
        overflow-x: hidden;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
