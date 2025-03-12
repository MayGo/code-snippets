import { useId } from 'react';
import type { BaseInputProps } from '../shared/InputTypes';
import { inputContainerStyles, inputStyles, labelStyles } from '../shared/InputUI';

export function CustomInputAfter({ label, ...props }: BaseInputProps) {
    const id = useId();

    return (
        <div className={inputContainerStyles}>
            {label && (
                <label htmlFor={id} className={labelStyles}>
                    {label}
                </label>
            )}
            <input id={id} className={inputStyles} {...props} />
        </div>
    );
}
