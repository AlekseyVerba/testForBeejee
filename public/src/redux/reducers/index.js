import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer"
import { createTaskReducer } from "./createTaskReducer"
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers({
    task: taskReducer,
    createTask: createTaskReducer,
    user: userReducer
})