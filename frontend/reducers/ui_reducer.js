import { combineReducers } from 'redux';
import getStartedReducer from "./get_started_reducer";
import modal from './modal_reducer';


const UIReducer = combineReducers({
    getStarted: getStartedReducer,
    modal
});

export default UIReducer;