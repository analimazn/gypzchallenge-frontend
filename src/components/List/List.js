import React from 'react'
import axios from 'axios'
import { Container, Button, Alert } from './ListStyle'
import { Card } from '../Card/Card'

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      showScreen: true
    }
  }

  async componentDidMount() {
    try {
      const connection = await this.getIndex()
      if (connection === undefined) {
        this.setState({ showScreen: false })
        throw Error(connection.message)
      } else {
        const orders = await this.getOrders()
        if (orders === undefined) {
          throw Error(orders.message)
        }
        this.setState({ orders: orders.data.data })
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getOrders() {
    try {
      const result = await axios.get('http://0.0.0.0:3000/order')
      if (result.status !== 200) {
        throw Error(result.message)
      }
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async getIndex() {
    try {
      const result = await axios.get('http://0.0.0.0:3000/')
      if (result.status !== 200) {
        throw Error(result.message)
      }
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async deleteOrder(order) {
    if (window.confirm('Deseja mesmo remover esta solicitação?')) {
      const result = await axios.delete('http://0.0.0.0:3000/order', 
        { params: order })
      
      if (result.status !== 200) {
        alert('Ocorreu um erro ao tentar remover')
        throw Error(result.message)
      }

      const orders = await axios.get('http://0.0.0.0:3000/order')
      if (orders === undefined) {
        throw Error(orders.message)
      }
      this.setState({ orders: orders.data.data })
    }
  }

  render() {
    return (
      <Container>
        {!this.state.showScreen &&
          <Alert> Ocorreu um erro, por favor tente novamente mais tarde :( </Alert>
        }
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
        {(!this.state.orders.length && this.state.showScreen) &&
          <Alert> Parece que você não possui solicitações :) </Alert>
        }
      </Container>
    )
  }
}