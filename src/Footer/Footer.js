import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <>
        <Header>
            <Nav>
                <a href="https://www.facebook.com/192783044856045">facebook</a>
                <a href="https://twitter.com/awpmixes">twitter</a>
                <a href="https://www.instagram.com/awpmid">instagram</a>
                <a href="https://www.linkedin.com/in/jefftye/">linkedin</a>
                <a href="https://www.youtube.com/Iamawp">youtube</a>
            </Nav>
        </Header>
        </>
    )
}

const Header = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:darkred;
    height:3vh
`

const Nav = styled.a`
    display:flex;
    justify-content:center;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    color:white;
    text-decoration:none;
`
