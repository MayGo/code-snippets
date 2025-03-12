import { forwardRef, useId } from 'react';
import type { ForwardRefInputProps } from '../shared/InputTypes';
import { inputContainerStyles, inputStyles, labelStyles } from '../shared/InputUI';

// Input component with forwardRef pattern
export const CustomInputBefore = forwardRef<HTMLInputElement, ForwardRefInputProps>(({ label, ...props }, ref) => {
    const id = useId();

    return (
        <div className={inputContainerStyles}>
            {label && (
                <label htmlFor={id} className={labelStyles}>
                    {label}
                </label>
            )}
            <input id={id} className={inputStyles} ref={ref} {...props} />
        </div>
    );
});
