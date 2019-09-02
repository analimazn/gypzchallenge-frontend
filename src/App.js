import React from 'react'
import GlobalStyles from './styles/globals';
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles>
            <Header/>
            <Home/>
        </GlobalStyles>
      </div>
    );
  }
}

export default App