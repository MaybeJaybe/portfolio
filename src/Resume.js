import About from'./Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './Resume.css';

function Resume() {
    return(
        <div className="Resume">
            <div className="Resume-body"> 
                <About />
                <Education />
                <Experience />
                {/* <Projects /> */}
            </div>
            <Contact />
        </div>
    )
}

export default Resume