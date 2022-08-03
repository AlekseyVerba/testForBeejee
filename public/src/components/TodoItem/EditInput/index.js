import React from "react"
import Input from "../../Input"

const EditInput = ({ valueInput: { value, changeHadnlerInput,
                    errors, isClearBlur, handlerChangeBlur } }) => {

    return <Input blur={handlerChangeBlur} change={changeHadnlerInput} 
            isClearBlur={isClearBlur} value={value} validErrorMessage={errors}

        />
}

export default EditInput