import React from 'react'
import styled from 'styled-components'
import Card from './components/Card/Card.js'
import meteorito1 from './img/meteorito1.png'
import meteorito2 from './img/meteorito2.png'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.png'


const CentralContainer = styled.div`
width: 80%;
height: 55%;
display: flex;
flex-direction: column;
padding: 16px;
`

const TopContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 5vw;
`

const BottomContainer = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
gap: 2%;
`

const FilterSelect = styled.div`
display:flex;
`

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
    produtos: [
      {
        nome: "Meteorito",
        preco: 50,
        imagem: meteorito1,
      },
      {
        nome: "Meteorito Safira",
        preco: 150,
        imagem: meteorito2,
      },
      {
        nome: "Meteorito Topázio",
        preco: 550,
        imagem: meteorito3,
      },
      {
        nome: "Meteorito Lunar",
        preco: 1050,
        imagem: meteorito4,
      },
    ]
  }

  handleChangeMinValue = (event) => {
    this.setState({ minValueInput: event.target.value })
  }

  handleChangeMaxValue = (event) => {
    this.setState({ maxValueInput: event.target.value })
  }

  handleChangeName = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  render() {

    const listaFiltrada2 = this.state.produtos.filter((produto) => {
      return this.state.minValueInput <= produto.preco && this.state.maxValueInput >= produto.preco && produto.nome.toLowerCase().includes(this.state.nameInput)
    })

    const listaFiltrada = listaFiltrada2.map((produto) => {
        return (
          <Card
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}>
          </Card>
        )
    })

    return (
      <MainContainer>
        <FilterContainer>
          <Title>Filtros</Title>
          <Label>
            Valor Mínimo
            <input type="number" onChange={this.handleChangeMinValue} value={this.state.minValueInput} />
          </Label>
          <Label>
            Valor Máximo
            <input type="number" onChange={this.handleChangeMaxValue} value={this.state.maxValueInput} />
          </Label>
          <Label>
            Busca por nome:
            <input type="text" onChange={this.handleChangeName} placeholder='Nome do produto' />
          </Label>
        </FilterContainer>
        <CentralContainer>
          <TopContainer>
            <p>Quantidade de produtos: {listaFiltrada2.length}</p>
            <FilterSelect>
              <p>Ordenação</p>
              <select></select>
            </FilterSelect>
          </TopContainer>
          <BottomContainer>
            {listaFiltrada}
          </BottomContainer>
        </CentralContainer>
        <CartContainer>
          <Title>Carrinho:</Title>
        </CartContainer>
      </MainContainer>
    )
  }
}


export default App
