import React, { useRef } from 'react';

// Input component with callback prop instead of using forwardRef
function Input({ onInputRef, ...props }) {
    // Pass the ref up through a callback when the component mounts
    return <input ref={onInputRef} {...props} />;
}

// FormControl component that encapsulates the input + button pattern
function FormControl({ defaultPlaceholder = 'Type here...' }) {
    const inputRef = useRef(null);

    function focusInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className="form-control">
            <Input
                onInputRef={(el) => (inputRef.current = el)}
                placeholder={defaultPlaceholder}
                className="form-input"
            />
            <button onClick={focusInput} className="form-button">
                Focus the input
            </button>
        </div>
    );
}

function Form() {
    return (
        <div className="form-container">
            <h2>Modern Approach Without forwardRef</h2>
            <FormControl defaultPlaceholder="Enter text here..." />
        </div>
    );
}

export default Form;
