import React, { Component } from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 18vw;
border: 2px solid black;
margin-bottom: 1vh;
box-shadow: 2px 2px 15px #5F4B8B;
border-radius: 24px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 43vw;
height: 50vh;
}
`

const MainContainer2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
border-top: 2px solid black;
padding-top: 2vh;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 1rem;
}

`

const ImagemME = styled.img`
height: 80%;
width: 80%;
margin: auto;
`

const Infos = styled.b`
margin: 0 1vw;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
padding-left: 3%;
align-self: center;
}

`
const ButtonAdd = styled.button`
width: 50%;
align-self: center;
margin: 3vh;
border-radius: 15px;
background-color: #9F8DB8;
border: 3px solid black;
font-weight: 600;
padding: 14px;
:hover {
    box-shadow: inset 1px 1px 10px white, 1px 1px 10px white;
    color: white;
    border: 3px solid white;
    cursor: pointer;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
text-align: center;
font-size: 0.7rem;
}

`

const ImageContainer = styled.div`
height: 190px;
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
