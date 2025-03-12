import { useId } from 'react';
import type { BaseButtonProps } from '../shared/ButtonTypes';
import { buttonStyles, LoadingSpinner } from '../shared/ButtonUI';

export function CustomButtonAfter({ children, isLoading, ...buttonProps }: BaseButtonProps) {
    const id = useId();

    return (
        <button id={id} className={buttonStyles} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
            {isLoading ? <LoadingSpinner /> : children}
        </button>
    );
}
