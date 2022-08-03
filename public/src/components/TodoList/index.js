import React from "react"
import TodoList from "./TodoList"
import {useSelector} from "react-redux"
import NotFound from "../NotFound"

const TodoListWrapper = () => {

    const { items } = useSelector(state => state.task)

    if (!items.length || items.length === 0) return <NotFound />

    return <TodoList items={items} />
}

export default TodoListWrapper