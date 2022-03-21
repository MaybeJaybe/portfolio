import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Email.css';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className="Email">
            <div className="nav">
                <Link to="/" className="Home">Home</Link>
            </div>
            <h1>Email Me!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                <label>Name:</label>
                <input className="info-box" type="text" name="user_name" />
                </div>
                <div>
                <label>Email:</label>
                <input className="info-box" type="email" name="user_email" />
                </div>
                <div>
                <textarea placeholder="Message" name="message" className="Message"/>
                </div>
                <div classname="Button-container">
                <input className="Button" type="submit" value="Send" />
                </div>
            </form>
            <Link to="/resume" className="Back">Back</Link>
        </div>
    );
};
export default Email