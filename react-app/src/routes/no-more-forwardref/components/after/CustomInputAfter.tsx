import { useId } from 'react';
import type { CallbackRefInputProps } from '../shared/InputTypes';
import { inputContainerStyles, inputStyles, labelStyles } from '../shared/InputUI';

// Input component with callback ref pattern
export function CustomInputAfter({ label, onInputFocus, registerInput, ...props }: CallbackRefInputProps) {
    const id = useId();

    const handleRef = (el: HTMLInputElement | null) => {
        if (el && registerInput) registerInput(el);
    };

    return (
        <div className={inputContainerStyles}>
            {label && (
                <label htmlFor={id} className={labelStyles}>
                    {label}
                </label>
            )}
            <input
                id={id}
                className={inputStyles}
                onFocus={onInputFocus ? () => onInputFocus() : undefined}
                ref={handleRef}
                {...props}
            />
        </div>
    );
}
