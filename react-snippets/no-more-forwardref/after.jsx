import React, { useId, useState, useTransition } from 'react';

// Example 1: Input component without forwardRef
// Uses composition and callback props instead
function CustomInput({ onFocus, ...props }) {
    const handleFocus = (e) => {
        // Call provided callback when input is focused
        if (onFocus) onFocus(e);
    };

    return <input className="custom-input" onFocus={handleFocus} {...props} />;
}

// Example 2: Button without forwardRef
// Uses callbacks and composition
function CustomButton({ onClick, children, ...buttonProps }) {
    const [isPending, startTransition] = useTransition();

    const handleClick = (e) => {
        if (onClick) {
            // Handle async operations smoothly with useTransition
            startTransition(async () => {
                await onClick(e);
            });
        }
    };

    return (
        <button
            className="custom-button"
            onClick={handleClick}
            disabled={isPending}
            style={{ opacity: isPending ? 0.7 : 1 }}
            {...buttonProps}
        >
            {isPending ? 'Processing...' : children}
        </button>
    );
}

// Form component without refs
function FormWithoutRefs() {
    const [inputValue, setInputValue] = useState('');
    const inputId = useId();
    const submitId = useId();

    // Async submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(`Submitted value: ${inputValue}`);
    };

    // Focus input using label and ID
    const focusInput = () => {
        document.getElementById(inputId).focus();
    };

    // Click button using ID
    const clickButton = () => {
        document.getElementById(submitId).click();
    };

    return (
        <div className="form-container">
            <h2>Form without Refs</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={inputId}>Input:</label>
                <CustomInput
                    id={inputId}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter text here"
                />

                <CustomButton id={submitId} type="submit">
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

export default FormWithoutRefs;
