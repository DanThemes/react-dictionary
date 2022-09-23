import React, { createRef } from 'react'

const Header = ({setWord}) => {
    const formRef = createRef(null);
    const inputRef = createRef(null);

    const showError = (message) => {
        const errorEl = document.createElement('div');
        errorEl.classList.add('errorMessage');
        errorEl.textContent = message;
        formRef.current.appendChild(errorEl);

        setTimeout(() => {
            errorEl.remove();
        }, 3000);
    }

    const handleSubmit = (e, inputRef) => {
        e.preventDefault();
        const value = inputRef.current.value
        if (value.length === 0) {
            showError('Enter at least 1 character.')
            return;
        }
        setWord(value);
        inputRef.current.value = '';
    }

    return (
        <header>
            <form ref={formRef} onSubmit={(e) => handleSubmit(e, inputRef)}>
                <input ref={inputRef} type="text" placeholder="Enter a word..." />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header