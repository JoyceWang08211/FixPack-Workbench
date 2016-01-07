import {GET, ADD, DELETE, EDIT, SET_LIST} from '../constants/subTasksActionType.js'

const initialState = [
    {
        id: '12345',
        name: 'LPS'
    }
];

export default function subTasks(state = initialState, action = {}) {
    switch (action.type) {
        case GET:
            //let temp = [{
            //    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            //    name: action.name.match(/^LPS-/i) ? action.name : `LPS-${action.name}`
            //}];

            return state.concat(action.list);
        case DELETE:
            return state;
        case EDIT:
            return state;
        case SET_LIST:
            return action.list;
        default:
            return state
    }
};

