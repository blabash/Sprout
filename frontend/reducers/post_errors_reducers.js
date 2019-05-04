import { RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/error_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors
        case RECEIVE_POST:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};
