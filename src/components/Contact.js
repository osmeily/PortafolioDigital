import React, { Component } from 'react'
import styled from 'styled-components'
import Contactcard from './Contactcard'

const StyleddCondiv = styled.div`
display: flex;
background: rgb(165,101,234);
background: radial-gradient(circle, rgba(165,101,234,1) 0%, rgba(113,236,246,1) 100%);
text-align: center;
justify-content: center;
align-items: center;
padding-bottom: 80px;
padding-top:80px;
`

export default class Contact extends Component {
    render() {
        return (
            <StyleddCondiv>
                <Contactcard/>
            </StyleddCondiv>
        )
    }
}
