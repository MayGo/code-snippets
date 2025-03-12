import React from 'react';

// Base button props that both implementations will use
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

// Props specific to the "After" implementation (no forwardRef)
export interface CallbackRefButtonProps extends Omit<BaseButtonProps, 'id' | 'onClick'> {
    // Only keep ref-related differences
    registerButton?: (el: HTMLButtonElement) => void;
    onAsyncClick?: () => Promise<void>;
}

// Props for the "Before" implementation (with forwardRef)
export interface ForwardRefButtonProps extends BaseButtonProps {
    // ForwardRef implementation doesn't need any additional props
}
