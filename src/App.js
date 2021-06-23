import './App.css';
// import Navigation from './Navigation/Navigation'
import Cover from './Cover/Cover'
import Player from './Player/Player'
import Footer from './Footer/Footer'
import Soundcloud from './Soundcloud/Soundcloud';




function App() {
  return (
    <div className="App">
      
        {/* <Navigation></Navigation> */}
        <Cover></Cover>
        <Player></Player>
        <Soundcloud></Soundcloud>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
