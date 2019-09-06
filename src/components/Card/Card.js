import React from 'react'
import Moment from 'react-moment';
import { Container, Title, Text } from './CardStyle'

export class Card extends React.Component {
  render() {  
    return (
        <Container>
          {!this.props.approved &&
            <Title color='#ea5561'>Não aprovado</Title>}
          {this.props.approved &&
          <Title color='#6fa4f5'>Aprovado</Title>}
          <Text>Nome completo: {this.props.firstName} {this.props.lastName}</Text>
          <Text>CPF: {this.props.document}</Text>
          <Text>Data de nascimento:
            <Moment format="DD/MM/YYYY">
              {this.props.bornDate}
            </Moment> 
          </Text>
          <Text>Celular: {this.props.cellphoneNumber}</Text>
          <Text>País: {this.props.country} </Text>
          <Text>UF: {this.props.df}</Text>
          <Text>Cidade: {this.props.county}</Text>
          <Text>CEP: {this.props.postCode}</Text>
          <Text>Bairro: {this.props.neighborhood}</Text>
          <Text>Rua: {this.props.street}</Text>
          <Text>Número da residência: {this.props.houseNumber}</Text>
          <Text>Complemento: {this.props.moreInfo}</Text>
          <Text>Limite de crédito: R$ {this.props.creditLimit}</Text> 
          <Text>Renda: R$ {this.props.amount}</Text>
        </Container>
    )
  }
}