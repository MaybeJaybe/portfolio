import { Link } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';

function App() {

  return (
    <div className="App">
      <div className="App-body">
        <Intro />
        <Link to="/resume"><button>&#8964;</button></Link>
      </div>
    </div>
  );
}

export default App;
