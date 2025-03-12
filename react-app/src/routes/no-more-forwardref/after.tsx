import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { CustomButtonAfter } from './components/after/CustomButtonAfter';
import { CustomInputAfter } from './components/after/CustomInputAfter';
import { useElementRegistry } from './components/after/useElementRegistry';
import { Layout } from './components/shared/Layout';
import { UtilityButton } from './components/shared/UtilityButton';

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
        <Layout title="Modern Approach (No ForwardRef)">
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

                    <UtilityButton onClick={focusInput}>Focus Input</UtilityButton>

                    <UtilityButton onClick={clickButton}>Click Submit</UtilityButton>
                </div>
            </form>
        </Layout>
    );
}

export const Route = createFileRoute('/no-more-forwardref/after')({
    component: AfterExample
});
