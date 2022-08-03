import React from "react"
import Button from "../../Button"
import "./index.scss"

const TodoBottom = ({status, submitDone, doneLoading, submitChangeText, textLoading}) => {

    return (
        <div className="todo-item-bottom">
            <Button text="Изменить текст" event={submitChangeText} loading={textLoading} />
            {!status && <Button text="Выполнено" event={submitDone} loading={doneLoading} styleButton="btn-success"/>}
        </div>
    )
}

export default TodoBottom