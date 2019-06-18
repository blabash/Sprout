import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom'
import { removeErrors } from "../../actions/error_actions";

const mapStateToProps = state => {
    return({
        currentUser: state.session.id,
        currentUsername: state.entities.users[state.session.id].username,
        errors: state.errors.posts,
        currentUserProfilePic: state.entities.users[state.session.id].profile_pic,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createPost: post => dispatch(createPost(post)),
        removeErrors: () => dispatch(removeErrors()),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));