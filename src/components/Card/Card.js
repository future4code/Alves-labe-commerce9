import React, { Component } from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 35%;
border: 1px solid black;
height: 100%;
`

const MainContainer2 = styled.div`
display: flex;
flex-direction: column;
width: 35%;
border: 1px solid black;
height: 100%;
`

const ImagemME = styled.img`
height: 50%;
width: 100%;
margin-right: 10px;
`

export default class Card extends Component {

    render() {

        return (
            <MainContainer>
                <ImagemME src={this.props.imagem} />
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
            </MainContainer>
        )
    }
}
