import React from "react"
import Filter from "./Filter"
import { useActions } from "../../hooks/useActions"

const FilterWrapper = () => {

    const { actionChangeOrder, actionChangeSortBy } = useActions()

    const handlerForOrder = (event) => {
        console.log(event.target.value)
        actionChangeOrder(event.target.value)
    }

    const handlerForSort = (event) => {
        console.log(event.target.value)
        actionChangeSortBy(event.target.value)
    }

    const optionsForOrder = [
        { value: "userName", text: "По имени" },
        { value: "userEmail", text: "По Email" },
        { value: "status", text: "По статусу" },
    ]

    const optionsForSort = [
        { value: "ASC", text: "По возрастанию" },
        { value: "DESC", text: "По убыванию" },
    ]

    return <Filter optionsForOrder={optionsForOrder}
            optionsForSort={optionsForSort}
            handlerForOrder={handlerForOrder}
            handlerForSort={handlerForSort}
    />
}

export default FilterWrapper