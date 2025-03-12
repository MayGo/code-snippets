import { forwardRef, useId } from 'react';
import type { BaseInputProps } from '../shared/InputTypes';
import { inputContainerStyles, inputStyles, labelStyles } from '../shared/InputUI';

export const CustomInputBefore = forwardRef<HTMLInputElement, BaseInputProps>(({ label, ...props }, ref) => {
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
