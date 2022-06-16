import React, { Component } from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column; 
border: 1px solid black;
width: 18%;
height: 55%;
padding: 16px;
`

const Title = styled.h3`
margin-bottom: 4vh;
`

export default class CartContainer extends Component {
    render() {
        return (
            <MainContainer>
                <Title>Carrinho:</Title>
            </MainContainer>
        )
    }
}
