import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledBtn } from './Ccard'

const StyledContact = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    gap: 50px;
    background-color:#0F0E17 ;
    width: 40%;
    padding: 50px;
    color: white;
`

const Styledinput = styled.input`
    width: 100%;
    margin: 10px;
`

const Styledtexta = styled.textarea`
margin: 10px;
width: 100%;
`

export default class Contactcard extends Component {
    render() {
        return (
            <StyledContact>
                <h3>Contacto</h3>
                <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
                <form action="https://formspree.io/f/meqnjbyd" method="POST" >
                    <div>
                        <Styledinput name='name' placeholder="Nombre completo"/>
                    </div>
                    <div>
                        <Styledinput type="email" name="_replyto" placeholder="Correo electrónico"/>
                    </div>
                    <div>
                        <Styledtexta name="message" cols='35' rows="8" placeholder="Deje su mensaje."></Styledtexta>
                    </div>
                    <div>
                        <StyledBtn type="submit">Enviar</StyledBtn>
                    </div>
                </form>
            </StyledContact>
        )
    }
}
