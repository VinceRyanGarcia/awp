import './App.css';
import Navigation from './Navigation/Navigation'
import Cover from './Cover/Cover'
import Player from './Player/Player'
import Footer from './Footer/Footer'
import styled from 'styled-components'



function App() {
  return (
    <div className="App">
      
        <Navigation></Navigation>
        <Content>  
          <Cover></Cover>
          <Player></Player>
        </Content>
        <Footer></Footer>
      
    </div>
  );
}

export default App;

const Content = styled.div`
    margin-left:10vw;
    margin-right:10vw;  
  `