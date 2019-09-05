import React from 'react'
import { Container, Card, Button, Title, Text } from './ListStyle'

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
        </Card>
          <Button>Remover</Button>
        <Card>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
        </Card>
          <Button>Remover</Button>
        <Card>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
          <Title>OLÁ:</Title>
          <Text>OLÁ</Text>
        </Card>
          <Button>Remover</Button>
      </Container>
    )
  }
}