import React, { Component } from 'react'
import styled from 'styled-components'
import face from '../Assets/facebook.png'
import git from '../Assets/signo-de-github.png'
import insta from '../Assets/instagram.png'


const StyledFooter = styled.footer`
display: flex;
gap: 100px;
align-items: center;
justify-content: center;
width: 100%;
background-color: #0F0E17;
height: 50px;
margin-top: -16px;
color: white;
font-size: 12px;
`
    const Styledimg = styled.img` 
    width: 30px;
    margin: auto;
    gap: 10px;
    `

export default class Footer extends Component {
    render() {
        return (
            <div>
                <StyledFooter>
                <p> Con ♥ Osmeily Pernia. 2021</p>
                <div>
                    <a href="https://www.facebook.com/OsmePernia/"><Styledimg src={face} alt=''/></a>
                    <a href='https://github.com/osmeily'><Styledimg src={git} alt=''/></a>
                    <a href="https://www.instagram.com/nymphoenixx/"><Styledimg src={insta} alt=''/></a>
                    
                </div>
                </StyledFooter>
            </div>
        )
    }
}
