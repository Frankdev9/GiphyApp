import { useState } from "react"

export const AddCategory = ({ OnNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const OnInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const OnSumit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if (newInputValue.length > 0) {
            OnNewCategory(newInputValue)
            setInputValue("")
        }    
    }

        return (
    
            <form onSubmit={OnSumit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={OnInputChange}
                />
            </form>
        )
    
}
