import React from 'react';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    ref?: React.RefObject<HTMLButtonElement | null>;
}
