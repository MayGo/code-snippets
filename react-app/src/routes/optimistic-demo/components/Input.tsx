interface InputProps {
    name: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, placeholder, disabled = false, required = false, value, onChange }: InputProps) {
    return (
        <input
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
    );
}
