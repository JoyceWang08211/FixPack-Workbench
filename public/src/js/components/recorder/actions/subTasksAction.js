import * as types from '../constants/subTasksActionType.js'

export function addSubTask(name) {
    return {
        type:types.ADD,
        name
    }
}

export function deleteSubTask(id){
    return {
        type:types.DELETE,
        id
    }
}

export function editSubTask(id, name){
    return {
        type:types.EDIT,
        id,
        name
    }
}
