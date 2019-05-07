import { connect } from 'react-redux';
import PostFeed from "./post_feed";
import { fetchPosts, deletePost, updatePost } from '../../actions/post_actions';
import { createLike, deleteLike } from "../../actions/like_actions";



const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    return({
        currentUserId: state.session.id,
        posts: posts,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        like: (user_id, post_id) => dispatch(createLike(user_id, post_id)),
        unlike: post_id => dispatch(deleteLike(post_id)),
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: (post) => dispatch(updatePost(post)),
        deletePost: post_id => dispatch(deletePost(post_id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);