import React, { useId } from 'react';

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
    label?: string;
    onInputFocus?: () => void;
    registerInput?: (el: HTMLInputElement) => void;
}

// Input component without forwardRef
export function CustomInputAfter({ label, onInputFocus, registerInput, ...props }: CustomInputProps) {
    const id = useId();

    // Callback ref pattern
    const handleRef = (el: HTMLInputElement | null) => {
        if (el && registerInput) registerInput(el);
    };

    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium mb-1">
                    {label}
                </label>
            )}
            <input
                id={id}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={onInputFocus ? () => onInputFocus() : undefined}
                ref={handleRef}
                {...props}
            />
        </div>
    );
}
