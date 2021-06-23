import './App.css';
import Navigation from './Navigation/Navigation'
import Cover from './Cover/Cover'
import Player from './Player/Player'
import Footer from './Footer/Footer'
import styled from 'styled-components'



function App() {
  return (
    <div className="App">
      
        {/* <Navigation></Navigation> */}
          <Cover></Cover>
          <Player></Player>
        <Footer></Footer>
      
    </div>
  );
}

export default App;

