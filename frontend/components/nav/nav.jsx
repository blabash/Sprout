import React from 'react';
import { Link } from 'react-router-dom';

const backgroundPix = [
    "https://66.media.tumblr.com/3eb269412b028b0c5bf87fc1d9f2dd30/tumblr_pqdblbo1nb1u4gfkf_1280.jpg",
]

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            styling: {},
            mainButton: null,
            miniButtons: null,
        }

        const backGroundDiv = document.getElementById("backGroundDiv");
        this.handleStyling = this.handleStyling.bind(this);
    }

    randomIndex() {
        return Math.floor(Math.random() * backgroundPix.length)
    }

    handleStyling(currentUrl) {
        switch (currentUrl) {
            case "/":
                backGroundDiv.setAttribute(
                    "style", `background-image: url(${backgroundPix[this.randomIndex()]})`
                    )
                break;
            default:
                null;
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.handleStyling(this.props.location);
    }

    render() {
        return (
            <nav style={this.state.styling}></nav>
        )
    }
}

// const Nav = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <Link to="/login">Log In</Link>
//             &nbsp;
//             <Link to="/signup">Get Started</Link>
//         </nav>
//     );
//     const myNav = () => (
//         <div className="header-group">
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </div>
//     );

//     return currentUser ? myNav() : sessionLinks();
// };


export default Nav;