import React, { forwardRef, useRef, useState } from 'react';

// Example 1: Input component with forwardRef
const CustomInput = forwardRef((props, ref) => {
    return <input ref={ref} className="custom-input" {...props} />;
});

// Example 2: Button with forwardRef
const CustomButton = forwardRef((props, ref) => {
    const { children, ...buttonProps } = props;
    return (
        <button ref={ref} className="custom-button" {...buttonProps}>
            {children}
        </button>
    );
});

// Usage in parent component
function FormWithRefs() {
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const focusInput = () => {
        inputRef.current.focus();
    };

    const clickButton = () => {
        buttonRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted value: ${inputValue}`);
    };

    return (
        <div className="form-container">
            <h2>Form with Refs</h2>
            <form onSubmit={handleSubmit}>
                <CustomInput
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter text here"
                />

                <CustomButton ref={buttonRef} type="submit">
                    Submit
                </CustomButton>

                <div className="controls">
                    <button type="button" onClick={focusInput}>
                        Focus Input
                    </button>
                    <button type="button" onClick={clickButton}>
                        Click Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormWithRefs;
