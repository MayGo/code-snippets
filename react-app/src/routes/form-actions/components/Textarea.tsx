interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    required: boolean;
}

export function Textarea({ name, label, required, ...props }: TextareaProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                required={required}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                {...props}
            />
        </div>
    );
}
