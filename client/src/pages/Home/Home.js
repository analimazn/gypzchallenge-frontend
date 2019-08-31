import React from 'react'

import { Tab, Button } from './HomeStyle'
import { List } from '../../components/List/List'
import { Form } from '../../components/Form/Form'

export class Home extends React.Component {
  state = {
    cadasterCard: false
  }

  handleComponent = () => {
    this.setState({
      cadasterCard: !this.state.cadasterCard
    })
  }

  render() {
    return (
      <div>
        <Tab>
          <Button
            onClick={ this.handleComponent }
          >{ this.state.cadasterCard ? 
              'Listar solicitações' :
               'Solicitar novo Cartão'
            }</Button>
        </Tab>
        { this.state.cadasterCard ? <Form/> : <List/> }
      </div>
    )
  }
}
