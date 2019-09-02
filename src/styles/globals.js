/* eslint-disable no-unused-expressions */
import styled from 'styled-components'

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
    font-family: 'Amiri', serif;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle