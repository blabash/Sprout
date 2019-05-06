import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav.jsx';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.user[state.session.id],
        getStarted: state.ui.getStarted,
    });
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect( mapStateToProps, mapDispatchToProps)(Nav);