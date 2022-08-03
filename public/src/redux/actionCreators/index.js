import * as taskActionCreators from "./task"
import * as taskCreateActionCreators from "./createTask"
import * as userActionCreators from "./user"

const actionCreators = {
    ...taskActionCreators,
    ...taskCreateActionCreators,
    ...userActionCreators
}

export default actionCreators