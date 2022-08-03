import React from "react"
import TodoItem from "../TodoItem/TodoItem"
import Pagination from "../Pagination";


const TodoList = ({ items }) => {

    const itemsComponent = items.map(item => {
        return <TodoItem key={item.id} item={item} />
    })

    return (
        <div>
            <div className="todo-list">{itemsComponent}</div>
            <Pagination itemsPerPage={3} />
        </div>
    )
}

export default TodoList