import {GET, ADD, DELETE, EDIT, SET_LIST} from '../constants/subTasksActionType.js'

const initialState = [];

export default function subTasks(state = initialState, action = {}) {
    switch (action.type) {
        case DELETE:
        case EDIT:
        case SET_LIST:
            return action.list;
        default:
            return state
    }
};

