interface ButtonProps {
    children: React.ReactNode;
    pending?: boolean;
    type?: 'submit' | 'button' | 'reset';
}

export function Button({ children, pending = false, type = 'submit' }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={pending}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {children}
        </button>
    );
}
