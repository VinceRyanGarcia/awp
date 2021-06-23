import React from 'react'
import styled from 'styled-components'
import logo from "../Navigation/logo.png"

export default function Navigation() {
    return (
        <>
        <Header>
            <div>
                <img src={logo} alt='logo' width="100px"></img>
            </div>
            <Nav>
                <a href="no_target">home</a>
                <a href="no_target">contact</a>
                <a href="no_target">stream</a>
            </Nav>
        </Header>
        </>
    )
}

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:black;
    height:2.5vh;
    z-index:2;
    margin-bottom:-10vh;
`

const Nav = styled.a`
    display:flex;
    justify-content:flex-end;
    font-weight:bold;
    color:white;
    text-decoration:none;
    margin-right:10px;
`
