import React from "react"
import FormLogin from "./FormLogin"
import { useInput } from "../../hooks/useInput"
import { useActions } from "../../hooks/useActions"
import { postURL } from "../../requests/urlRequests"
import { requestPostOrPut } from "../../requests/"
import { LOCAL_USER } from "../../constants"

const FormLoginWrapper = () => {

    const { actionChangeLoadingUser, actionChangeErrorUser, 
            actionChangeSuccessUser, actionChangeUser } = useActions()

    const loginInput = useInput("", {
        lengthMin: {
            value: 1,
            message: "Поле должно быть заполнено"
        }
    })

    const passwordInput = useInput("", {
        lengthMax: { value: 15, message: "Максимальная длина 15 символов" },
        lengthMin: { value: 3, message: "Минимальная длина 3 символа" }
    })

    const clearEverything = () => {
        loginInput.clearValue()
        passwordInput.clearValue()
        actionChangeLoadingUser(false)
        setTimeout(() => {
            actionChangeErrorUser(null)
            actionChangeSuccessUser(null)
        }, 3000)
    }

    const submitLogin = async (event) => {
        event.preventDefault()
        actionChangeLoadingUser(true)

        const body = {
            login: loginInput.value,
            password: passwordInput.value,
        }

        const res = await requestPostOrPut({ url: postURL.LOGIN, body })

        if (res.status) {
            actionChangeUser(res.data.user)
            localStorage.setItem(LOCAL_USER, res.data.token)
            actionChangeSuccessUser(res.message)
        } else {
            actionChangeErrorUser(res.message)
        }

        clearEverything()
    }

    const buttonIsDisabled = !loginInput.errors && !passwordInput.errors

    return <FormLogin loginInput={loginInput}
        passwordInput={passwordInput}
        buttonIsDisabled={buttonIsDisabled}
        submit={submitLogin}
    />
}

export default FormLoginWrapper