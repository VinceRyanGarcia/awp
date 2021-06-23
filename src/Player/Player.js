import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Player() {
    return (
        <Media>
            <div><h1>AWPERATION - HQ</h1></div>
                <center>
                    <ReactPlayer    
                        url='https://www.youtube.com/watch?v=3WLcI1uSMdI&list=PLvy4Kx3QEN5QEHxhS9DEa5_D16aMyE5zO'
                    
                    />
                 </center>
        </Media>
    )
}

const Media = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    background-color:red;
    width:100%;
`