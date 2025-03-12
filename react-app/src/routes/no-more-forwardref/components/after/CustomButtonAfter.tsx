import React, { useId, useTransition } from 'react';

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'onClick'> {
    onAsyncClick?: () => Promise<void>;
    registerButton?: (el: HTMLButtonElement) => void;
}
// Button without forwardRef
export function CustomButtonAfter({ children, onAsyncClick, registerButton, ...buttonProps }: CustomButtonProps) {
    const id = useId();
    const [isPending, startTransition] = useTransition();

    // Callback ref pattern
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

    return (
        <button
            id={id}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            onClick={handleClick}
            disabled={isPending || buttonProps.disabled}
            ref={handleRef}
            {...buttonProps}
        >
            {isPending ? (
                <span className="flex items-center">
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
}
