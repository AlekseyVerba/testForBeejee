import React from "react";
import TodoList from "../TodoList/index";
import FormcreateTask from "../FormCreateTask/index";
import Filter from "../Filter/index";

import "./index.scss"

const Todo = () => {

    return (
        <div className="todo page">
            <FormcreateTask />
            <Filter />
            <TodoList />    
        </div>
    )
}

export default Todo