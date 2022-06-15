import React from 'react'
import styled from 'styled-components'
import ImagensProdutos from "./components/ImagensProdutos/meteorito.jpg"
import Imagens from './components/Imagem/Imagens'

const ImagemME = styled.img`
height:100px;
`

class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        nome: "meteorito 1",
        preco: "50",
        imagem: ImagensProdutos
      },
      {
        nome: "meteorito 2",
        preco: "150"
      },
      {
        nome: "meteorito 3",
        preco: '550'
      },
      {
        nome: "meteorito 4",
        preco: '1050'

      },
    ]
  }
  render() {
    console.log(this.state.arrayProdutos)
    return (
      <div>
        {/* {this.state.arrayProdutos.map((produto) => {
        <section>
            <p>{produto.nome}</p>
            <ImagemME src={produto.imagem} alt={produto.nome} />
          </section>
        })
        } */}

        {this.state.arrayProdutos.map((produto) => {
          return <p>{produto.nome}</p>
        })}
        {this.state.arrayProdutos.map((produto) => {
          return <ImagemME src={produto.imagem} alt= {produto.nome} />
        })}
      </div>
    )
  }
}


export default App
