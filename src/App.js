import React from 'react'
import styled from 'styled-components'
import Card from './components/Card/Card.js'
import meteorito1 from './img/meteorito1.png'
import meteorito2 from './img/meteorito2.png'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.png'
import ItemCarrinho from './components/Card/ItemCarrinho/ItemCarrinho.js'


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
    OrdenarLista:"",
    produtos: [
      {
        nome: "Meteorito",
        preco: 50,
        imagem: meteorito1,
      },
      {
        nome: "Meteorito Topázio",
        preco: 550,
        imagem: meteorito3,
      },
      {
        nome: "Meteorito Safira",
        preco: 150,
        imagem: meteorito2,
      },
      {
        nome: "Meteorito Lunar",
        preco: 1050,
        imagem: meteorito4,
      },
    ],
    cartItems: [],
    valorTotal: 0
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
  
  handleChangeOrdem = (event) => {
  this.setState ({OrdenarLista:event.target.value})
  }

  addCartItem = (nome, preco) => {
    this.setState({valorTotal: this.state.valorTotal + preco})
    const newCartItems = this.state.cartItems.map(obj => {
      if (obj.nome === nome) {
        return {...obj, quantity: obj.quantity + 1};
      }
    
      return obj;
    })
    this.setState({cartItems: newCartItems})
    const nameList = this.state.cartItems.map((item) => {
      return item.nome
    })
    if(nameList.includes(nome)){
      return
    }
    const newItem = {
      nome: nome,
      quantity: 1,
      preco: preco
    }
    
		const newCartItems1 = [...this.state.cartItems, newItem] 
		this.setState({ cartItems: newCartItems1,})
    
  }

  removeCartItem = (nome, quantity, preco) => {
    this.setState({valorTotal: this.state.valorTotal - preco})
    if (quantity <= 1){
      const newCartItems = this.state.cartItems.filter((item) => {
        return item.nome != nome
      })
      this.setState({cartItems: newCartItems})
      return
    }
    const newQuantity = this.state.cartItems.map(obj => {
      if (obj.nome === nome) {
        return {...obj, quantity: quantity - 1};
      }
    
      return obj;
    })
    this.setState({cartItems: newQuantity})
    const nameList = this.state.cartItems.map((item) => {
      return item.nome
    })
    if(nameList.includes(nome)){
      return
    }
  }

  render() {

    const filtroOrdem = this.state.produtos
    const optionOrder = this.state.OrdenarLista
    filtroOrdem.sort(function(a,b){
      if(optionOrder === "Cres" ){
        return a.preco < b.preco ? -1: a.preco> b.preco ? 1: 0;
      }else{
        return b.preco < a.preco ? -1: b.preco> a.preco ? 1: 0;
      }
    });

    const listaFiltrada2 = this.state.produtos.filter((produto) => {
      return this.state.minValueInput <= produto.preco && this.state.maxValueInput >= produto.preco && produto.nome.toLowerCase().includes(this.state.nameInput)
    })

    const listaFiltrada = listaFiltrada2.map((produto) => {
        return (
          <Card
            addCartItem={this.addCartItem}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}>
          </Card>
        )
    })
    
    const cartList = this.state.cartItems.map((item) => {
      return (
        <ItemCarrinho
          name={item.nome}
          quantity={item.quantity}
          removeCartItem={this.removeCartItem}
          preco={item.preco}
        >
        </ItemCarrinho>
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
              <select onChange={this.handleChangeOrdem}>
                <option value="Cres">Valor Crescente</option>
                <option value="DCres">Valor Decrescente</option>
              </select>
            </FilterSelect>
          </TopContainer>
          <BottomContainer>
            {listaFiltrada}
          </BottomContainer>
        </CentralContainer>
        <CartContainer>
          <Title>Carrinho:</Title>
          {cartList}
          <p>Valor Total: R${this.state.valorTotal},00</p>
        </CartContainer>
      </MainContainer>
    )
  }
}

export default App
