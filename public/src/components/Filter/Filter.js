import React from "react";
import Select from "../Select";
import { useSelector } from "react-redux"
import "./index.scss"

const Filter = ({ optionsForOrder, optionsForSort, handlerForOrder, handlerForSort }) => {

    const { order, sortBy } = useSelector(state => state.task)

    return (
        <div className="filter">
            <Select labelText="Фильтровать по:" value={order} handleChange={handlerForOrder} options={optionsForOrder} />
            <Select labelText="Сортировать по:" value={sortBy} handleChange={handlerForSort} options={optionsForSort} />
        </div>
    )
}

export default Filter