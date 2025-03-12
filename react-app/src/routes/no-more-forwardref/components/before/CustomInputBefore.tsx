import React, { forwardRef } from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const CustomInputBefore = forwardRef<HTMLInputElement, CustomInputProps>(({ label, ...props }, ref) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium mb-1">{label}</label>}
            <input
                ref={ref}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
        </div>
    );
});
