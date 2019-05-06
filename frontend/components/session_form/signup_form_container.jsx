import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { removeErrors } from "../../actions/error_actions";
import SignUpForm from './signup_form';
import { openGetStarted, closeGetStarted } from "../../actions/ui_actions"

const mapStateToProps = ({ errors, ui }) => {
    return {
        errors: errors.session,
        getStarted: ui.getStarted,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: (demoUser) => dispatch(login(demoUser)),
        removeErrors: () => dispatch(removeErrors()),
        openGetStarted: () => dispatch(openGetStarted()),
        closeGetStarted: () => dispatch(closeGetStarted())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);