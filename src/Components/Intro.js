import { Link } from 'react-router-dom';
import './Intro.css'

function Intro() {
    return (
        <div className='intro'>
            <h1>Mayberry Central</h1>
            <h2>Janelle (Jay) Mayberry</h2>
            <img src='./profile-image.jpg' className="img" alt="profile-image" />
            <h2>Front-End Web Developer</h2>
            <Link to="/resume"><button>&#8964;</button></Link>
        </div>
    )
}
export default Intro;