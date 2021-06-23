import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <>
        <Header>
            <Stay>
                STAY IN TOUCH
            </Stay>
            <Nav>
                <a href="https://www.facebook.com/192783044856045">Facebook</a>
                <a href="https://twitter.com/awpmixes">Twitter</a>
                <a href="https://www.instagram.com/awpmid">Instagram</a>
                <a href="https://www.linkedin.com/in/jefftye/">Linkedin</a>
                <a href="https://www.youtube.com/Iamawp">Youtube</a>
            </Nav>
            <Stay>
            CONTACT
            </Stay>
        </Header>
        </>
    )
}



const Header = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:black;
    height:3vh
    font-family:Arial, Helvetica, sans-serif;
`

const Stay = styled.div`
    display:flex;
    text-align:Center;
    font-family:'times';
    font-weight:bold;
    justify-content:center;
    font-size:2em;
`

const Nav = styled.a`
    display:flex;
    justify-content:center;
    font-weight:bold;
    color:white;
    text-decoration:none;
`
