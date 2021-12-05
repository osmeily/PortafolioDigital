import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap';

    export const StyledBtn = styled.button`
    background-color: rgb(211,102,247);
    outline: none;
    border: none;
    width: 150px;
    height : 50px;
    color: white;
    &:hover{
    background-color: #c11ce4;
    }
    `

    const Styledbtndiv = styled.div`
    display: flex;
    gap: 20px;
    `

    const StyledCadiv = styled.div`
    
    position: absolute;
    
    `


    export default class Ccard extends Component {
    render(props) {

        return (
            <StyledCadiv>
            <Card style={{ width: '18rem', background: "rgba(15,14,23,0.95)", color: "white" }}>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.info}
                </Card.Text>
                <Styledbtndiv>
                <StyledBtn type="button">Ver proyecto completo</StyledBtn>
                <StyledBtn type="button">Ver código</StyledBtn>
                </Styledbtndiv>

                </Card.Body>
            </Card>
            </StyledCadiv>
            
        );
    }
    }
