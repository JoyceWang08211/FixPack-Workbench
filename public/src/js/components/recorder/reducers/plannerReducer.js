import {REQUEST_LIST,RECEIVE_LIST,FETCH_LIST} from '../constants/plannerActionType.js'

const initialState = {
    isFetching: false,
    month: '',
    list: {
        "subTaskList": []
    },
    receivedAt: 0
};

export default function planner(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_LIST:
            return Object.assign({}, state, {
                month: action.month
            })
        case RECEIVE_LIST:
            return Object.assign({}, state, {
                isFetching: true,
                month: action.month,
                list: action.list,
                receivedAt: action.receivedAt
            })
        default:
            return state
    }
};