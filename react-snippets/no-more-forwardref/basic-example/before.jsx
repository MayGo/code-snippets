import React, { forwardRef, useRef } from 'react';

// A basic input component using forwardRef
const Input = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});

function Form() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div className="form-container">
            <h2>Traditional forwardRef Example</h2>
            <Input ref={inputRef} placeholder="Type here..." className="form-input" />
            <button onClick={focusInput} className="form-button">
                Focus the input
            </button>
        </div>
    );
}

export default Form;
