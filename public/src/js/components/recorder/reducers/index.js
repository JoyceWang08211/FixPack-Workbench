import { combineReducers } from 'redux'
import subTasks from './subTasksReducer'

const rootReducer = combineReducers({
    subTasks
});

export default rootReducer;