import React, { useEffect } from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux"
import { useActions } from "../../hooks/useActions"
import Loader from "../Loader"

const TodoWrapper = () => {
    const { actionGetTasks } = useActions()
    const { offset, sortBy, order, loading, count } = useSelector(state => state.task)

    useEffect(() => {
        actionGetTasks({offset, sortBy, order})
    }, [offset, sortBy, order, count])

    if(loading) return <Loader />

    return <Todo />
}

export default TodoWrapper