

import { tabActionTypes } from "../constants/actionTypes";

const initialState = 'main_page';

export default (state = initialState, action) => {
    switch(action.type) {
    case tabActionTypes.SWITCH_TAB:
        return action.tab;
    default:
        return state;
    }
}