import * as types from '../constants/subTasksActionType.js'

function updateSubTaskList(target, payload, callback) {
    return fetch(target, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res=> {
        return res.json();
    }).then(callback)
}

function getSubTaskList(list) {
    return {
        type: types.GET,
        list
    }
}

export function addSubTask(name) {
    return dispatch => {
        return updateSubTaskList('/recorder/subTask/add',
            {name},
            (json)=> {
                dispatch(setList(json.subTaskList))
            })
    };
}

export function deleteSubTask(id) {
    return dispatch => {
        return updateSubTaskList('/recorder/subTask/delete',
            {id},
            (json)=> {
                dispatch(setList(json.subTaskList))
            })
    };
}

export function editSubTask(id, name) {
    return {
        type: types.EDIT,
        id,
        name
    }
}

export function setList(list) {
    return {
        type: types.SET_LIST,
        list
    }


}
