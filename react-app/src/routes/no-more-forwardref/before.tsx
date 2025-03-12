import { createFileRoute } from '@tanstack/react-router';
import { type FormEvent, useRef, useState } from 'react';
import { CustomButtonBefore } from './components/before/CustomButtonBefore';
import { CustomInputBefore } from './components/before/CustomInputBefore';
import { Layout } from './components/shared/Layout';
import { UtilityButton } from './components/shared/UtilityButton';

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
        <Layout title="Traditional ForwardRef Example">
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

                    <UtilityButton onClick={focusInput}>Focus Input</UtilityButton>
                    <UtilityButton onClick={clickButton}>Click Submit</UtilityButton>
                </div>
            </form>
        </Layout>
    );
}
