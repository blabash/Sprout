import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/error_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};