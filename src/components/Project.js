import React, { Component } from 'react'
import styled from 'styled-components'
import Ccard from './Ccard'
import principe from "../Assets/principefresco.png"
import blockmaster from "../Assets/blockmaster.png"
import mascotas from "../Assets/mascotas.png"

    const StyledProdiv = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    width: 80%;
    margin: auto;
    `

    const StyledImgdiv = styled.div`
    display: flex;
    `

    const StyledProydiv = styled.div`
    display: flex;
    align-items: center;
    `

export default class Project extends Component {
    render() {
        return (
            <StyledProdiv>
                <StyledProydiv>
                    <Ccard title="Blockmaster" info="Blockmaster es una franquicia estadounidense de videoclubes, especializada en alquiler de cine y videojuegos a través de tiendas físicas, servicios por correo y video bajo demanda."/>
                    <img src ={blockmaster} alt=""/>
                </StyledProydiv>
                <StyledImgdiv>
                    <StyledProydiv>
                    <Ccard title="Principe fresco" info="Tienda online con el mejor estilo de Bel-Air."/>
                    <img src ={principe} alt=""/>
                    </StyledProydiv>
                    <StyledProydiv>
                    <Ccard title="Adopta a tu mascota" info="Adopta a una adorable mascota."/>
                    <img src ={mascotas} alt=""/>
                    </StyledProydiv>
                </StyledImgdiv>
            </StyledProdiv>
        )
    }
}
