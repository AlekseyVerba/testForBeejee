import userActionType from "../actionTypes/user"
import { requestGETOrDELETE } from "../../requests"
import { getURL } from "../../requests/urlRequests"
import { LOCAL_USER } from "../../constants/"

export const actionCheckAuth = () => {
    return async (dispatch) => {

        if (!localStorage.getItem(LOCAL_USER)) {
            return
        }

        try {

            const res = await requestGETOrDELETE(getURL.CHECK_AUTH)

            if (res.status) {
                dispatch({type: userActionType.CHANGE_USER, payload: res.data.user})
            } else {
                localStorage.removeItem(LOCAL_USER)
            }

        } catch (e) {
            console.log(e)
        }
    }
}

export const actionChangeUser = (payload) => {
    return {
        type: userActionType.CHANGE_USER,
        payload
    }
}

export const actionChangeLoadingUser = (payload) => {
    return {
        type: userActionType.CHANGE_LOAD,
        payload
    }
}

export const actionChangeSuccessUser = (payload) => {
    return {
        type: userActionType.CHANGE_SUCCESS,
        payload
    }
}

export const actionChangeErrorUser = (payload) => {
    return {
        type: userActionType.CHANGE_ERROR,
        payload
    }
}