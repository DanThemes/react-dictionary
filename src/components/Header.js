import React, { createRef } from 'react'

const Header = ({setWord}) => {
    const inputRef = createRef(null);

    const handleSubmit = (e, inputRef) => {
        e.preventDefault();
        setWord(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <header>
            <form onSubmit={(e) => handleSubmit(e, inputRef)}>
                <input ref={inputRef} type="text" placeholder="Enter a word..." />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header