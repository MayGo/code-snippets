interface ErrorMessageProps {
    error: string | null;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    if (!error) return null;
    return <p className="text-red-500 text-sm mt-1">{error}</p>;
}
