export function MainButton({ pending, children }: { pending: boolean; children: React.ReactNode }) {
    return (
        <button
            type="submit"
            disabled={pending}
            className={`px-4 py-2 rounded-md text-white font-medium ${
                pending ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
            {children}
        </button>
    );
}
