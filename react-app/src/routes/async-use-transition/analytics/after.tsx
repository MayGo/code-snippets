import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import '../../../App.css';
import { Layout } from '../../../components/Layout';
import { AnalyticsViewerAfter } from './components/AnalyticsViewerAfter';
export const Route = createFileRoute('/async-use-transition/analytics/after')({
    component: Page
});

function Page() {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Using useTransition" description="UI remains responsive. Feedback to user" showBackButton={true}>
            <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                count is {count}
            </button>

            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                <AnalyticsViewerAfter />
            </div>
        </Layout>
    );
}
