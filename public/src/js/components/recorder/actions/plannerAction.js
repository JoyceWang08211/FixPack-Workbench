import * as types from '../constants/plannerActionType.js'
import * as subTasksAction from '../actions/subTasksAction.js'

function requestLists(month) {
    return {
        type: types.REQUEST_LIST,
        month
    }
}

function receiveLists(month, json) {
    return {
        type: types.RECEIVE_LIST,
        month,
        list: json,
        receivedAt: Date.now()
    }
}

export function fetchLists(month) {
    return dispatch=> {
        dispatch(requestLists(month));

        return fetch(`/data/recorder/${month}.json`)
            .then(res => res.json())
            .then(json => {
                dispatch(subTasksAction.setList(json.subTaskList))
                dispatch(receiveLists(month, json))
            })
    }
}
