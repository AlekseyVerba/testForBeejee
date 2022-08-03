import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreators from "../redux/actionCreators/index"

export const useActions = () => {
    return bindActionCreators(actionCreators, useDispatch())
}
