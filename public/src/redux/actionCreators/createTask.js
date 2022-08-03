import createTaskActionType from "../actionTypes/createTask"

export const actionChangeIsCreating = (payload) => {
    return {
        type: createTaskActionType.CHANGE_IS_CREATING,
        payload
    }
}

export const actionChangeLoadingCreating = (payload) => {
    return {
        type: createTaskActionType.CHANGE_LOAD,
        payload
    }
}

export const actionChangeSuccess = (payload) => {
    return {
        type: createTaskActionType.CHANGE_SUCCESS,
        payload
    }
}

export const actionChangeError = (payload) => {
    return {
        type: createTaskActionType.CHANGE_ERROR,
        payload
    }
}