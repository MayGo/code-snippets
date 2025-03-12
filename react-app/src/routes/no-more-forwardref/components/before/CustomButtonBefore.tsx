import { forwardRef, useId } from 'react';
import type { ForwardRefButtonProps } from '../shared/ButtonTypes';
import { buttonStyles, LoadingSpinner } from '../shared/ButtonUI';

// Button component with forwardRef pattern
export const CustomButtonBefore = forwardRef<HTMLButtonElement, ForwardRefButtonProps>(
    ({ children, isLoading, ...buttonProps }, ref) => {
        const id = useId(); // Add id generation for consistency with After version

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
