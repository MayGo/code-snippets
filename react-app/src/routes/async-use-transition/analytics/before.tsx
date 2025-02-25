import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import '../../../App.css';

import { AnalyticsViewerBefore } from './-components/AnalyticsViewerBefore';

export const Route = createFileRoute('/async-use-transition/analytics/before')({
    component: App
});

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    count is {count}
                </button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <AnalyticsViewerBefore />
            </div>
        </div>
    );
}
