import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { removeErrors } from "../../actions/error_actions";
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: (demoUser) => dispatch(login(demoUser)),
        removeErrors: () => dispatch(removeErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);