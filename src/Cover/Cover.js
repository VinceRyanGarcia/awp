import React from 'react'
import AwpCover from "../Cover/AwpCover.jpg"
import styled from 'styled-components'

export default function Cover() {
    return (
        <Content>
  
            <img src={AwpCover} alt="AwpCover" width="100%"></img>
        
        </Content>
    )
}

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1;
    width:100%;
    `
const AwpImage = styled.img`
    width:75%;
`