import type { ReactNode } from 'react';

type UtilityButtonProps = {
    onClick: () => void;
    children: ReactNode;
};

export function UtilityButton({ onClick, children }: UtilityButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
            {children}
        </button>
    );
}
