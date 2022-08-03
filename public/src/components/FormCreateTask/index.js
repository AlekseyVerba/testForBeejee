import React from "react";
import FormcreateTask from "./FormCreateTask";
import { useActions } from "../../hooks/useActions"
import { useSelector } from "react-redux"
import Button from "../Button"
import { useInput } from "../../hooks/useInput"
import { requestPostOrPut } from "../../requests"
import { postURL } from "../../requests/urlRequests"

const FormCreateTaskWrapper = () => {

    const { createTask: { isCreating, loadingCreating }, task: { count } } = useSelector(state => state)
    const { actionChangeIsCreating, actionChangeLoadingCreating, 
        actionChangeCount, actionChangeError, actionChangeSuccess } = useActions()

    const nameInput = useInput("", {
        lengthMin: {
            value: 1,
            message: "Поле должно быть заполнено"
        }
    })

    const emailInput = useInput("", {
        isEmail: {
            message: "Поле должно быть Email"
        }
    })

    const valueInput = useInput("", {
        lengthMin: {
            value: 1,
            message: "Поле должно быть заполнено"
        }
    })

    const buttonIsDisabled = !nameInput.errors && !emailInput.errors && !valueInput.errors

    const clearEverything = () => {
        valueInput.clearValue()
        emailInput.clearValue()
        nameInput.clearValue()
        actionChangeLoadingCreating(false)
        setTimeout(() => {
            actionChangeError(null)
            actionChangeSuccess(null)
        }, 3000)
    }

    const submitCreate = async (event) => {
        event.preventDefault()
        actionChangeLoadingCreating(true)

        const body = {
            name: nameInput.value,
            email: emailInput.value,
            value: valueInput.value
        }

        const res = await requestPostOrPut({url: postURL.CREATE_TASK, body})

        if (res.status) {
            actionChangeCount(count + 1)
            actionChangeSuccess(res.message)
        } else {
            actionChangeError(res.message)
        }

        clearEverything()
    }

    if (!isCreating) {
        return (
            <div className="button-wrapper">
                <Button text="Добавить задачу" event={() => actionChangeIsCreating(true)} />
            </div>
        )
    }

    return <FormcreateTask nameInput={nameInput}
        emailInput={emailInput}
        valueInput={valueInput}
        buttonIsDisabled={buttonIsDisabled}
        load={loadingCreating}
        submit={submitCreate}
    />
}

export default FormCreateTaskWrapper