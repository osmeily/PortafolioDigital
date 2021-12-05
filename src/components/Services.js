import React, { Component } from 'react'
import styled from 'styled-components'
import Service from './Service'

    const StyledSerdiv = styled.div`
    background: rgb(165,101,234);
background: radial-gradient(circle, rgba(165,101,234,1) 0%, rgba(113,236,246,1) 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    `

    const Styledflexdiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    `

    const StyledHeader = styled.header`
    font-size: 30px;
    font-weight: bold;
    margin: 30px 30px;
    `

export default class Services extends Component {
    render() {
        return (
            <StyledSerdiv>
                <StyledHeader>Servicios</StyledHeader>
                <Styledflexdiv>
                <Service title="Diseño" servicio1="Experiencia de usuario" servicio2="Interfaz visual"/>
                <Service title="Desarrollo" servicio1="Sitios web" servicio2="Aplicaciones web"/>
                </Styledflexdiv>
            </StyledSerdiv>
        )
    }
}
