import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';
import logo from "../Assets/LOGO.png";
import styled from 'styled-components'

    const StyledNdiv = styled.div`
    background-color: #0F0E17;
    `


export default class NavBar extends Component {

    render() {
        return (
            <StyledNdiv>
            <Nav>
                <NavLink to="/" className="nav-link">
                    <img src={logo} alt=""/>
                </NavLink>
                <NavLink to="/" className="nav-link text-light">Hola</NavLink>
                <NavLink to="/" className="nav-link text-light">Proyectos</NavLink>
                <NavLink to="/" className="nav-link text-light">Testimonios</NavLink>
                <NavLink to="/" className="nav-link text-light">Contacto</NavLink>
            </Nav>
            </StyledNdiv>
        )
    }
}
