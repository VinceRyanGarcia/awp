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
                        width="96%"
                        background-color="black"
                    />  
                </center>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    background-color:black;
    width:100%;
`