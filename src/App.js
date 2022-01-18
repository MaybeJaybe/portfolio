import { Link, useLocation} from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';

function App() {

  return (
    <div className="App">
      <div className="App-body">
        <Intro />
        <button id="button" onClick={`${window.location.href == "/resume"}`}><a className="button-a" href="/resume">&#8964;</a></button>
      </div>
    </div>
  );
}

export default App;
