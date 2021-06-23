import './App.css';
import awp from './images/awp.jpg'




function App() {
  return (
    <div className="App">

      <div className="Cover">
        <img src={awp} alt="cover"></img>
      </div>

      <div className="Container1">

        <div className="Box">
        <h1>Box 1</h1>
        </div>

        <div className="Box">
        <h1>Box 2</h1>
        </div>

      </div>

      <div className="Container2">
        <h1>Container 2</h1>
      </div>
      
      <div className="Container2">
        <h1>Container 3</h1>
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

