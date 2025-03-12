import React, { useId, useTransition } from 'react';
import type { CallbackRefButtonProps } from '../shared/ButtonTypes';
import { buttonStyles, LoadingSpinner } from '../shared/ButtonUI';

// Button component with callback ref pattern
export function CustomButtonAfter({
    children,
    onAsyncClick,
    registerButton,
    isLoading,
    ...buttonProps
}: CallbackRefButtonProps) {
    const id = useId();
    const [isPending, startTransition] = useTransition();

    // Callback ref pattern specific to this implementation
    const handleRef = (el: HTMLButtonElement | null) => {
        if (el && registerButton) registerButton(el);
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onAsyncClick) {
            e.preventDefault();
            startTransition(async () => {
                await onAsyncClick();
            });
        }
    };

    const isButtonLoading = isPending || isLoading;

    return (
        <button
            id={id}
            className={buttonStyles}
            onClick={handleClick}
            disabled={isButtonLoading || buttonProps.disabled}
            ref={handleRef}
            {...buttonProps}
        >
            {isButtonLoading ? <LoadingSpinner /> : children}
        </button>
    );
}
