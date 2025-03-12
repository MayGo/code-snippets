import React, { useState, useTransition } from 'react';

// AsyncButton component using useTransition instead of forwardRef
function AsyncButton({ onClick, children, className }) {
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        startTransition(async () => {
            await onClick();
        });
    }

    return (
        <button
            onClick={handleClick}
            disabled={isPending}
            className={className}
            style={{ opacity: isPending ? 0.5 : 1 }}
        >
            {isPending ? 'Loading...' : children}
        </button>
    );
}

// A custom hook to expose button interaction metrics
function useButtonMetrics() {
    const [metrics, setMetrics] = useState({
        clickCount: 0,
        lastClickTime: null
    });

    function trackButtonClick() {
        setMetrics((prev) => ({
            clickCount: prev.clickCount + 1,
            lastClickTime: new Date().toISOString()
        }));
    }

    return [metrics, trackButtonClick];
}

function Counter() {
    const [count, setCount] = useState(0);
    const [buttonMetrics, trackButtonClick] = useButtonMetrics();

    async function handleIncrement() {
        trackButtonClick();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div className="counter-container">
            <h2>Async Button without forwardRef</h2>
            <p>Count: {count}</p>
            <AsyncButton onClick={handleIncrement} className="counter-button">
                Increment
            </AsyncButton>

            <div className="metrics-panel">
                <h3>Button Metrics</h3>
                <p>Click count: {buttonMetrics.clickCount}</p>
                <p>Last clicked: {buttonMetrics.lastClickTime || 'Never'}</p>
            </div>
        </div>
    );
}

export default Counter;
