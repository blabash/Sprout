import { connect } from 'react-redux';
import PostFeed from "./post_feed";
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { createLike, removeLike } from "../../actions/like_actions";

const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    return({
        currentUser: state.entities.user,
        posts: posts,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        like: postId => dispatch(createLike(postId)),
        unlike: postId => dispatch(removeLike(postId)),
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: id => dispatch(deletePost(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);