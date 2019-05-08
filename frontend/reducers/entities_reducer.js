import { combineReducers } from 'redux';

import user from './users_reducer';
import posts from "./posts_reducer";
import likes from "./likes_reducer";

export default combineReducers({
    user,
    posts,
    likes,
});