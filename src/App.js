import './App.css';
import f from './images/f.jpg'
import Pic1 from './images/Pic1.jpg'
import logo from './images/logo.png'
import banner from './images/banner.jpg'


function App() {
  return (
    <div className="App">

      <div className="Cover">
        <center><img id="bagel" src={banner} alt="cover"/></center>
      </div>
      {/* <div className="Container1">
        <div className="Box1">
          <h1>test</h1>
         <a href="no_target">test</a>
         <a href="no_target">test</a>
         <a href="no_target">test</a>

         </div> 
      </div> */}
      

      <div className="ContainerA">
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
      </div>

      <div className="ContainerB">
        <div className="Container2">
          <div className="Box1">
            <h1>Upcoming Shows</h1>
            <a href="http://smarturl.it/WolfgangAwpTix"><img src={f} className="wg" alt="f" width='280px'/></a>
            <p>click image to purchase ticket</p>
          </div>
        </div>
        
        <div className="Container2">
          <div className="Box1">
            <h1>Awp - HQ</h1>
            <div className="YoutubeContainer">
              <iframe className="Youtube" src="https://www.youtube.com/embed/3WLcI1uSMdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>


      
      <div className="Footer">
        <div className="logo">
          <div className="logoimg">
            <img src={logo} alt="logo"/>
        </div>
      </div>

        <h1>Social</h1>
        <a href="https://www.facebook.com/192783044856045">Facebook</a>
        <a href="https://www.instagram.com/awpmid">Instagram</a>
        <a href="https://twitter.com/awpmixes">Twitter</a>
        <a href="https://www.youtube.com/Iamawp">Youtube</a>
        <a href="https://www.linkedin.com/in/jefftye/">Linkedin</a>

        <h1>Contact</h1>
        <p>awp@awperations.com</p>
        <p>Copyright ??2021 Awperations. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;

