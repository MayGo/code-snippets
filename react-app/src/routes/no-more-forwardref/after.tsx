import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState, type FormEvent } from 'react';
import { CustomButtonAfter } from './components/after/CustomButtonAfter';
import { CustomInputAfter } from './components/after/CustomInputAfter';
import { Layout } from './components/shared/Layout';
import { UtilityButton } from './components/shared/UtilityButton';

export const Route = createFileRoute('/no-more-forwardref/after')({
    component: AfterExample
});

function AfterExample() {
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
        <Layout title="Modern Approach (No ForwardRef)">
            <form onSubmit={handleSubmit}>
                <CustomInputAfter
                    ref={inputRef}
                    label="Enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="John Doe"
                />

                <div className="flex space-x-2">
                    <CustomButtonAfter ref={buttonRef} type="submit" isLoading={isSubmitting}>
                        Submit
                    </CustomButtonAfter>

                    <UtilityButton onClick={focusInput}>Focus Input</UtilityButton>

                    <UtilityButton onClick={clickButton}>Click Submit</UtilityButton>
                </div>
            </form>
        </Layout>
    );
}
