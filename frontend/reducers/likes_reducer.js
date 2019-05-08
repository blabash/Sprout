import {
    RECEIVE_LIKE,
    REMOVE_LIKE,
} from "../actions/like_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";
import { merge } from "lodash";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.likes
        case RECEIVE_LIKE:
            newState = merge({}, state, {[action.like.id]: action.like});
            return newState;
        case REMOVE_LIKE:
            let newState = merge({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;