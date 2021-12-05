import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';

    const Styleddiv = styled.div`
    background: white;
    `

export default class App extends Component {
    render() {
        return (
            <div className="container">
            <Styleddiv>
                <NavBar/>
                <Header/>
                <Projects/>
                <Services/>
            </Styleddiv>
            </div>
        )
    }
}
