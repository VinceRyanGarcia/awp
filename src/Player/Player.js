import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Player() {
    return (
        <Media>
            <h1>AWPERATION - HQ</h1>
                <center>
                    <ReactPlayer    
                        url='https://www.youtube.com/watch?v=3WLcI1uSMdI&list=PLvy4Kx3QEN5QEHxhS9DEa5_D16aMyE5zO'
                        width="96%" 
                    />
                 </center>
        </Media>
    )
}

const Media = styled.div`
background-color:black;
`