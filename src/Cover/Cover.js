import React from 'react'
import awp from "../Cover/awp.jpg"
import styled from 'styled-components'

export default function Cover() {
    return (
        <Content>
  
            <img src={awp} alt="AwpCover" width="100%"></img>
        
        </Content>
    )
}

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vw;
    background-color:black;
    `