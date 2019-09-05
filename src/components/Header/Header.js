import React from 'react'
import logo from '../../assets/images/cards-circle.png'

import { Container, ColorHeader, Logo } from './HeaderStyle'

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <ColorHeader>
          <h1>GYPZ</h1>
        </ColorHeader>
        <Logo>
          <img alt='logo' src={ logo }></img>
        </Logo>
      </Container>
    )
  }
}