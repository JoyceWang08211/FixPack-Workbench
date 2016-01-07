import { combineReducers } from 'redux'
import subTasks from './subTasksReducer'
import planner from './plannerReducer'

const rootReducer = combineReducers({
    subTasks,
    planner
});

export default rootReducer;