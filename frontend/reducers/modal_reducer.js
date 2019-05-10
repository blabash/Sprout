import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _defaultState = {
    isOpen: false,
    postId: null
}

export default function modalReducer(state = _defaultState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { isOpen: true, postId: action.postId };
        case CLOSE_MODAL:
            return _defaultState;
        default:
            return state;
    }
}