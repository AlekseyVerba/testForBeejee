import React from "react";
import SmallLoader from "../SmallLoader"
import "./index.scss"


const Button = ({ text, loading, disabled = false, styleButton = "btn-primary", type = "button", event }) => {

    return (
        <button onClick={event} type={type} className={`btn ${styleButton} ${disabled || loading ? "disabled" : ""}`}>
          <span>{text}</span>  
          {loading && <SmallLoader /> }
          
        </button>
    )
}

export default Button

