import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-border">
                <h2>Contact Me</h2>
                <Link to="/email">Email</Link>
                <a href="https://www.linkedin.com/in/maybe-jay/">Linkedin</a>
                <a href="https://github.com/MaybeJaybe">Github</a>
            </div>
        </div>
    )
}

export default Contact