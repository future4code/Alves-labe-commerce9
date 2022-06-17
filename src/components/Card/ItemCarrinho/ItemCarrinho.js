import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const RemoveBtn = styled.button`
width: 40%;
border-radius: 15px;
background-color:#8E6385;
font-weight: bold;
:hover {
    background-color: red;
    cursor: pointer;
}
`

export default class ItemCarrinho extends Component {

    handleClick = () => {
        this.props.removeCartItem(this.props.name, this.props.quantity, this.props.preco)
    }

    render() {
        return (
            <MainContainer>
                <p>{this.props.quantity}x</p>
                <p>{this.props.name}</p>
                <RemoveBtn onClick={this.handleClick}>Remover</RemoveBtn>
            </MainContainer>
        )
    }
}
