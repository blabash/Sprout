import {
    OPEN_GET_STARTED,
    CLOSE_GET_STARTED
} from "../actions/ui_actions";
import { merge } from "lodash";

const getStartedReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_GET_STARTED:
            return true;
        case CLOSE_GET_STARTED:
            return false;
        default:
            return state;
    }
}

export default getStartedReducer;