import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostForm from '../dashboard/edit_post_form';
import TextPostForm from '../dashboard/postForms/text_post_form';
import PhotoPostForm from '../dashboard/postForms/photo_post_form';

function Modal({ modal, closeModal }) {
    debugger;
    if (!modal) {
        return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <EditPostForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);