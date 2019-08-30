/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    background: #181818;
    @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
    font-family: 'Amiri', serif;
    color: #FFF
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle