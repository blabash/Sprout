import React from 'react';
import {Link} from 'react-router-dom';



const Dashboard = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In</Link>
            &nbsp;
            <Link to="/signup">Get Started</Link>
        </nav>
    );
    const myDashboard = () => (
        <div className="header-group">
            <h2 className="header-name">Hey {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? myDashboard() : sessionLinks();
};


export default Dashboard;