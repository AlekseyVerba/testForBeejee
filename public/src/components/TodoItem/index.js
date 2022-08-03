import React from "react"
import TodoItem from "./TodoItem"

const TodoItemWrapper = ({item}) => {

    return <TodoItem {...item} />
}

export default TodoItemWrapper