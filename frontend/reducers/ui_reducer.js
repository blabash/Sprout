import { combineReducers } from 'redux';
import getStartedReducer from "./get_started_reducer";


const UIReducer = combineReducers({
    getStarted: getStartedReducer
});

export default UIReducer;