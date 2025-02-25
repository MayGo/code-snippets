import { useNavigate } from '@tanstack/react-router';

export function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate({ to: '..' });
    };

    return (
        <button
            onClick={handleBack}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
        </button>
    );
}
