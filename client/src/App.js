import React from 'react'
import GlobalStyles from './styles/globals';
import { Header } from './components/Header/Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App