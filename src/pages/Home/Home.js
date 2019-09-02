import React from 'react'

import { Tab, Button } from './HomeStyle'
import { List } from '../../components/List/List'
import { CadasterCard } from '../../components/Form/Form'

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
               'Solicitar Cartão de Crédito'
            }</Button>
        </Tab>
        { this.state.cadasterCard ? <CadasterCard/> : <List/> }
      </div>
    )
  }
}
