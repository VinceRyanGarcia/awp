import React from 'react'
import awp from "../Cover/awp.jpg"
import styled from 'styled-components'

export default function Cover() {
    return (
        <Img>
          <img src={awp} alt="awp"></img>
        </Img>
    )
}

const Img = styled.div`
        display:flex;
        flex-direction:center;
        align-items:center;
        justify-content:center;
        background-color:red;
        width:100%;
    `
