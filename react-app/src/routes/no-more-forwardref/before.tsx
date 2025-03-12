import { createFileRoute } from '@tanstack/react-router';
import { type FormEvent, useRef, useState } from 'react';
import { CustomButtonBefore } from './components/before/CustomButtonBefore';
import { CustomInputBefore } from './components/before/CustomInputBefore';

export const Route = createFileRoute('/no-more-forwardref/before')({
    component: BeforeExample
});

function BeforeExample() {
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [inputValue, setInputValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const clickButton = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert(`Submitted value: ${inputValue}`);
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Traditional ForwardRef Example</h2>
            <form onSubmit={handleSubmit}>
                <CustomInputBefore
                    ref={inputRef}
                    label="Enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="John Doe"
                />

                <div className="flex space-x-2">
                    <CustomButtonBefore ref={buttonRef} type="submit" isLoading={isSubmitting}>
                        Submit
                    </CustomButtonBefore>

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
                    This example uses <code>forwardRef</code> to pass ref objects from parent components down to
                    specific DOM elements in child components. This approach requires additional boilerplate and
                    complexity.
                </p>
            </div>
        </div>
    );
}
