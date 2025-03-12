import React from 'react';

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    ref?: React.RefObject<HTMLInputElement | null>;
}
