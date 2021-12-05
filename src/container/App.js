import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';
import image from "../Assets/img.png"
import Contact from '../components/Contact';
import Footer from '../components/Footer';

    const Styleddiv = styled.div`
    background: white;
    `

    const Styledpicture = styled.img`
    width: 100%;
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
                <Styledpicture src={image} alt=""/>
                <Contact/>
                <Footer/>
            </Styleddiv>
            </div>
        )
    }
}
