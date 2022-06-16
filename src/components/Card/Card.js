import React, { Component } from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 18vw;
border: 1px solid black;
height: 100%;
margin-bottom: 1vh;
`

const MainContainer2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 35%;
border-top: 1px solid black;
`

const ImagemME = styled.img`
height: 70%;
width: 100%;
`

const Infos = styled.p`
    margin: 0 1vw;

`
const ButtonAdd = styled.button`
width: 50%;
align-self: center;
margin: 3vh;
`

const ImageContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`

export default class Card extends Component {

    handleClick = () => {
        this.props.addCartItem(this.props.nome, this.props.preco)
    }

    render() {

        return (
            <MainContainer>
                <ImageContainer>
                    <ImagemME src={this.props.imagem} />
                </ImageContainer>
                <MainContainer2>
                    <Infos>{this.props.nome}</Infos>
                    <Infos>R${this.props.preco},00</Infos>
                    <ButtonAdd onClick={this.handleClick}>Adicionar ao carrinho</ButtonAdd>
                </MainContainer2>
            </MainContainer>
        )
    }
}
