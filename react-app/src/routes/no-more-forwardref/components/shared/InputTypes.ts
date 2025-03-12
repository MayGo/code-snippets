import React from 'react';

// Base input props that both implementations will use
export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

// Props specific to the "After" implementation (no forwardRef)
export interface CallbackRefInputProps extends Omit<BaseInputProps, 'id'> {
    // Only keep ref-related differences
    registerInput?: (el: HTMLInputElement) => void;
    onInputFocus?: () => void;
}

// Props for the "Before" implementation (with forwardRef)
export interface ForwardRefInputProps extends BaseInputProps {
    // ForwardRef implementation doesn't need any additional props
}
