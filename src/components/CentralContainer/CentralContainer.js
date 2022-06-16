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
`

const BottomContainer = styled.div`
height: 100%;
display: flex;
`

export default class CentralContainer extends Component {
    state = {
        produtos: [
          {
            nome: "meteorito 1",
            preco: "50",
            imagem: meteorito1
          },
          {
            nome: "meteorito 2",
            preco: "150",
            imagem: meteorito2
          },
          {
            nome: "meteorito 3",
            preco: '550',
            imagem: meteorito3
          },
          {
            nome: "meteorito 4",
            preco: '1050',
            imagem: meteorito4
          },
        ]
      }

  render() {

    const listaDeProdutos = this.state.produtos.map((produto) => {
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
        <TopContainer>
            <p>Quantidade de produtos: x</p>
            <p>Ordenação</p>
        </TopContainer>
        <BottomContainer>
            {listaDeProdutos}
        </BottomContainer>
        
    </MainContainer>
    )
  }
}
