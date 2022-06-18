import React from 'react'
import styled from 'styled-components'
import Card from './components/Card/Card.js'
import meteorito1 from './img/meteorito1.png'
import meteorito2 from './img/meteorito2.png'
import meteorito3 from './img/meteorito3.png'
import meteorito4 from './img/meteorito4.png'
import ItemCarrinho from './components/Card/ItemCarrinho/ItemCarrinho.js'
import logoTitulo from './img/LogoTitulo.png'
import { createGlobalStyle } from 'styled-components'

const CentralContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
padding: 16px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
flex-wrap: wrap;
width: 100%;
}

`

const TopContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 0.8rem;
flex-direction: column;
align-items: center;
}
`

const BottomContainer = styled.div`
height: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2%;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
display: flex;
flex-wrap: wrap;
height: auto;
}
`

const FilterSelect = styled.div`
display:flex;
padding-bottom: 5%;
width: 35%;
justify-content: flex-end;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
justify-content: center;
width: 100%;
align-items: center;
}
`

const MainContainer = styled.div`
height: 100%;
padding: 16px;
display: flex;
flex-direction: column;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
align-items: center;
}
`

const SubContainer = styled.div`
display: flex;
gap: 1%;
justify-content: center;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
align-items: center;
flex-direction: column;
}
`
const FilterContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: space-between;
border: 2px solid black;
width: 20vw;
height: 42vh;
padding: 16px;
box-shadow: 10px 15px 8px #5F4B8B;
background-color:#8E6385;
border-radius: 24px;
margin-top: 10vh;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 90%;
height: 20vh;
justify-content: center;
align-items: center;
margin-top: 5vh;
padding: 0;
padding-bottom: 16px;
}
`
const CartContainer = styled.div`
display: flex;
flex-direction: column; 
border: 2px solid black;
justify-content: space-between;
width: 20vw;
height: 42vh;
padding: 16px;
box-shadow: 10px 15px 8px #5F4B8B;
background-color:#8E6385;
border-radius: 24px;
margin-top: 10vh;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 90%;
height: auto;
margin-top: 0;
}
`
const CartListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const Title = styled.h3`
margin-bottom: 4vh;
font-size: 2rem;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 1.4rem;
margin-bottom: 1vh;
}
`
const TitleLoja = styled.h3`
margin-bottom: 4vh;
display:flex;
justify-content:center;
`
const LabelContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 5vh;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-bottom: 1vh;
font-size: 0.8rem;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 10%;
}
`
const Label = styled.label`
display: flex;
flex-direction: column;
width: 70%;
margin-bottom: 2vh;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-bottom: 1vh;
width: 40%;
}
`
const Selecoes = styled.select`
background-color:#8E6385;
height: 60%;
width: 50%;
margin-top: 10px;
margin-left: 10px;
border-radius: 15px;
padding: 8px;
font-size: 0.9rem;
border: 2px solid black;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 40vw;
margin-left: 2vw;
padding: 4px;
margin-top: 0;
}
`
const OpcoesSel = styled.option`
`
const Logo = styled.img`
width: 35%;
margin: auto;
margin-bottom: 20px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-bottom: 0;
width: 100%;
}
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #9F8DB8;
  }
`

class App extends React.Component {
  state = {
    minValueInput: 10,
    maxValueInput: 1050,
    nameInput: '',
    OrdenarLista: "",
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
    this.setState({ OrdenarLista: event.target.value })
  }

  addCartItem = (nome, preco) => {
    this.setState({ valorTotal: this.state.valorTotal + preco })
    const newCartItems = this.state.cartItems.map(obj => {
      if (obj.nome === nome) {
        return { ...obj, quantity: obj.quantity + 1 };
      }

      return obj;
    })
    this.setState({ cartItems: newCartItems })
    const nameList = this.state.cartItems.map((item) => {
      return item.nome
    })
    if (nameList.includes(nome)) {
      return
    }
    const newItem = {
      nome: nome,
      quantity: 1,
      preco: preco
    }

    const newCartItems1 = [...this.state.cartItems, newItem]
    this.setState({ cartItems: newCartItems1, })

  }

  removeCartItem = (nome, quantity, preco) => {
    this.setState({ valorTotal: this.state.valorTotal - preco })
    if (quantity <= 1) {
      const newCartItems = this.state.cartItems.filter((item) => {
        return item.nome != nome
      })
      this.setState({ cartItems: newCartItems })
      return
    }
    const newQuantity = this.state.cartItems.map(obj => {
      if (obj.nome === nome) {
        return { ...obj, quantity: quantity - 1 };
      }

      return obj;
    })
    this.setState({ cartItems: newQuantity })
    const nameList = this.state.cartItems.map((item) => {
      return item.nome
    })
    if (nameList.includes(nome)) {
      return
    }
  }

  storageData = () => {
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems))
    localStorage.setItem('totalValue', JSON.stringify(this.state.valorTotal))
  }

  getData = () => {
    const cartItemsString = localStorage.getItem('cartItems')
    if (!cartItemsString) {
      return
    }
    const storageCartItems = JSON.parse(cartItemsString)
    this.setState({ cartItems: storageCartItems })

    const valorTotalString = localStorage.getItem('totalValue')
    const storageValorTotal = JSON.parse(valorTotalString)
    this.setState({ valorTotal: storageValorTotal })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    this.storageData()
  }

  render() {

    const filtroOrdem = this.state.produtos
    const optionOrder = this.state.OrdenarLista
    filtroOrdem.sort(function (a, b) {
      if (optionOrder === "Cres") {
        return a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0;
      } else {
        return b.preco < a.preco ? -1 : b.preco > a.preco ? 1 : 0;
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
        <GlobalStyle />
        <Logo src={logoTitulo} />
        <SubContainer>
          <FilterContainer>
            <Title>Filtros</Title>
            <LabelContainer>
              <Label>
                Valor Mínimo:
                <input type="number" onChange={this.handleChangeMinValue} value={this.state.minValueInput} />
              </Label>
              <Label>
                Valor Máximo:
                <input type="number" onChange={this.handleChangeMaxValue} value={this.state.maxValueInput} />
              </Label>
              <Label>
                Busca por nome:
                <input type="text" onChange={this.handleChangeName} placeholder='Nome do produto' />
              </Label>
            </LabelContainer>
          </FilterContainer>
          <CentralContainer>
            <TopContainer>
              <p>Quantidade de produtos: {listaFiltrada2.length}</p>
              <FilterSelect>
                <p>Ordenar por:</p>
                <Selecoes onChange={this.handleChangeOrdem}>
                  <OpcoesSel value="Cres">Valor Crescente</OpcoesSel>
                  <OpcoesSel value="DCres">Valor Decrescente</OpcoesSel>
                </Selecoes>
              </FilterSelect>
            </TopContainer>
            <BottomContainer>
              {listaFiltrada}
            </BottomContainer>
          </CentralContainer>
          <CartContainer>
            <CartListContainer>
              <Title>Carrinho:</Title>
              {cartList}
            </CartListContainer>
            <p>Valor Total: R${this.state.valorTotal},00</p>
          </CartContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default App
