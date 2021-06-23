import './App.css';
import f from './images/f.jpg'
import Pic1 from './images/Pic1.jpg'




function App() {
  return (
    <div className="App">

      <div className="Cover">
        <center><img src={Pic1} alt="cover"/></center>
      </div>

      <div className="Container1">
        <div className="Box">
          <h1>Upcoming Shows</h1>
          <img src={f} alt="f" width='300px'/>
        </div>
      </div>

      <div className="Container2">
        <div className="Box2">
        <h1>Embrace My Passion</h1>
        <p>Taking music to the fullest potential, to invoke emotions in those who never knew they had them.</p>
        </div>

        <div className="Box2">  
        <h1>Live Life in Beat</h1>
        <p>I followed my dreams in playing across nightclubs in Los Angeles. Next, I'm headed for festivals around the world. </p>
        </div>

        <div className="Box2">
        <h1>Be Inspired by Everything</h1>
        <p>I find inspiration all around me.  I try to make my music representative of myself and my generation. I love the places that most people don't give a second glance.</p>
        </div>
      </div>

      <div className="Footer">
    
        <h1>Social</h1>
        <a href="no_target">Facebook</a>
        <a href="no_target">Instagram</a>
        <a href="no_target">Twitter</a>
        <a href="no_target">Youtube</a>
        <a href="no_target">Linkedin</a>

        <h1>Contact</h1>
        <p>awp@awperations.com</p>
        <p>Copyright ©2021 Awperations. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;

