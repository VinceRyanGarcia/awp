import React from 'react' 
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Soundcloud() {
    return (
        <Container>
           <ReactPlayer
        url="https://soundcloud.com/iamawp/sets/the-awperating-room"
      />  
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    background-color:black;
    margin-top:7vh;


`