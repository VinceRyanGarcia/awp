import './App.css';
import awp from './images/awp.jpg'
import ReactPlayer from 'react-player'




function App() {
  return (
    <div className="App">

      <div className="Cover">
        <img src={awp} alt="cover"></img>
      </div>

      <div className="Container1">

        <div className="Box">
        <h1>Embrace My Passion</h1>
        <p>Taking music to the fullest potential, to invoke emotions in those who never knew they had them.</p>
        </div>

        <div className="Box">
        <h1>Live Life in Beat</h1>
        <p>I followed my dreams in playing across nightclubs in Los Angeles. Next, I'm headed for festivals around the world. </p>
        </div>
        
        <div className="Box">
        <h1>Be Inspired by Everything</h1>
        <p>I find inspiration all around me.  I try to make my music representative of myself and my generation. I love the places that most people don't give a second glance.</p>
        </div>
      </div>

      <div className="Container2">
      </div>
      
    

      <div className="Footer">
        <h1>Social</h1>
        <a href="no_target">facebook</a>
        <a href="no_target">instagram</a>
        <a href="no_target">twitter</a>
        <a href="no_target">youtube</a>
        <a href="no_target">linkedin</a>

        <h1>Contact</h1>
        <p>awp@awperations.com</p>
      </div>
    </div>
  );
}

export default App;

