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
            {/* <Nav>
                <a href="no_target">home</a>
                <a href="no_target">contact</a>
                <a href="no_target">stream</a>
            </Nav> */}
        </Header>
        </>
    )
}

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:black;
    height:3vh;
    z-index:2;
`

const Nav = styled.a`
    display:flex;
    justify-content:flex-end;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    color:white;
    text-decoration:none;
    margin-right:10px;
`
