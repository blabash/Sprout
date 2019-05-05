import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import posts from "./post_errors_reducers";


export default combineReducers({
    session,
    posts,
});