import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Player() {
    return (
        <Media>
            <center>
                <h1>AWPERATION - HQ</h1>
                <ReactPlayer    
                    url='https://www.youtube.com/watch?v=3WLcI1uSMdI&list=PLvy4Kx3QEN5QEHxhS9DEa5_D16aMyE5zO' 
                    loop="true" 
                    width="70vw"
                    height="500px"
                   />
            </center>
        </Media>
    )
}

const Media = styled.div`
background-color:black;
`