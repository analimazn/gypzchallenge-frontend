import React from 'react'
import { Container, Card, Button, Label, Title, Text } from './ListStyle'

export class List extends React.Component {
  render() {
    return (
      <Container>
         <Card>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Button>Remover</Button>
        </Card>
        <Card>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Button>Remover</Button>
        </Card>
      </Container>
    )
  }
}