import React, { forwardRef, useRef, useState } from 'react';

// A button that forwards ref to the underlying button element
const Button = forwardRef(({ onClick, children, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    async function handleClick() {
        setIsLoading(true);
        try {
            await onClick();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            ref={ref}
            onClick={handleClick}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.5 : 1 }}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
});

function Counter() {
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);

    async function handleIncrement() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCount((prevCount) => prevCount + 1);
    }

    function logButtonDetails() {
        console.log('Button element:', buttonRef.current);
        // Could do more DOM operations here
    }

    return (
        <div className="counter-container">
            <h2>Async Button with forwardRef</h2>
            <p>Count: {count}</p>
            <Button ref={buttonRef} onClick={handleIncrement} className="counter-button">
                Increment
            </Button>
            <button onClick={logButtonDetails} className="debug-button">
                Log Button Details
            </button>
        </div>
    );
}

export default Counter;
