import React, { Component } from 'react'
import styled from 'styled-components'
import foto from "../Assets/foto.jpg"

    const StyledHeader = styled.header`
    background-color: #0F0E17;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    width: 100%;
    `
    const StyledImg = styled.img`
    width: 350px;
    `

    const StyledDimg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

    const StyledH1div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    `

    const StyledP = styled.p`
    margin-left: 20px;
    `

    const Styledh1 = styled.h1`
    color: #71ecf6;
    `

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <StyledH1div>
                    <Styledh1>¡Hola! <br/>
                        Soy Osmeily Pernia
                    </Styledh1>
                    <StyledP>Frontend developer que no deja de aprender. Es sorprendente el mundo del desarrollo web.</StyledP>
                </StyledH1div>
                <StyledDimg>
                    <StyledImg className="foto" src={foto} alt=""/>
                </StyledDimg>
            </StyledHeader>
        )
    }
}
