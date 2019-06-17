import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = false, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.postId;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
}