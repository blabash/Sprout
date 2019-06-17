import { connect } from 'react-redux';
import PostFeed from "./post_feed";
import { fetchPosts, deletePost, updatePost } from '../../actions/post_actions';
import { createLike, deleteLike } from "../../actions/like_actions";
import { openModal, closeModal } from "../../actions/modal_actions";



const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    let likes = Object.values(state.entities.likes)
    let users = Object.values(state.entities.users)
    return({
        currentUserId: state.session.id,
        posts: posts,
        likes: likes,
        users: users,
        modal: state.ui.modal
    })
}

const mapDispatchToProps = dispatch => {
    return({
        like: (user_id, post_id) => dispatch(createLike(user_id, post_id)),
        unlike: post_id => dispatch(deleteLike(post_id)),
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: (post) => dispatch(updatePost(post)),
        deletePost: post_id => dispatch(deletePost(post_id)),
        openModal: post_id => dispatch(openModal(post_id)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);