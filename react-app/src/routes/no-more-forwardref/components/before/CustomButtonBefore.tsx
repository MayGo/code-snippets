import { forwardRef, useId } from 'react';
import type { BaseButtonProps } from '../shared/ButtonTypes';
import { buttonStyles, LoadingSpinner } from '../shared/ButtonUI';

export const CustomButtonBefore = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ children, isLoading, ...buttonProps }, ref) => {
        const id = useId();

        return (
            <button
                id={id}
                ref={ref}
                className={buttonStyles}
                disabled={isLoading || buttonProps.disabled}
                {...buttonProps}
            >
                {isLoading ? <LoadingSpinner /> : children}
            </button>
        );
    }
);
