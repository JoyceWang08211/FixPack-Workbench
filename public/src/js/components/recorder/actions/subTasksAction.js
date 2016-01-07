import * as types from '../constants/subTasksActionType.js'

function getSubTaskList(list) {
    return {
        type: types.GET,
        list
    }
}

export function addSubTask(name) {
    return dispatch => {
        return fetch('/recorder/subTask/add', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        }).then(res=> {
            return res.json();
        }).then(json=> {
            dispatch(getSubTaskList(json.subTaskList))
        })
    };
}

export function deleteSubTask(id) {
    return {
        type: types.DELETE,
        id
    }
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
