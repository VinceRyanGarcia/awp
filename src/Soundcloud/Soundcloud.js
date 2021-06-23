import { commentRegex } from 'convert-source-map'
import React from 'react' 
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Soundcloud() {
    return (
        <Container>
            <h1>SOUNDCLOUD</h1>
                <center>
                    <ReactPlayer
                        url="https://soundcloud.com/iamawp/sets/the-awperating-room"
                    />  
                </center>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:black;
`