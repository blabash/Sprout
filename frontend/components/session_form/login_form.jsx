import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validUsername: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleUsername(e) {
        e.preventDefault();
        this.setState({
            validUsername: true,
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    renderErrors() {
        return (
            <div className="login-errors">
                {this.props.errors.map((error, i) => (
                    <div className="login-errors-list-animate error">
                        {error}
                    </div>
                ))}
            </div>
        );
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        if (this.state.validUsername) {
            return (
                <div>
                    <div className="login-main-div-animate">
                        <div className="main-div-animate">
                            <div className="sprout-name">sprout</div>
                            <div className="login-form-div">
                                <form onSubmit={this.handleSubmit} className="login-form">
                                    <input type="text"
                                        value={this.state.username}
                                        className="login-input-upper-animate square-button"
                                        onChange={this.update("username")}
                                        placeholder="Username"
                                    />
                                    <input type="password"
                                        value={this.state.password}
                                        className="login-input-lower-animate square-button"
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                    />
                                    {this.renderErrors()}
                                    <input className="login-submit-animate square-button blue" type="submit" value="Log in" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div>
                <div className="login-main-div-animate">
                    <div className="main-div-animate">
                        <div className="sprout-name">sprout</div>
                        <div className="login-form-div">
                            <form onSubmit={this.handleUsername} className="login-form">
                            <input type="text"
                                value={this.state.username}
                                className="username-submit square-button"
                                onChange={this.update("username")}
                                placeholder="Username"
                            />
                            {this.renderErrors()}
                            <input className="login-submit-animate square-button blue" type="submit" value="Next" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInForm;