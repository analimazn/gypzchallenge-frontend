import React from 'react'
import logo from '../../assets/images/cards-circle.png'

import { ColorHeader, Container, Logo } from './HeaderStyle'

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      action: ''
    }
  }

  render() {
    return (
      <ColorHeader>
        <Container>
          <h1>Gypz</h1>
        </Container>
        <Logo>
          <img alt='logo' src={ logo }></img>
        </Logo>
      </ColorHeader>
    )
  }
}