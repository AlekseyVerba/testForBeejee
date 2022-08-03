import React, { useState } from "react"
import TodoBottom from "./TodoBottom"
import { useActions } from "../../../hooks/useActions"

const TodoBottomWrapper = ({id, status, value}) => {

    const [doneLoading, setDoneLoading] = useState(false)
    const [textLoading, setTextLoading] = useState(false)
    const { actionDoneTask, actionChangeText } = useActions()

    const submitDone = async () => {
        setDoneLoading(true)
        await actionDoneTask(id)
        setDoneLoading(false)
    }

    const submitChangeText = async () => {
        setTextLoading(true)
        await actionChangeText({id, value})
        setTextLoading(false)
    }

    return <TodoBottom id={id} status={status} 
            submitDone={submitDone} doneLoading={doneLoading}
            submitChangeText={submitChangeText}  textLoading={textLoading}
    />
}

export default TodoBottomWrapper