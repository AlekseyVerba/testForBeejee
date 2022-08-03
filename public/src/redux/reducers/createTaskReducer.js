import createTaskActionType from "../actionTypes/createTask"

const defaultState = {
    isCreating: false,
    loadingCreating: false,
    success: null,
    error: null
}

export const createTaskReducer = (state = defaultState, action) => {

    switch(action.type) {

        case createTaskActionType.CHANGE_IS_CREATING: {
            return {
                ...state,
                isCreating: action.payload
            }
        }

        case createTaskActionType.CHANGE_LOAD: {
            return {
                ...state,
                loadingCreating: action.payload
            }
        }

        case createTaskActionType.CHANGE_SUCCESS: {
            return {
                ...state,
                success: action.payload
            }
        }

        case createTaskActionType.CHANGE_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: {
            return state
        }
    }
}