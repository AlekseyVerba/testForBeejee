import userActionType from "../actionTypes/user"

const defaultState = {
    user: null,
    loadingUser: false,
    success: null,
    error: null
}

export const userReducer = (state = defaultState, action) => {

    switch(action.type) {

        case userActionType.CHANGE_USER: {
            return {
                ...state,
                user: action.payload
            }
        }

        case userActionType.CHANGE_LOAD: {
            return {
                ...state,
                loadingCreating: action.payload
            }
        }

        case userActionType.CHANGE_SUCCESS: {
            return {
                ...state,
                success: action.payload
            }
        }

        case userActionType.CHANGE_ERROR: {
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