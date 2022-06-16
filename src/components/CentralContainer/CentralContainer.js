import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import meteorito1 from '../../img/meteorito1.png'
import meteorito2 from '../../img/meteorito2.png'
import meteorito3 from '../../img/meteorito3.jpg'
import meteorito4 from '../../img/meteorito4.png'


const MainContainer = styled.div`
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

export default class CentralContainer extends Component {
  state = {
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


  render() {

    const listaFiltrada = this.state.produtos.map((produto) => {
      if((this.props.minValue <= produto.preco && this.props.maxValue >= produto.preco) && produto.nome.toLowerCase().includes(this.props.nameFilter)) {
        return (
          <Card
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            display={produto.display}>
          </Card>
        )
      }
    })

    return (
      <MainContainer>
        <TopContainer>
          <p>Quantidade de produtos: x</p>
          <FilterSelect>
            <p>Ordenação</p>
            <select></select>
          </FilterSelect>
        </TopContainer>
        <BottomContainer>
          {listaFiltrada}
        </BottomContainer>

      </MainContainer>
    )
  }
}
