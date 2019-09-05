/* eslint-disable no-unused-expressions */
import styled from 'styled-components'

const GlobalStyle = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #c9cffa;
  
  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
    font-family: 'Amiri', serif;
    font-size: 14px;
  }
  
  html, body, #app {
    height: 100%;
  }
`

export default GlobalStyle