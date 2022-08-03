import React from "react"

const Select = ({labelText, options, value, handleChange}) => {

    return (
        <div className="form-group">
            <label className="form-label mt-4">
                <span>{labelText}</span>
                <select value={value} onChange={handleChange} className="form-select" >
                    {
                        options.map((option, idx) => <option value={option.value} key={idx}>{option.text}</option>)
                    }
                </select>
            </label>
        </div>
    )
}

export default Select