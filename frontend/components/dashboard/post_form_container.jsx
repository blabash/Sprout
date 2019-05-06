import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom'
import { removeErrors } from "../../actions/error_actions";

const mapStateToProps = state => {
    let currentUserId = state.session.id;
    return({
        currentUser: state.entities.user[currentUserId],
        errors: state.errors.posts
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createPost: post => dispatch(createPost(post)),
        removeErrors: () => dispatch(removeErrors()),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));