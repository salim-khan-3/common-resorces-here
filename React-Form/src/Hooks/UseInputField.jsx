import { useState } from "react"

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnchange = e => {
        setFieldValue(e.target.value);
    }

    return [fieldValue,handleFieldOnchange];
}

export default useInputField;