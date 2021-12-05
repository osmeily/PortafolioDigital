import React, { Component } from 'react'
import styled from 'styled-components'

    const StyledUl = styled.ul`
    list-style: none;
    `

    const Styledheader = styled.header`
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 30px;
    `

    const StyledDiv = styled.div`
    margin: 20px;
    `

export default class Service extends Component {
    render(props) {
        return (
            <StyledDiv>
                <Styledheader>{this.props.title}</Styledheader>
                <StyledUl>
                    <li>
                        {this.props.servicio1}
                    </li>
                    <li>
                        {this.props.servicio2}
                    </li>
                </StyledUl>
            </StyledDiv>
        )
    }
}
