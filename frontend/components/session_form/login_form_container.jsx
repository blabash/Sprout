import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { removeErrors } from "../../actions/error_actions";
import LogInForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);