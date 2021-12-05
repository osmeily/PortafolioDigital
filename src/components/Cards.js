import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap';

  const cards = [
    {
      
    }
  ]

  const StyledBtn = styled.button`
  background-color: rgb(211,102,247);
  outline: none;
  border: none;
  width: 150px;
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


export default class Cards extends Component {
    render() {
        return (
            <StyledCadiv>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
