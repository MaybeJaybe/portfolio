import { Link } from 'react-router-dom';
import './Intro.css'

function Intro() {
    return (
        <div className='intro'>
            <h1>Mayberry Central</h1>
            <h2>Janelle <small>(Jay)</small> Mayberry</h2>
            <img src='./profile-image.jpg' className="img" alt="profile-image" />
            <h2>Front-End Web Developer</h2>
            <Link to="/central-hub"><button className="intro-button">&#8964;</button></Link>
        </div>
    )
}
export default Intro