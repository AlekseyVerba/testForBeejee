import taskActionType from "../actionTypes/task"

const defaultState = {
    items: [],
    count: 0,
    loading: false,
    order: "userName",
    sortBy: "ASC",
    offset: 0,
    currentPage: 0
}

export const taskReducer = (state = defaultState, action) => {

    switch(action.type) {

        case taskActionType.GET_TASKS: {
            return {
                ...state,
                items: action.payload
            }
        }

        case taskActionType.LOAD_TASKS: {
            return {
                ...state,
                loading: action.payload
            }
        }

        case taskActionType.CHANGE_ORDER: {
            return {
                ...state,
                order: action.payload
            }
        }

        case taskActionType.CHANGE_SORT: {
            return {
                ...state,
                sortBy: action.payload
            }
        }

        case taskActionType.CHANGE_OFFSET: {
            return {
                ...state,
                offset: action.payload
            }
        }

        case taskActionType.CHANGE_COUNT: {
            return {
                ...state,
                count: action.payload
            }
        }

        case taskActionType.CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case taskActionType.DONE_TASK: {
            return {
                ...state,
                items: [...state.items.map(item => {
                    if (item.id === action.payload) {
                        item.status = true
                    }
                    return item
                })]
            }
        }

        case taskActionType.CHANGE_TEXT: {
            return {
                ...state,
                items: [...state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.value = action.payload.value
                        item.isEdit = true
                    }
                    return item
                })]
            }
        }

        default: {
            return state
        }
    }
}