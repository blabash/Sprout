import React from 'react';
import { Link } from 'react-router-dom';

const backgroundPix = [
    "https://66.media.tumblr.com/3eb269412b028b0c5bf87fc1d9f2dd30/tumblr_pqdblbo1nb1u4gfkf_1280.jpg",
    "https://66.media.tumblr.com/d812b9c87552146009c3f05b9276ad0b/tumblr_pq3u4oPZTh1y0n9mjo1_1280.jpg",
    "https://66.media.tumblr.com/025dbaba280b5b3c1ec3f2636f055137/tumblr_pq30fgHeNo1r20fq5o1_1280.jpg",
] //move this later

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    randomIndex() {
        return Math.floor(Math.random() * backgroundPix.length)
    }

    componentDidMount() {
        const backGroundDiv = document.getElementById("backGroundDiv");
        backGroundDiv.setAttribute(
            "style", `background-image: url(${backgroundPix[this.randomIndex()]})`
        );
    }

    componentDidUpdate() {
        const backGroundDiv = document.getElementById("backGroundDiv");
        backGroundDiv.setAttribute(
            "style", `background-image: url(${backgroundPix[this.randomIndex()]})`
        );
    }

    render() {
        let mainButton = null;
        let logoButton = <Link
                            to="/"
                            className="nav-logo-link-to-home">
                            <img
                src="https://lh3.googleusercontent.com/i-FzlbTJ4s_t0Ql_iggTAXRdi4r-lFD8bO_cy7E0-wXyYnHm3jvZmZzd9jQAbzPE_HloeHouI6A=w128-h128-e365"
                                className="nav-logo-link-to-home-img">
                            </img>
                        </Link>;

        if (this.props.location.pathname === "/login") {
            mainButton = <Link to="/signup" className="nav-signup-button"><button>Sign up</button></Link>;
        } else if (this.props.location.pathname === "/signup") {
            mainButton = <Link to="/login" className="nav-login-button"><button>Log in</button></Link>;
        } else if (this.props.location.pathname ==="/posts") {
            mainButton = <button onClick={this.props.logout}>Log out</button>;
        } else if (this.props.location.pathname === "/" && this.props.getStarted) {
            mainButton = <Link to="/login" className="nav-login-button"><button>Log in</button></Link>; 
        }

        return (
            <nav className="main-nav">
                {logoButton}
                {mainButton}
            </nav>
        )
    }
}

export default Nav;