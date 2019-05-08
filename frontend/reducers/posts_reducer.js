import { 
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST 
} from "../actions/post_actions";
import { merge } from "lodash";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            if(action.posts) {
                return action.posts
            } else {
                return state;
            }
        case RECEIVE_POST:
            newState = merge({}, state, action.post );
            return newState;
        case REMOVE_POST:
            let newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
}

export default postsReducer;