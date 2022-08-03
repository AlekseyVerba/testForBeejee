import React from "react"
import "./index.scss"


const Input = ({ additionalClass = "", nameLabel = "",
    placeholder = "", typeInput = "text",
    change, value, validSuccessMessage = "Успешно", validErrorMessage,
    blur, isClearBlur
}) => {

    return (
        <div className="form-group">
            <label className="col-form-label">
                <span>{nameLabel}</span>

                <input onBlur={(event) => blur ? blur(event) : ""} type={typeInput}
                    className={`form-control ${isClearBlur ? validErrorMessage !== undefined ? "is-invalid" : "is-valid" : ""} ${additionalClass}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={change}
                />
                <div className="invalid-feedback">{validErrorMessage}</div>
                <div className="valid-feedback">{validSuccessMessage}</div>
            </label>
        </div>
    )
}

export default Input