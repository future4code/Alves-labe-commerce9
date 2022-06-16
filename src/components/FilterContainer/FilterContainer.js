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

const Label = styled.label`
display: flex;
flex-direction: column;
width: 60%;
margin-bottom: 2vh;
`


export default class FilterContainer extends Component {
    render() {
        return (
            <MainContainer>
                <Title>Filtros</Title>
                <Label>
                    Valor Mínimo
                    <input type="number" value="100" />
                </Label>
                <Label>
                    Valor Máximo
                    <input type="number" value="10000" />
                </Label>
                <Label>
                    Busca por nome:
                    <input type="text" value="100" />
                </Label>
            </MainContainer>
        )
    }
}
