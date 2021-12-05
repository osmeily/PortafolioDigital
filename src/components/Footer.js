import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
display: flex;
gap: 100px;
text-align: right;
align-items: flex-end;
justify-content: right;
width: 100%;
background-color: #0F0E17;
height: 50px;
margin-top: -16px;
color: gray;
font-weight: lighter;
font-size: 12px;
`

export default class Footer extends Component {
    render() {
        return (
            <div>
                <StyledFooter>
                <p>Osmeily Pernia.</p>
                <p>2021</p>
                </StyledFooter>
            </div>
        )
    }
}
