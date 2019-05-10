import EditPostForm from './edit_post_form';
import { connect } from 'react-redux';
import { closeModal } from "../../../actions/modal_actions";
import { fetchPost } from "../../../actions/post_actions";

const mapStateToProps = (state) => {
    return({
        isOpen: state.ui.modal.isOpen,
        post: state.entities.posts[state.ui.modal.postId],
        postId: state.ui.modal.postId
    })
}

const mapDispatchToProps = (dispatch) =>{
    return({
        closeModal: () => dispatch(closeModal()),
        fetchPost: (id) => dispatch(fetchPost(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);