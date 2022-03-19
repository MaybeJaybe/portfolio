import About from'./Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Link } from 'react-router-dom';
import './Resume.css';

function Resume() {
    return(
        <div className="Resume">
            <div className="nav">
            <Link to="/" className="Link">Home</Link>
            </div>
            <div className="Resume-body"> 
                <About />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Resume