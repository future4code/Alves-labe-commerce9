import React from 'react'
import styled from 'styled-components'
import CentralContainer from './components/CentralContainer/CentralContainer'


const MainContainer = styled.div`
padding: 16px;
height: 100vh;
display: flex;
gap: 1%;
`
const FilterContainer = styled.div`
display: flex;
flex-direction: column; 
border: 1px solid black;
width: 18%;
height: 55%;
padding: 16px;
`
const CartContainer = styled.div`
display: flex;
flex-direction: column; 
border: 1px solid black;
width: 25%;
height: 55%;
padding: 16px;
`

const Title = styled.h3`
margin-bottom: 4vh;
`
const Label = styled.label`
display: flex;
flex-direction: column;
width: 70%;
margin-bottom: 2vh;
`

class App extends React.Component {
  state = {
    minValueInput: 10,
    maxValueInput: 1050,
    nameInput: '',
  }

  handleChangeMinValue = (event) => {
    this.setState({ minValueInput: event.target.value })
  }

  handleChangeMaxValue = (event) => {
    this.setState({ maxValueInput: event.target.value })
    console.log(event.target.value)
  }

  handleChangeName = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  render() {
    return (
      <MainContainer>
        <FilterContainer>
          <Title>Filtros</Title>
          <Label>
            Valor Mínimo
            <input type="number" onChange={this.handleChangeMinValue} value={this.state.minValueInput}/>
          </Label>
          <Label>
            Valor Máximo
            <input type="number" onChange={this.handleChangeMaxValue} value={this.state.maxValueInput} />
          </Label>
          <Label>
            Busca por nome:
            <input type="text" onChange={this.handleChangeName} placeholder='Nome do produto'/>
          </Label>
        </FilterContainer>
        <CentralContainer
          minValue={this.state.minValueInput}
          maxValue={this.state.maxValueInput}
          nameFilter={this.state.nameInput}
        ></CentralContainer>
        <CartContainer>
          <Title>Carrinho:</Title>
        </CartContainer>
      </MainContainer>
    )
  }
}


export default App
