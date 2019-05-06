import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    let currentUserId = state.session.id;
    return({
        currentUser: state.entities.user[currentUserId]
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createPost: post => dispatch(createPost(post)),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));