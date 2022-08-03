import taskActionType from "../actionTypes/task"
import { requestGETOrDELETE, requestPostOrPut } from "../../requests/"
import { getURL, putURL } from "../../requests/urlRequests"

export const actionChangeLoadingTask = (payload) => {
    return {
        type: taskActionType.LOAD_TASKS,
        payload
    }
}

export const actionChangeOrder = (payload) => {
    return {
        type: taskActionType.CHANGE_ORDER,
        payload
    }
}

export const actionChangeCurrentPage = (payload) => {
    return {
        type: taskActionType.CHANGE_CURRENT_PAGE,
        payload
    }
}

export const actionChangeSortBy = (payload) => {
    return {
        type: taskActionType.CHANGE_SORT,
        payload
    }
}

export const actionChangeOffset = (payload) => {
    return {
        type: taskActionType.CHANGE_OFFSET,
        payload
    }
}

export const actionChangeCount = (payload) => {
    return {
        type: taskActionType.CHANGE_COUNT,
        payload
    }
}

export const actionDoneTask = (id) => {
    return async (dispatch) => {

        try {

            const res = await requestPostOrPut({url: `${putURL.DONE}/${id}`, auth: true, method: "PUT"})

            if (res.status) {
                dispatch({type: taskActionType.DONE_TASK, payload: id})
            }

        } catch (e) {
            console.log(e)
        }

    }
}

export const actionChangeText = (payload) => {
    return async (dispatch) => {

        try {

            const res = await requestPostOrPut({url: `${putURL.EDIT}/${payload.id}`, 
                        auth: true, method: "PUT", body: {value: payload.value}})

            if (res.status) {
                dispatch({type: taskActionType.CHANGE_TEXT, payload})
                alert(res.message)
            } else {
                alert(res.message)
            }

        } catch (e) {
            alert(e)
        }

    }
}

export const actionGetTasks = (payload) => {
    return async (dispatch) => {
        const { order, sortBy, offset } = payload

        dispatch({ type: taskActionType.LOAD_TASKS, payload: true })

        const url = `${getURL.GET_TASKS}?offset=${offset}&order=${order}&sortBy=${sortBy}`

        try {

            const res = await requestGETOrDELETE(url)

            if (res.status) {
                dispatch({ type: taskActionType.GET_TASKS, payload: res.data.tasks })
                dispatch({ type: taskActionType.CHANGE_COUNT, payload: res.data.count })
            }

        } catch (e) {
            console.log(e)
        }

        dispatch({ type: taskActionType.LOAD_TASKS, payload: false })

    }
}