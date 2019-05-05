import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            getStarted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    handleGetStarted(e) {
        e.preventDefault();
        this.setState({
            getStarted: true,
        })
    }

    renderErrors() {
        return (
            <ul className="signup-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}
                        className="signup-errors-list-animate"
                        >
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin(e) {
        e.preventDefault();
        let demoUser = { username: 'demoUser', password: 'userDemo' }
        this.props.login(demoUser)
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        const motto = (
            <div className="sprout-motto">
                <div className="motto-text">Come for what you love.</div>
                <div className="motto-text">Stay for what you discover.</div>
            </div>
        )

        if (this.state.getStarted) {
            return (
            <div>
                <div className="signup-main-div-animate fade-in">
                  <div className="main-div-animate">
                    <h1 className="sprout-name">sprout</h1>
                    {motto}
                    <div className="signup-form-idv">
                        <form onSubmit={this.handleSubmit} className="signup-form">
                            {this.renderErrors()}
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="square-button"
                                placeholder="Username"
                            />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="square-button"
                                placeholder="Password"
                            />
                            <input className="signup-submit-animate square-button blue" type="submit" value="Sign up" />
                        </form>
                    </div>
                  </div>
                </div>
            </div>
            );
        }
        return (
            <div>
                <div className="signup-main-div-animate fade-in">
                    <div className="main-div-animate">
                        <div className="sprout-name">sprout?</div>
                        {motto}
                        <button className="get-started square-button blue" onClick={this.handleGetStarted}>Get Started</button>
                        <Link className="login-link" to="/login">
                          <button className="square-button">Login</button>
                        </Link>
                        <button className="signup-button-animate square-button" onClick={this.demoLogin}>Demo Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpForm);