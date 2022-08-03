import React from "react";
import Input from "../Input";
import Button from "../Button"
import "./index.scss"
import { useActions } from "../../hooks/useActions"
import { useSelector } from "react-redux"

const FormcreateTask = ({ nameInput, emailInput, valueInput, buttonIsDisabled, load, submit }) => {

    const { actionChangeIsCreating } = useActions()
    const { success, error } = useSelector(state => state.createTask)

    return (
        <form className="create-task">
            <Input nameLabel="Ваше имя" placeholder="Имя"
                value={nameInput.value}
                validErrorMessage={nameInput.errors}
                blur={nameInput.handlerChangeBlur}
                change={nameInput.changeHadnlerInput}
                isClearBlur={nameInput.isClearBlur}
            />
            <Input nameLabel="Ваш Email" placeholder="Email"
                value={emailInput.value}
                validErrorMessage={emailInput.errors}
                blur={emailInput.handlerChangeBlur}
                change={emailInput.changeHadnlerInput}
                isClearBlur={emailInput.isClearBlur}
            />
            <Input nameLabel="Текст задачи" placeholder="..."
                value={valueInput.value}
                validErrorMessage={valueInput.errors}
                blur={valueInput.handlerChangeBlur}
                change={valueInput.changeHadnlerInput}
                isClearBlur={valueInput.isClearBlur}
            />

            {success && <div className="message message--success">{success}</div>}
            {error && <div className="message message--error">{error}</div>}

            <div className="create-task__buttons">
                <Button text="Создать" styleButton="btn-success" event={submit} disabled={!buttonIsDisabled} loading={load} />
                <Button text="Отмена" styleButton="btn-danger" event={() => actionChangeIsCreating(false)} />
            </div>
        </form>
    )
}

export default FormcreateTask