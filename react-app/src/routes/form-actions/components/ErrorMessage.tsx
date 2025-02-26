export function ErrorMessage({ error }: { error: string }) {
    return <p className="text-red-500 mb-4">{error}</p>;
}
