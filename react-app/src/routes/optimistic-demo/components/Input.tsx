interface InputProps {
    name: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}

export function Input({ name, placeholder, disabled = false, required = false }: InputProps) {
    return (
        <input
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
    );
}
