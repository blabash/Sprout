import React from 'react';
import {Link} from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const loggedInLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In</Link>
            &nbsp;
            <Link to="/signup">Get Started</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Hey {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : loggedInLinks();
};


export default Greeting;