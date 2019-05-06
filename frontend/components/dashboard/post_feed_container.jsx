import { connect } from 'react-redux';
import PostFeed from "./post_feed";
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    return({
        currentUser: state.entities.user,
        posts: posts,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: id => dispatch(deletePost(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);