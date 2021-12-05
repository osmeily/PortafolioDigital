import React, { Component } from 'react'
import styled from 'styled-components'
import Project from './Project'
import { StyledBtn } from './Ccard'

    const StyledProdiv = styled.div`
    background-color: white;
    margin: auto;
    `

    const Styledparag = styled.div`
    display: grid;
    margin:60px 110px;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    `

    const Styledbtndiv = styled.div`
    margin: 50px 0;
    text-align: center;
    `

export default class Projects extends Component {
    render() {
        return (
            <StyledProdiv>
                <Styledparag>
                <h2>Parece magia, funciona con código.</h2>
                <p>Desde que he iniciado he trabajado en proyectos que me hacen mejor desarrolladora.</p>
                </Styledparag>
                <Project/>
                <Styledbtndiv>
                <StyledBtn>Ver mas proyectos</StyledBtn>
                </Styledbtndiv>
            </StyledProdiv>
        )
    }
}
