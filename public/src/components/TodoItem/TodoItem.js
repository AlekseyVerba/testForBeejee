import React from "react"
import TodoBottom from "./TodoBottom/"
import { useSelector } from "react-redux"
import EditInput from "./EditInput"
import { useInput } from "../../hooks/useInput"
import "./index.scss"

const TodoItem = ({ item: { userName, userEmail, value, status, isEdit, id } }) => {

    const { user } = useSelector(state => state.user)

    const valueInput = useInput(value, {
        lengthMin: {
            value: 1,
            message: "Поле должно быть заполнено"
        }
    })
    const text = user ? <EditInput valueInput={valueInput} /> : <>{value}</>

    return (
        <div className={`toast show ${status && "toast--done"}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <div><strong className="me-auto">Имя - {userName}</strong></div>
                <div><strong className="me-auto">E-mail - {userEmail}</strong></div>
                {isEdit && <div><strong className="me-auto">Отредактировано администратором</strong></div>}
            </div>
            <div className="toast-body">
                {text}
            </div>
            {user && <TodoBottom id={id} value={valueInput.value} status={status} />}
        </div>
    )
}

export default TodoItem