import React from 'react'
import styled from 'styled-components'
import FilterContainer from './components/FilterContainer/FilterContainer'
import CentralContainer from './components/CentralContainer/CentralContainer'
import CartContainer from './components/CartContainer/CartContainer'


const MainContainer = styled.div`
padding: 16px;
height: 100vh;
display: flex;
gap: 1%;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <FilterContainer></FilterContainer>
        <CentralContainer></CentralContainer>
        <CartContainer></CartContainer>
      </MainContainer>
    )
  }
}


export default App
