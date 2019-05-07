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
        like: (user_id, post_id) => dispatch(createLike(user_id, post_id)),
        unlike: like_id => dispatch(removeLike(like_id)),
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: post_id => dispatch(deletePost(post_id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);