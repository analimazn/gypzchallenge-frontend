import React from 'react'
import logo from '../../assets/images/cards-circle.png'

import { ColorHeader, Container, Logo } from './HeaderStyle'

export class Header extends React.Component {
  render() {
    return (
      <ColorHeader>
        <Container>
          <h1>GYPZ</h1>
        </Container>
        <Logo>
          <img alt='logo' src={ logo }></img>
        </Logo>
      </ColorHeader>
    )
  }
}