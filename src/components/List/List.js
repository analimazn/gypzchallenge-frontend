import React from 'react'
import axios from 'axios'
import { Container, Title, Button, Alert } from './ListStyle'
import { Card } from '../Card/Card'

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  async componentDidMount() {
    try {
      const res = await this.getOrders()
      if (res !== undefined) {
        this.setState({ orders: res.data.data })
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getOrders() {
    try {
      const response = await axios.get('http://0.0.0.0:3000/order')
      if (response.status !== 200) throw Error(response.message)
      return response
    } catch (err) {
      console.error(err)
    }
  }

  async deleteOrder(order) {
    if (window.confirm('Deseja mesmo remover esta solicitação?')) {
      const res = await axios.delete('http://0.0.0.0:3000/order', 
        { params: order })
      const orders = await axios.get('http://0.0.0.0:3000/order')
      if (orders !== undefined) {
        this.setState({ orders: orders.data.data })
      } else {
        alert("Erro ao tentar deletar, por favor, tente novamente")
      }
    }
  }

  render() {
    return (
      <Container>
        {this.state.orders && this.state.orders.map(value => {
          return (
            <Container key={value._id}>
              <Card
                firstName={value.user.firstName}
                lastName={value.user.lastName}
                document={value.user.document}
                bornDate={value.user.bornDate}
                cellphoneNumber={value.contact.cellphoneNumber}
                country={value.address.country}
                df={value.address.df}
                county={value.address.county}
                postCode={value.address.postCode}
                neighborhood={value.address.neighborhood}
                street={value.address.street}
                houseNumber={value.address.houseNumber}
                moreInfo={value.address.moreInfo}
                approved={value.creditCardInfo.approved}
                creditLimit={value.creditCardInfo.creditLimit}
                amount={value.creditCardInfo.amount}
              >
              </Card>
              <Button
                onClick={() => this.deleteOrder(value)}
              >Remover</Button>
            </Container>
          )
        })}
        {!this.state.orders.length && 
        <Alert>
          <Title color='red'>Sem solicitações</Title>
        </Alert>}
      </Container>
    )
  }
}