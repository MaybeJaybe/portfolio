import About from'./Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Link } from 'react-router-dom';
import './Hub.css';


function Hub() {
    return(
        <div className="Hub">
            <div className="nav">
            <Link to="/" className="Link">Home</Link>
            <Link to="/resume-pdf" className="Link">Resume</Link>
            </div>
            <div className="Hub-body"> 
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Hub