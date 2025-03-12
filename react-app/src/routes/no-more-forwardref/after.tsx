import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { CustomButtonAfter } from './components/after/CustomButtonAfter';
import { CustomInputAfter } from './components/after/CustomInputAfter';
import { useElementRegistry } from './components/after/useElementRegistry';

function AfterExample() {
    const [inputValue, setInputValue] = useState('');

    // Use registry pattern instead of forwarding refs
    const { element: inputElement, registerElement: registerInput } = useElementRegistry<HTMLInputElement>();
    const { element: buttonElement, registerElement: registerButton } = useElementRegistry<HTMLButtonElement>();

    const focusInput = () => {
        if (inputElement) {
            inputElement.focus();
        }
    };

    const clickButton = () => {
        if (buttonElement) {
            buttonElement.click();
        }
    };

    const handleSubmit = async () => {
        if (!inputValue.trim()) return;

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert(`Submitted value: ${inputValue}`);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Modern Approach (No ForwardRef)</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <CustomInputAfter
                    label="Enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="John Doe"
                    registerInput={registerInput}
                />

                <div className="flex space-x-2">
                    <CustomButtonAfter onAsyncClick={handleSubmit} registerButton={registerButton}>
                        Submit
                    </CustomButtonAfter>

                    <button
                        type="button"
                        onClick={focusInput}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Focus Input
                    </button>

                    <button
                        type="button"
                        onClick={clickButton}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Click Submit
                    </button>
                </div>
            </form>

            <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h3 className="font-medium mb-2">Implementation Notes:</h3>
                <p className="text-sm text-gray-700">
                    This implementation uses several modern patterns to avoid forwardRef:
                </p>
                <ul className="text-sm list-disc pl-5 mt-2 text-gray-700">
                    <li>Callback element registration</li>
                    <li>Custom hooks for element access</li>
                    <li>useId for unique identifiers</li>
                    <li>useTransition for async operations</li>
                    <li>Prop-based communication patterns</li>
                </ul>
            </div>
        </div>
    );
}

export const Route = createFileRoute('/no-more-forwardref/after')({
    component: AfterExample
});
